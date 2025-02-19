import Link from 'next/link';
import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';
import Services from './Services';

const Header = () => {
  return (
    <header className="flex h-[60px] justify-between text-center items-center p-[12px]">
      
      <div className="text-xl font-bold">AlertGroup</div>
      <div className='md:hidden'><MenuIcon/></div>
      <div className="hidden md:flex gap-6 items-center relative right-6 ">
        <Link href="/" className="hover:text-blue-600 transition-colors duration-300">
          Home
        </Link>
        <Link href='/' className="hover:text-blue-600 transition-colors duration-300">
          What We Serve
        </Link>
        <Link href="#" className="hover:text-blue-600 transition-colors duration-300">
          Who We Are
        </Link>
        <Link href="#" className="hover:text-blue-600 transition-colors duration-300">
          Contacts
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-black p-2 rounded-full text-white">
                <PersonIcon />
              </NavigationMenuTrigger>

              <NavigationMenuContent className="p-4 bg-white shadow-lg rounded-md">
                <div className="flex flex-col gap-2">
                  <Link href="/profile" className="text-black hover:underline">
                    Profile
                  </Link>
                  <Link href="/settings" className="text-black hover:underline">
                    Settings
                  </Link>
                  <Link href="/logout" className="text-black hover:underline">
                    Logout
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Header;
