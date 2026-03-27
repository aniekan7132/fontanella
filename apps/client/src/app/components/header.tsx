import { useState } from 'react';
import { Logo } from '@fontanella/shared-components';
import { Button } from '@fontanella/shadcn';
import { ChevronDownIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Path } from '../constants/path';
import { nav_menu } from '../constants/data';

export function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  let closeTimeout: NodeJS.Timeout;

  const openDropdown = (title: string) => {
    clearTimeout(closeTimeout);
    setActiveDropdown(title);
  };

  const closeDropdown = () => {
    closeTimeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  return (
    <div className="bg-[#F9FCFDE5] py-5 px-6 flex items-center justify-between relative">
      <Logo navigateTo={Path.landing} />

      <div className="hidden lg:flex items-center justify-start gap-6 relative">
        {nav_menu.map((nav) => {
          const isOpen = activeDropdown === nav.title;

          return (
            <div
              key={nav.title}
              className="relative group"
              onMouseOver={() => openDropdown(nav.title)}
              onMouseLeave={closeDropdown}
            >
              <div className="uppercase text-md lg:text-[16px] flex items-center gap-x-2 font-semibold cursor-pointer">
                {nav.title}
                {nav.submenu && (
                  <ChevronDownIcon
                    className={`text-xl transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                )}
              </div>

              {nav.submenu && isOpen && (
                <div
                  className={`absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg p-6 border border-t-blue-500 ${
                    nav.submenu.columns === '3' ? 'grid grid-cols-3 gap-6 w-[600px]' : 'w-auto min-w-[200px]'
                  }`}
                  style={{ gridTemplateColumns: `repeat(${nav.submenu.columns}, 1fr)` }}
                  onMouseOver={() => openDropdown(nav.title)}
                  onMouseLeave={closeDropdown}
                >
                  {nav.submenu.options.map((section) => (
                    <div key={section.title} className="flex flex-col">
                      <h4 className="text-gray-800 font-bold mb-2">{section.title}</h4>
                      {section.menuItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.path}
                          className="text-gray-700 hover:text-blue-600 font-medium py-1"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="hidden lg:inline space-x-2">
        <Button className="rounded-[26px] py-3 px-4 lg:px-6" variant="outline">
          Login
        </Button>
        <Button className="rounded-[26px] py-3 px-4 lg:px-6 bg-clPrimary hover:bg-blue-800 text-white">
          Book a Demo
        </Button>
      </div>

      <div className="block lg:hidden">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <HamburgerMenuIcon className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md p-4 flex flex-col">
          {nav_menu.map((nav) => (
            <div key={nav.title} className="py-2 border-b border-gray-200">
              <div
                className="flex justify-between items-center uppercase text-md font-semibold cursor-pointer"
                onClick={() => setActiveDropdown(activeDropdown === nav.title ? null : nav.title)}
              >
                {nav.title}
                {nav.submenu && (
                  <ChevronDownIcon
                    className={`text-xl transition-transform duration-200 ${
                      activeDropdown === nav.title ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                )}
              </div>

              {nav.submenu && activeDropdown === nav.title && (
                <div className="mt-2 flex flex-col gap-2 pl-4">
                  {nav.submenu.options.map((section) => (
                    <div key={section.title}>
                      <h4 className="text-gray-800 font-bold">{section.title}</h4>
                      {section.menuItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.path}
                          className="text-gray-700 hover:text-blue-600 font-medium py-1 block"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="mt-4 flex flex-col space-y-2">
            <Button className="rounded-[26px] py-3 px-6" variant="outline">
              Login
            </Button>
            <Button className="rounded-[26px] py-3 px-6 bg-clPrimary hover:bg-blue-800 text-white">
              Book a Demo
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
