import { Handler } from '@netlify/functions';
import axios from 'axios';

interface PageSpeedResponse {
  lighthouseResult: {
    categories: {
      performance: { score: number };
      accessibility: { score: number };
      'best-practices': { score: number };
      seo: { score: number };
    };
    audits: {
      [key: string]: {
        score: number;
        displayValue?: string;
        description: string;
      };
    };
  };
}

const translateMetric = (metric: string): string => {
  const translations: { [key: string]: string } = {
    'first-contentful-paint': 'Első tartalmi megjelenítés',
    'speed-index': 'Sebesség index',
    'largest-contentful-paint': 'Legnagyobb tartalmi megjelenítés',
    'interactive': 'Interaktivitás',
    'total-blocking-time': 'Teljes blokkolási idő',
    'cumulative-layout-shift': 'Kumulatív elrendezésváltás',
    'performance': 'Teljesítmény',
    'accessibility': 'Akadálymentesség',
    'best-practices': 'Legjobb gyakorlatok',
    'seo': 'Keresőoptimalizálás'
  };
  return translations[metric] || metric;
};

const translateScore = (score: number): string => {
  if (score >= 0.9) return 'Kiváló';
  if (score >= 0.7) return 'Jó';
  if (score >= 0.5) return 'Fejlesztendő';
  return 'Gyenge';
};

const handler: Handler = async (event) => {
  console.log('Function started');
  
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  try {
    if (event.httpMethod === 'OPTIONS') {
      return {
        statusCode: 204,
        headers,
        body: ''
      };
    }

    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        headers,
        body: JSON.stringify({ error: 'Method Not Allowed' })
      };
    }

    const { url } = JSON.parse(event.body || '{}');
    if (!url) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'URL is required' })
      };
    }

    console.log('Making request to PageSpeed API for URL:', url);
    
    // Split the API request into multiple concurrent requests
    const strategies = ['mobile', 'desktop'];
    const requests = strategies.map(strategy => 
      axios.get(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed`, {
        params: {
          url: url,
          key: process.env.PAGESPEED_API_KEY,
          strategy: strategy
        },
        timeout: 25000
      })
    );

    const responses = await Promise.race([
      Promise.all(requests),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('API Timeout')), 25000)
      )
    ]);

    const mobileData = responses[0].data;
    console.log('Successfully received PageSpeed data');

    const categories = mobileData.lighthouseResult.categories;
    const audits = mobileData.lighthouseResult.audits;

    const mainMetrics = {
      performance: categories.performance.score,
      accessibility: categories.accessibility.score,
      bestPractices: categories['best-practices'].score,
      seo: categories.seo.score
    };

    const coreWebVitals = {
      fcp: audits['first-contentful-paint'],
      si: audits['speed-index'],
      lcp: audits['largest-contentful-paint'],
      tti: audits['interactive'],
      tbt: audits['total-blocking-time'],
      cls: audits['cumulative-layout-shift']
    };

    const report = {
      url,
      timestamp: new Date().toISOString(),
      foKategoriak: Object.entries(mainMetrics).map(([key, value]) => ({
        kategoria: translateMetric(key),
        pontszam: value * 100,
        ertekeles: translateScore(value)
      })),
      teljesitmenyMetrikak: Object.entries(coreWebVitals).map(([key, value]) => ({
        metrika: translateMetric(key),
        ertek: value.displayValue || 'N/A',
        pontszam: value.score * 100,
        ertekeles: translateScore(value.score),
        leiras: value.description
      }))
    };

    return {
      statusCode: 200,
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(report)
    };

  } catch (error: any) {
    console.error('Error:', error);
    
    let statusCode = 500;
    let errorMessage = 'Hiba történt az audit során';
    
    if (error.message === 'API Timeout') {
      statusCode = 504;
      errorMessage = 'Az audit túl sokáig tartott. Kérjük, próbálja újra később.';
    }

    return {
      statusCode,
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        error: errorMessage,
        details: error.message
      })
    };
  }
};

export { handler };