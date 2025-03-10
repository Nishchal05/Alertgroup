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
import { ScrollArea } from "@/components/ui/scroll-area"
const Header = () => {
  const { laptopview, setmobileview,Securityservices,setservicename } = useContext(DataContext);
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
                    {Securityservices.filter(val=>val.type=='Security Services').map((val, index) => (
                      <ul className=" w-64 text-white flex flex-col gap-2" key={index} onClick={()=>setservicename(val.serviceName)}>
                        <li className="border rounded-lg p-3 cursor-pointer hover:bg-slate-700">
                        <Link href='/Services'>{val.serviceName}</Link>
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
                    {Securityservices.filter(val=>val.type=='Event Security Services').map((val, index) => (
                      <ul className="w-64 text-white flex flex-col gap-2" key={index} onClick={()=>setservicename(val.serviceName)}>
                        <li className="border rounded-lg p-3 cursor-pointer hover:bg-slate-700">
                        <Link href='/Services'>{val.serviceName}</Link>
                          
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
                    {Securityservices.filter(val=>val.type=='Elite Security Services').map((val, index) => (
                      <ul className="w-64 text-white flex flex-col gap-2" key={index} onClick={()=>setservicename(val.serviceName)}>
                        <li className="border rounded-lg p-3 cursor-pointer hover:bg-slate-700">
                        <Link href='/Services'>{val.serviceName}</Link>
                        </li>
                      </ul>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Contacts Link */}
          <Link href="/Contacts" className="text-white hover:text-blue-600 transition-colors duration-300 text-md">
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
                    
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>

      {/* Mobile Menu */}
      {!laptopview && (
        <div className="fixed inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 z-40 w-full h-screen flex flex-col text-white p-6">
  <ul className="flex flex-col gap-6 text-center mt-12 text-lg">
    {/* Security Services */}
    <li>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-2xl font-semibold hover:text-blue-400 transition-colors duration-300">
            Security Services
          </AccordionTrigger>
          <AccordionContent>
            <ul className="w-full text-white flex flex-col gap-4 mt-4">
              <ScrollArea className="h-[220px] w-full rounded-md border border-gray-600 p-4 bg-gray-900">
                {Securityservices.filter(val=>val.type=='Security Services').map((service) => (
                  <li
                    key={service.name}
                    className="border rounded-lg p-3 cursor-pointer bg-gray-800 hover:bg-gray-600 transition-all duration-300 shadow-md"
                    onClick={()=>{setservicename(service.serviceName)
                    setmobileview(true)}}
                  >
                    <Link href='/Services'>{service.serviceName}</Link>
                  </li>
                ))}
              </ScrollArea>
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
            <ul className="w-full text-white flex flex-col gap-4 mt-4">
              {Securityservices.filter(val=>val.type=='Event Security Services').map((service) => (
                <li
                  key={service.serviceName}
                  onClick={()=>{setservicename(service.serviceName)
                  setmobileview(true);}}
                  className="border rounded-lg p-3 cursor-pointer bg-gray-800 hover:bg-gray-600 transition-all duration-300 shadow-md"
                >
                  <Link href='/Services'>{service.serviceName}</Link>
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
            <ul className="w-full text-white flex flex-col gap-4 mt-4">
              {Securityservices.filter(val=>val.type=='Elite Security Services').map((service) => (
                <li
                  key={service.name}
                  onClick={()=>{setservicename(service.serviceName)
                  setmobileview(true)}}
                  className="border rounded-lg p-3 cursor-pointer bg-gray-800 hover:bg-gray-600 transition-all duration-300 shadow-md"
                >
                  <Link href='/Services'>{service.serviceName}</Link>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </li>

    {/* Contacts */}
    <li>
      <Link
        href="/Contacts"
        className="text-2xl font-semibold hover:text-blue-400 transition-colors duration-300"
        onClick={() => {
          setmobileview(true);
        }}
      >
        Contacts
      </Link>
    </li>

    {/* User Account */}
    <li className="flex flex-col gap-4 items-center">
      {session?.data?.user ? (
       
          <Link
            href="/"
            onClick={() => {
              signOut();
              setmobileview(true);
            }}
            className="text-lg rounded-lg cursor-pointer hover:text-blue-400 text-white"
          >
            LogOut
          </Link>
          
        
      ) : (
        <div className="flex flex-col items-center gap-4 h-fit">
          <Link
            href="/auth/sign-in"
            onClick={() => {
              setmobileview(true);
            }}
            className="text-lg font-semibold hover:text-blue-400 transition-colors duration-300"
          >
            LogIn
          </Link>
          <Link
            href="/auth/sign-up"
            onClick={() => {
              setmobileview(true);
            }}
            className="text-lg font-semibold hover:text-blue-400 transition-colors duration-300"
          >
            SignUp
          </Link>
        </div>
      )}
    </li>
  </ul>
</div>

      )}
    </div>
  );
};

export default Header;
