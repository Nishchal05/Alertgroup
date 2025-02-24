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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  <div className="fixed inset-0 bg-gradient-to-r from-gray-800 via-gray-900 to-black z-40 w-full h-full flex flex-col text-white">
    <div className="flex justify-end p-4">
      <Close
        className="text-white text-3xl cursor-pointer hover:text-red-500 transition duration-300"
        onClick={() => setmobileview(true)}
        aria-label="Close menu"
      />
    </div>
    <ul className="flex flex-col gap-8 text-center mt-12 text-lg">
      <li>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-2xl font-semibold hover:text-blue-400 transition-colors duration-300">
              Security Services
            </AccordionTrigger>
            <AccordionContent>
              <ul className="w-72 text-white flex flex-col gap-4 mt-4">
                {[
                  'Commercial Security Services',
                  'Employee Termination',
                  'Retail Loss Prevention',
                  'Hospital Security Services',
                  'Condo Security Services',
                  'Dispensary Security',
                  'Construction Site Security',
                  'Cargo Escort Security',
                  'Temporary Security Guards',
                ].map((service) => (
                  <li
                    key={service}
                    className="border rounded-lg p-4 cursor-pointer bg-gray-800 hover:bg-gray-700 transition-all duration-300 shadow-lg"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </li>
      <li>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-2xl font-semibold hover:text-blue-400 transition-colors duration-300">
              Event Security Services
            </AccordionTrigger>
            <AccordionContent>
              <ul className="w-72 text-white flex flex-col gap-4 mt-4">
                {['Concert Security', 'Event Staffing Services', 'Trade Show Security'].map(
                  (service) => (
                    <li
                      key={service}
                      className="border rounded-lg p-4 cursor-pointer bg-gray-800 hover:bg-gray-700 transition-all duration-300 shadow-lg"
                    >
                      {service}
                    </li>
                  )
                )}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </li>
      <li>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-2xl font-semibold hover:text-blue-400 transition-colors duration-300">
              Elite Security Services
            </AccordionTrigger>
            <AccordionContent>
              <ul className="w-72 text-white flex flex-col gap-4 mt-4">
                {['Executive Security Services', 'VIP BodyGuard', 'Personal Security Services'].map(
                  (service) => (
                    <li
                      key={service}
                      className="border rounded-lg p-4 cursor-pointer bg-gray-800 hover:bg-gray-700 transition-all duration-300 shadow-lg"
                    >
                      {service}
                    </li>
                  )
                )}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </li>
      <li className="text-2xl font-semibold cursor-pointer hover:text-blue-400 transition-colors duration-300">
        Contacts
      </li>
    </ul>
  </div>
)}

    </div>
  );
};

export default Header;
