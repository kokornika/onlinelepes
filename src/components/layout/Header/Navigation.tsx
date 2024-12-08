import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Code, Megaphone, Search, Users, LineChart, Settings } from 'lucide-react';

const services = {
  development: {
    title: "Weboldal Fejlesztés",
    description: "Modern, reszponzív és többnyelvű weboldalak tervezése és fejlesztése.",
    icon: <Code className="h-5 w-5" />,
    href: "/szolgaltatasok/weboldal-fejlesztes"
  },
  marketing: {
    title: "Marketing",
    description: "Online marketing szolgáltatások a növekedéshez.",
    icon: <Megaphone className="h-5 w-5" />,
    href: "/szolgaltatasok/marketing",
    subItems: [
      {
        title: "Google Hirdetések",
        description: "Jelenjen meg az első helyen, amikor szolgáltatását keresik.",
        icon: <Search className="h-5 w-5" />,
        href: "/szolgaltatasok/marketing/google-ads"
      },
      {
        title: "Facebook & Instagram",
        description: "Érje el célközönségét a közösségi médiában.",
        icon: <Users className="h-5 w-5" />,
        href: "/szolgaltatasok/marketing/facebook-ads"
      },
      {
        title: "Keresőoptimalizálás",
        description: "Kerüljön az első oldalra a Google keresőben.",
        icon: <LineChart className="h-5 w-5" />,
        href: "/szolgaltatasok/marketing/seo"
      }
    ]
  },
  maintenance: {
    title: "Karbantartás",
    description: "Folyamatos támogatás és karbantartás weboldalához.",
    icon: <Settings className="h-5 w-5" />,
    href: "/szolgaltatasok/karbantartas"
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
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-gray-700 hover:text-purple-600 transition-colors px-2 py-1 rounded-md hover:bg-purple-50">
            Szolgáltatások
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple-50 to-blue-50 p-6 no-underline outline-none focus:shadow-md"
                    to={services.development.href}
                  >
                    <div className="mb-2 flex items-center gap-2">
                      {services.development.icon}
                      <span className="text-lg font-medium">
                        {services.development.title}
                      </span>
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      {services.development.description}
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li className="col-span-1">
                <div className="mb-4 flex items-center gap-2">
                  {services.marketing.icon}
                  <Link
                    to={services.marketing.href}
                    className="text-lg font-medium hover:text-purple-600 transition-colors"
                  >
                    {services.marketing.title}
                  </Link>
                </div>
                <ul className="space-y-2">
                  {services.marketing.subItems.map((item, index) => (
                    <ListItem
                      key={index}
                      title={
                        <div className="flex items-center gap-2">
                          {item.icon}
                          <span>{item.title}</span>
                        </div>
                      }
                      href={item.href}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </li>
              <li className="row-span-1">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple-50 to-blue-50 p-6 no-underline outline-none focus:shadow-md"
                    to={services.maintenance.href}
                  >
                    <div className="mb-2 flex items-center gap-2">
                      {services.maintenance.icon}
                      <span className="text-lg font-medium">
                        {services.maintenance.title}
                      </span>
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      {services.maintenance.description}
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}