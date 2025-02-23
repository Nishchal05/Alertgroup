"use client";
import Link from "next/link";
import React, { useContext } from "react";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { DataContext } from "./context/Topbar";
import { Close } from "@mui/icons-material";

const Header = () => {
  const { laptopview, setmobileview } = useContext(DataContext);

  return (
    <div className="flex flex-col">
      <header className="fixed top-0 left-0 w-full flex h-[60px] justify-between items-center p-[12px] backdrop-blur-md bg-black/50 z-50">
        <Link href="/" className="flex items-center">
          <img src="/AlertGroup.png" alt="Alertgroup" width={60} />
          <h1 className="text-white text-4xl font-serif">
            Alert<span className="text-yellow-500">Group</span>
          </h1>
        </Link>
        <div className="md:hidden">
          {laptopview ? (
            <MenuIcon
              className="text-white"
              onClick={() => setmobileview(false)}
              aria-label="Open menu"
            />
          ) : (
            <Close
              className="text-white"
              onClick={() => setmobileview(true)}
              aria-label="Close menu"
            />
          )}
        </div>
        <div className="hidden md:flex gap-4 items-center relative right-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent p-2 rounded-full text-white text-md">
                  Security Services
                </NavigationMenuTrigger>

                <NavigationMenuContent className="p-4 bg-black shadow-lg rounded-md">
                  <div className="flex flex-col gap-2">
                    <ul className=" w-64 text-white flex flex-col gap-2">
                      <li className=" border rounded-lg p-3 cursor-pointer hover:bg-slate-700">
                        Commercial Security Services
                      </li>
                      <li className=" border rounded-lg p-3 cursor-pointer hover:bg-slate-700">
                        Employee Termination
                      </li>
                      <li className=" border rounded-lg p-3 cursor-pointer hover:bg-slate-700">
                        Retail Loss Prevention
                      </li>
                      <li className=" border rounded-lg p-3 cursor-pointer hover:bg-slate-700">
                        Hospital Security Services
                      </li>
                      <li className=" border rounded-lg p-3 cursor-pointer hover:bg-slate-700">
                        Condo Security Services
                      </li>
                      <li className=" border rounded-lg p-3 cursor-pointer hover:bg-slate-700">
                        Dispensary Security
                      </li>
                      <li className=" border rounded-lg p-3 cursor-pointer hover:bg-slate-700">
                        Construction Site Security
                      </li>
                      <li className=" border rounded-lg p-3 cursor-pointer hover:bg-slate-700">
                        Cargo Escort Security
                      </li>
                      <li className=" border rounded-lg p-3 cursor-pointer hover:bg-slate-700">
                        Temporary Security Guards
                      </li>
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent p-2 rounded-full text-white text-md">
                  Event Security Services
                </NavigationMenuTrigger>

                <NavigationMenuContent className="p-4 bg-black shadow-lg rounded-md">
                  <div className="flex flex-col gap-2">
                    <ul className=" w-64 text-white flex flex-col gap-2">
                      <li className=" border rounded-lg p-3 cursor-pointer hover:bg-slate-700">
                        Concert Security
                      </li>
                      <li className=" border rounded-lg p-3 cursor-pointer hover:bg-slate-700">
                        Event Staffing Services
                      </li>
                      <li className=" border rounded-lg p-3 cursor-pointer hover:bg-slate-700">
                        Trade Show Security
                      </li>
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent p-2 rounded-full text-white text-md">
                  Elite Security Services
                </NavigationMenuTrigger>

                <NavigationMenuContent className="p-4 bg-black shadow-lg rounded-md">
                  <div className="flex flex-col gap-2">
                    <ul className=" w-64 text-white flex flex-col gap-2">
                      <li className=" border rounded-lg p-3 cursor-pointer hover:bg-slate-700">
                        Executive Security Services
                      </li>
                      <li className=" border rounded-lg p-3 cursor-pointer hover:bg-slate-700">
                        VIP BodyGuard
                      </li>
                      <li className=" border rounded-lg p-3 cursor-pointer hover:bg-slate-700">
                        Personal Security Services
                      </li>
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Link
            href="#Contacts"
            className="text-white hover:text-blue-600 transition-colors duration-300 text-md"
          >
            Contacts
          </Link>

          {/* User Account Menu */}
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
                    <Link
                      href="/settings"
                      className="text-black hover:underline"
                    >
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

      {/* Mobile Menu Covering Full Page */}
      {!laptopview && (
        <div className="fixed inset-0 bg-black z-40 w-full h-full flex flex-col text-white">
          <div className="flex justify-end p-4">
            <Close
              className="text-white text-2xl cursor-pointer"
              onClick={() => setmobileview(true)}
              aria-label="Close menu"
            />
          </div>
          <ul className="flex flex-col gap-6 text-center mt-8 text-lg">
            <li className="cursor-pointer">Security Services</li>
            <li className="cursor-pointer">Event Security Services</li>
            <li className="cursor-pointer">Elite Security Services</li>
            <li className="cursor-pointer">Contacts</li>
            <li className="cursor-pointer">Sign In</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
