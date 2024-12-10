import { useState } from 'react';
import { FadeIn, SlideIn } from '@/components/ui/motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Globe, AlertCircle } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";

interface AuditReport {
  url: string;
  timestamp: string;
  foKategoriak: {
    kategoria: string;
    pontszam: number;
    ertekeles: string;
  }[];
  teljesitmenyMetrikak: {
    metrika: string;
    ertek: string;
    pontszam: number;
    ertekeles: string;
    leiras: string;
  }[];
}

export function WebsiteAudit() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<AuditReport | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAudit = async () => {
    if (!url) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/.netlify/functions/audit', {
        method: 'POST',
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error('Hiba történt az audit során');
      }

      const data = await response.json();
      setReport(data);
    } catch (err) {
      setError('Hiba történt az audit során. Kérjük, próbálja újra később.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium mb-4">
              Weboldal Audit
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Ingyenes <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Weboldal Elemzés</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Elemezze weboldalát és kapjon részletes jelentést a teljesítményről, 
              SEO-ról és felhasználói élményről.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Weboldal URL megadása</CardTitle>
              <CardDescription>
                Adja meg a vizsgálni kívánt weboldal címét
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Input
                  type="url"
                  placeholder="https://example.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="flex-1"
                />
                <Button
                  onClick={handleAudit}
                  disabled={loading || !url}
                  className="bg-gradient-to-r from-purple-600 to-blue-500 text-white"
                >
                  {loading ? 'Elemzés...' : 'Elemzés Indítása'} <ArrowRight className="ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {error && (
            <Alert variant="destructive" className="mt-6">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Hiba</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {report && (
            <div className="mt-8 space-y-6">
              <SlideIn direction="up">
                <Card>
                  <CardHeader>
                    <CardTitle>Fő Kategóriák</CardTitle>
                    <CardDescription>Az oldal teljesítménye a főbb területeken</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {report.foKategoriak.map((kategoria, index) => (
                        <div
                          key={index}
                          className="p-4 rounded-lg border bg-gradient-to-br from-white to-gray-50"
                        >
                          <div className="font-medium text-gray-600">{kategoria.kategoria}</div>
                          <div className="mt-1">
                            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                              {Math.round(kategoria.pontszam)}%
                            </div>
                            <div className="text-sm text-gray-500">{kategoria.ertekeles}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </SlideIn>

              <SlideIn direction="up" delay={0.1}>
                <Card>
                  <CardHeader>
                    <CardTitle>Részletes Teljesítmény Metrikák</CardTitle>
                    <CardDescription>Core Web Vitals és egyéb teljesítménymutatók</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {report.teljesitmenyMetrikak.map((metrika, index) => (
                        <div
                          key={index}
                          className="p-4 rounded-lg border hover:border-purple-200 transition-all duration-300"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="font-medium">{metrika.metrika}</div>
                              <div className="text-sm text-gray-600 mt-1">{metrika.leiras}</div>
                            </div>
                            <div className="text-right">
                              <div className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                                {metrika.ertek}
                              </div>
                              <div className="text-sm text-gray-500">{metrika.ertekeles}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </SlideIn>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}