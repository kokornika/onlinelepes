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
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    const { url } = JSON.parse(event.body || '{}');
    if (!url) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'URL is required' })
      };
    }

    // PageSpeed Insights API hívás
    const pageSpeedUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=mobile&key=${process.env.PAGESPEED_API_KEY}`;
    const { data } = await axios.get<PageSpeedResponse>(pageSpeedUrl);

    // Eredmények feldolgozása
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

    // Magyar nyelvű jelentés összeállítása
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
      body: JSON.stringify(report)
    };

  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' })
    };
  }
};

export { handler };