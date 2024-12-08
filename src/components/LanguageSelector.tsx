import { FadeIn } from '@/components/ui/motion';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  {
    code: 'gb',
    name: 'English',
    flag: 'https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/gb.svg'
  },
  {
    code: 'de',
    name: 'Deutsch',
    flag: 'https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/de.svg'
  },
  {
    code: 'it',
    name: 'Italiano',
    flag: 'https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/it.svg'
  },
  {
    code: 'fr',
    name: 'Français',
    flag: 'https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/fr.svg'
  },
  {
    code: 'es',
    name: 'Español',
    flag: 'https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/es.svg'
  },
  {
    code: 'ru',
    name: 'Русский',
    flag: 'https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/ru.svg'
  },
  {
    code: 'cn',
    name: '中文',
    flag: 'https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/cn.svg'
  }
];

export function LanguageSelector() {
  return (
    <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
      {languages.map((lang) => (
        <div 
          key={lang.code}
          className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border hover:border-purple-200 transition-colors"
        >
          <img 
            src={lang.flag} 
            alt={`${lang.name} flag`}
            className="w-6 h-4 object-cover rounded-sm"
          />
          <span className="font-medium">{lang.name}</span>
        </div>
      ))}
    </div>
  );
}