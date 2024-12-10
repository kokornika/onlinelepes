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
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
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

    console.log('Environment:', { 
      nodeEnv: process.env.NODE_ENV, 
      hasApiKey: !!process.env.PAGESPEED_API_KEY,
      apiKeyLength: process.env.PAGESPEED_API_KEY?.length 
    });

    console.log('Making request to PageSpeed API for URL:', url);

    const apiKey = process.env.PAGESPEED_API_KEY;
    if (!apiKey) {
      throw new Error('PageSpeed API key is not configured');
    }

    const apiUrl = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';
    const params = new URLSearchParams({
      url: url,
      key: apiKey,
      strategy: 'mobile',
      category: ['performance', 'accessibility', 'best-practices', 'seo'].join(',')
    });

    const fullUrl = `${apiUrl}?${params.toString()}`;
    console.log('Full API URL:', fullUrl);

    const response = await axios.get(fullUrl, {
      timeout: 20000,
      validateStatus: null
    });

    console.log('API Response Status:', response.status);
    if (response.status !== 200) {
      console.error('API Error Response:', response.data);
      throw new Error(`PageSpeed API returned status ${response.status}`);
    }

    console.log('Successfully received PageSpeed data');

    const { categories, audits } = response.data.lighthouseResult;

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
      headers,
      body: JSON.stringify(report)
    };

  } catch (error: any) {
    console.error('Error:', error);
    
    let statusCode = 500;
    let errorMessage = 'Hiba történt az audit során';
    
    if (error.code === 'ECONNABORTED' || error.message.includes('timeout')) {
      statusCode = 504;
      errorMessage = 'Az audit túl sokáig tartott. Kérjük, próbálja újra később.';
    } else if (error.response) {
      statusCode = error.response.status;
      errorMessage = `API hiba: ${error.response.data?.error?.message || error.message}`;
    }

    return {
      statusCode,
      headers,
      body: JSON.stringify({
        error: errorMessage,
        details: error.message
      })
    };
  }
};

export { handler };