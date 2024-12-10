import { Link } from 'react-router-dom';
import { Code, Megaphone, Search, Users, LineChart, Settings, BookOpen, Activity } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const services = {
  development: {
    title: "Weboldalkészítés",
    description: "Modern, reszponzív és többnyelvű weboldalak tervezése és fejlesztése.",
    icon: <Code className="h-5 w-5" aria-hidden="true" />,
    href: "/szolgaltatasok/weboldal-fejlesztes"
  },
  maintenance: {
    title: "Karbantartás",
    description: "Folyamatos támogatás és karbantartás weboldalához.",
    icon: <Settings className="h-5 w-5" aria-hidden="true" />,
    href: "/szolgaltatasok/karbantartas"
  },
  marketing: {
    title: "Marketing",
    description: "Online marketing szolgáltatások a növekedéshez.",
    icon: <Megaphone className="h-5 w-5" aria-hidden="true" />,
    href: "/szolgaltatasok/marketing",
    subItems: [
      {
        title: "Google Hirdetések",
        description: "Jelenjen meg az első helyen, amikor szolgáltatását keresik.",
        icon: <Search className="h-5 w-5" aria-hidden="true" />,
        href: "/szolgaltatasok/marketing/google-ads"
      },
      {
        title: "Facebook & Instagram",
        description: "Érje el célközönségét a közösségi médiában.",
        icon: <Users className="h-5 w-5" aria-hidden="true" />,
        href: "/szolgaltatasok/marketing/facebook-ads"
      },
      {
        title: "Keresőoptimalizálás",
        description: "Kerüljön az első oldalra a Google keresőben.",
        icon: <LineChart className="h-5 w-5" aria-hidden="true" />,
        href: "/szolgaltatasok/marketing/seo"
      }
    ]
  }
};

const ListItem = ({ className, title, children, ...props }: any) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export function Navigation() {
  return (
    <NavigationMenu className="hidden md:flex" aria-label="Fő navigáció">
      <NavigationMenuList className="flex gap-4">
        <NavigationMenuItem>
          <Link 
            to={services.development.href}
            className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors px-4 py-2 rounded-md hover:bg-purple-50 whitespace-nowrap"
          >
            {services.development.icon}
            {services.development.title}
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link 
            to={services.maintenance.href}
            className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors px-4 py-2 rounded-md hover:bg-purple-50 whitespace-nowrap"
          >
            {services.maintenance.icon}
            {services.maintenance.title}
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger 
            className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors px-4 py-2 rounded-md hover:bg-purple-50 whitespace-nowrap"
          >
            {services.marketing.icon}
            {services.marketing.title}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[400px] p-4 md:w-[500px] lg:w-[600px]">
              <li className="mb-4">
                <Link
                  to={services.marketing.href}
                  className="flex items-center gap-2 p-3 rounded-md hover:bg-purple-50 transition-colors"
                >
                  {services.marketing.icon}
                  <div>
                    <div className="font-medium">{services.marketing.title}</div>
                    <div className="text-sm text-gray-600">{services.marketing.description}</div>
                  </div>
                </Link>
              </li>
              <li className="grid grid-cols-1 gap-2">
                {services.marketing.subItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    className="flex items-center gap-3 p-3 rounded-md hover:bg-purple-50 transition-colors"
                  >
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-gray-600">{item.description}</div>
                    </div>
                  </Link>
                ))}
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link 
            to="/blog"
            className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors px-4 py-2 rounded-md hover:bg-purple-50 whitespace-nowrap"
          >
            <BookOpen className="h-5 w-5" />
            Blog
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link 
            to="/weboldal-audit"
            className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors px-4 py-2 rounded-md hover:bg-purple-50 whitespace-nowrap"
          >
            <Activity className="h-5 w-5" />
            Weboldal Audit
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}