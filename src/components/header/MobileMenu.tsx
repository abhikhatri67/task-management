import { FC } from 'react';
import { Button } from '@/components/ui/button';
import { Bell, Search } from 'lucide-react';

interface MobileMenuProps {
  links: Array<{ href: string; text: string }>;
  isOpen: boolean;
}

const MobileMenu: FC<MobileMenuProps> = ({ links, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="block px-3 py-2 text-base font-medium text-gray-900 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            {link.text}
          </a>
        ))}
      </div>
      <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2 px-2">
          <Button className="w-full dark:bg-blue-600 dark:hover:bg-blue-700">
            New Task
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            <Search />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            <Bell />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
