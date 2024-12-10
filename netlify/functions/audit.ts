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
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle preflight requests
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

  try {
    const { url } = JSON.parse(event.body || '{}');
    if (!url) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'URL is required' })
      };
    }

    // Validate API key
    const apiKey = process.env.PAGESPEED_API_KEY;
    if (!apiKey) {
      console.error('PageSpeed API key is missing');
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          error: 'API konfiguráció hiba',
          details: 'PageSpeed API kulcs nincs beállítva'
        })
      };
    }

    // Log environment for debugging
    console.log('Environment:', {
      nodeEnv: process.env.NODE_ENV,
      hasApiKey: !!apiKey,
      apiKeyLength: apiKey.length
    });

    // Make request to PageSpeed API
    console.log('Making request to PageSpeed API for URL:', url);
    const pageSpeedUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=mobile&key=${apiKey}`;
    
    const response = await axios.get<PageSpeedResponse>(pageSpeedUrl, {
      timeout: 30000, // 30 sec timeout
      validateStatus: null // Allow any status code
    });

    // Log response status and data for debugging
    console.log('PageSpeed API response status:', response.status);
    if (response.status !== 200) {
      console.error('PageSpeed API error:', response.data);
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({
          error: 'PageSpeed API hiba',
          details: response.data?.error?.message || 'Ismeretlen hiba történt'
        })
      };
    }

    const { data } = response;

    // Process results
    const categories = data.lighthouseResult.categories;
    const audits = data.lighthouseResult.audits;

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

    // Create report
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
    console.error('Function error:', error);
    
    const errorResponse = {
      error: 'Hiba történt az audit során',
      details: error.message,
      status: error.response?.status,
      data: error.response?.data
    };

    return {
      statusCode: error.response?.status || 500,
      headers,
      body: JSON.stringify(errorResponse)
    };
  }
};

export { handler };