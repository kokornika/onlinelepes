import { Code, Globe, Megaphone, QrCode } from 'lucide-react';

export const serviceData = [
  {
    icon: Code,
    title: 'Digitális Megoldások',
    description:
      'Modern, reszponzív és többnyelvű weboldalak tervezése és fejlesztése, amely tökéletesen működik minden eszközön.',
    path: '/szolgaltatasok/weboldal-fejlesztes',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Megaphone,
    title: 'Online Marketing',
    description:
      'Google és Facebook hirdetések kezelése, kampányok tervezése és optimalizálása a maximális hatékonyságért.',
    path: '/szolgaltatasok/marketing',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: QrCode,
    title: 'Digitális Névjegykártya',
    description:
      'Modern, QR-kódos digitális névjegykártyák készítése egyedi designnal és funkcionalitással.',
    link: 'https://qrnevjegy.hu/',
    isExternal: true,
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Globe,
    title: 'Automatizált Megoldások',
    description:
      'Személyre szabott megoldások és egyedi funkciók fejlesztése az Ön igényei szerint.',
    path: '/szolgaltatasok/egyedi-fejlesztes',
    gradient: 'from-green-500 to-emerald-500'
  }
] as const;