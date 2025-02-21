import {
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  PhoneAndroid,
  Twitter,
} from "@mui/icons-material";
import { Phone, PhoneCall } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex justify-evenly w-full mt-24 items-center border-t-[1px] h-[50vh]">
      <div className=" flex flex-col gap-4 items-center">
        <div className=" flex items-center">
          <img src="/AlertGroup.png" alt="AlertGroup" width={100}/>
          <h1 className="text-2xl md:text-6xl font-serif">
            Alert<span className=" text-yellow-500">Group</span>
          </h1>
        </div>
        <div className=" flex flex-col gap-2">
          <p className=" flex gap-2">
            <PhoneCall className=" text-yellow-500"/>
            Phone: xxxxxxxxx
          </p>
          <p className=" flex gap-2">
            <Email className=" text-yellow-500"/>
            Email: admin@alertgroup.ca
          </p>
        </div>
      </div>
      <div className=" flex gap-4 cursor-pointer">
        <LinkedIn className=" hover:text-yellow-500" />
        <Twitter className=" hover:text-yellow-500" />
        <Instagram className=" hover:text-yellow-500" />
        <Facebook className=" hover:text-yellow-500" />
      </div>
    </footer>
  );
};

export default Footer;
