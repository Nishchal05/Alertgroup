import Link from "next/link";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  return (
    <header className=" flex h-[60px] justify-between text-center items-center p-[12px]">
      <Link href='/' className=" flex items-center">
        <img src="/AlertGroup.png" alt="Alertgroup" width={60} />
        <h1 className=" text-white text-2xl font-serif">Alert<span className=" text-yellow-500">Group</span></h1>
      </Link>
      <div className="md:hidden">
        <MenuIcon />
      </div>
      <div className="hidden md:flex gap-6 items-center relative right-6 ">
        <Link
          href="/"
          className="hover:text-blue-600 transition-colors duration-300"
        >
          Home
        </Link>
        <Link
          href="#Services"
          className="hover:text-blue-600 transition-colors duration-300"
        >
          What We Serve
        </Link>
        <Link
          href="#About"
          className="hover:text-blue-600 transition-colors duration-300"
        >
          Who We Are
        </Link>
        <Link
          href="#Contacts"
          className="hover:text-blue-600 transition-colors duration-300"
        >
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
                  <Link
                    href="/api/auth/signin"
                    className="text-black hover:underline"
                  >
                    SignIn
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
