import { FC, useState } from 'react';
import MobileMenu from './MobileMenu';

import { Button } from '@/components/ui/button';
import { Bell, Menu, Search, X } from 'lucide-react';

const links = [
  { href: '#', text: 'Home' },
  { href: '#', text: 'Tasks' },
  { href: '#', text: 'Calendar' },
  { href: '#', text: 'Reports' },
  { href: '#', text: 'Inbox' },
];

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Task Management
              </span>
            </div>
            <nav className="hidden md:ml-10 md:flex md:space-x-8">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-900 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium"
                >
                  {link.text}
                </a>
              ))}
            </nav>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-2">
            <Button className="dark:bg-blue-600 dark:hover:bg-blue-700">
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
          <div className="md:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        <MobileMenu links={links} isOpen={isOpen} />
      </div>
    </header>
  );
};

export default Header;
