import {
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  PhoneAndroid,
  Twitter,
} from "@mui/icons-material";
import { Phone, PhoneCall } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex justify-evenly w-full mt-24 items-center border-t-[1px] h-[50vh]">
      <div className=" flex flex-col gap-4 items-center">
        <div className=" flex items-center cursor-pointer">
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
        <Link href='https://www.linkedin.com/in/alertgroupsecurity?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'><LinkedIn className=" hover:text-yellow-500" /></Link>
        <Twitter className=" hover:text-yellow-500" />
        <Link href='https://www.instagram.com/alertgroup_security?igsh=MW45YnlxbnM5NmRqMw%3D%3D&utm_source=qr'><Instagram className=" hover:text-yellow-500" /></Link>
        <Facebook className=" hover:text-yellow-500" />
      </div>
    </footer>
  );
};

export default Footer;
