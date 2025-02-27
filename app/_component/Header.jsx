"use client";
import Link from "next/link";
import React, { useContext } from "react";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import { useSession, signOut } from "next-auth/react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { DataContext } from "./context/Topbar";
import { Close } from "@mui/icons-material";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { EliteSecurityServices, EventSecurityServices, SecurityList } from "./_data/SecurityList";

const Header = () => {
  const { laptopview, setmobileview } = useContext(DataContext);
  const session = useSession();

  return (
    <div className="flex flex-col">
      <header className="fixed top-0 left-0 w-full flex h-[60px] justify-between items-center p-[12px] backdrop-blur-md bg-black/50 z-50">
        <Link href="/" className="flex items-center">
          <img src="/AlertGroup.png" alt="Alertgroup" width={60} />
          <h1 className="text-white text-4xl font-serif">
            Alert<span className="text-blue-500">Group</span>
          </h1>
        </Link>

        {/* Toggle Menu for Mobile */}
        <div className="md:hidden">
          {laptopview ? (
            <MenuIcon
              className="text-blue-500"
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
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4 items-center relative right-6">
          {/* Security Services */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent p-2 rounded-full text-white text-md">
                  Security Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-4 bg-black shadow-lg rounded-md">
                  <div className="flex flex-col gap-2">
                    {SecurityList.map((val, index) => (
                      <ul className=" w-64 text-white flex flex-col gap-2" key={index}>
                        <li className="border rounded-lg p-3 cursor-pointer hover:bg-slate-700">
                          {val.name}
                        </li>
                      </ul>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          {/* Event Security Services */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent p-2 rounded-full text-white text-md">
                  Event Security Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-4 bg-black shadow-lg rounded-md">
                  <div className="flex flex-col gap-2">
                    {EventSecurityServices.map((val, index) => (
                      <ul className="w-64 text-white flex flex-col gap-2" key={index}>
                        <li className="border rounded-lg p-3 cursor-pointer hover:bg-slate-700">
                          {val.name}
                        </li>
                      </ul>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          {/* Elite Security Services */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent p-2 rounded-full text-white text-md">
                  Elite Security Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-4 bg-black shadow-lg rounded-md">
                  <div className="flex flex-col gap-2">
                    {EliteSecurityServices.map((val, index) => (
                      <ul className="w-64 text-white flex flex-col gap-2" key={index}>
                        <li className="border rounded-lg p-3 cursor-pointer hover:bg-slate-700">
                          {val.name}
                        </li>
                      </ul>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Contacts Link */}
          <Link href="#Contacts" className="text-white hover:text-blue-600 transition-colors duration-300 text-md">
            Contacts
          </Link>

          {/* User Account */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-black p-2 rounded-full text-white">
                  <PersonIcon />
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-4 bg-black shadow-lg rounded-md">
                  <div className="flex flex-col gap-2 w-fit">
                    {session?.data?.user ? (
                      <Link href="/" onClick={() => signOut()} className="text-sm rounded-lg cursor-pointer hover:text-blue-500 text-white">
                        LogOut
                      </Link>
                    ) : (
                      <div className="flex flex-col items-center gap-4 h-fit">
                        <Link href="/auth/sign-in" className="text-sm font-semibold hover:text-blue-400 transition-colors duration-300 text-white">
                          LogIn
                        </Link>
                        <Link href="/auth/sign-up" className="text-sm font-semibold hover:text-blue-400 transition-colors duration-300 text-white">
                          SignUp
                        </Link>
                      </div>
                    )}
                    <Link href="/logout" className="text-black hover:underline">
                      Profile
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>

      {/* Mobile Menu */}
      {!laptopview && (
        <div className="fixed inset-0 bg-gradient-to-r from-gray-800 via-gray-900 to-black z-40 w-full h-full flex flex-col text-white p-6">
          <div className="flex justify-end p-4">
            <Close className="text-white text-3xl cursor-pointer hover:text-red-500 transition duration-300" onClick={() => setmobileview(true)} aria-label="Close menu" />
          </div>

          <ul className="flex flex-col gap-8 text-center mt-12 text-lg">
            {/* Security Services */}
            <li>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-2xl font-semibold hover:text-blue-400 transition-colors duration-300">
                    Security Services
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="w-72 text-white flex flex-col gap-4 mt-4">
                      {SecurityList.map((service) => (
                        <li key={service.name} className="border rounded-lg p-4 cursor-pointer bg-gray-800 hover:bg-gray-700 transition-all duration-300 shadow-lg">
                          {service.name}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </li>

            {/* Event Security Services */}
            <li>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-2xl font-semibold hover:text-blue-400 transition-colors duration-300">
                    Event Security Services
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="w-72 text-white flex flex-col gap-4 mt-4">
                      {EventSecurityServices.map((service) => (
                        <li key={service.name} className="border rounded-lg p-4 cursor-pointer bg-gray-800 hover:bg-gray-700 transition-all duration-300 shadow-lg">
                          {service.name}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </li>

            {/* Elite Security Services */}
            <li>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-2xl font-semibold hover:text-blue-400 transition-colors duration-300">
                    Elite Security Services
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="w-72 text-white flex flex-col gap-4 mt-4">
                      {EliteSecurityServices.map((service) => (
                        <li key={service.name} className="border rounded-lg p-4 cursor-pointer bg-gray-800 hover:bg-gray-700 transition-all duration-300 shadow-lg">
                          {service.name}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </li>

            {/* Contacts */}
            <li>
              <Link href="#Contacts" className="text-2xl font-semibold hover:text-blue-400 transition-colors duration-300">
                Contacts
              </Link>
            </li>

            {/* User Account */}
            <li className="flex flex-col gap-4 items-center">
              {session?.data?.user ? (
                <Link href="/" onClick={() => signOut()} className="text-lg rounded-lg cursor-pointer hover:text-blue-400 text-white">
                  LogOut
                </Link>
              ) : (
                <div className="flex flex-col items-center gap-4 h-fit">
                  <Link href="/auth/sign-in" className="text-lg font-semibold hover:text-blue-400 transition-colors duration-300">
                    LogIn
                  </Link>
                  <Link href="/auth/sign-up" className="text-lg font-semibold hover:text-blue-400 transition-colors duration-300">
                    SignUp
                  </Link>
                </div>
              )}
              <Link href="/profile" className="text-lg hover:underline">
                Profile
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
