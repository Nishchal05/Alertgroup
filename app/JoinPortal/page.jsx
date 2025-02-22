import Link from "next/link";
import React from "react";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import ApplyHeroSection from "./ApplyHeroSection";
import Joblisting from "./Joblisting";

const Page = () => {
  return (
    <div>
      <ApplyHeroSection/>
      <Joblisting/>
    </div>
  );
};

export default Page;
