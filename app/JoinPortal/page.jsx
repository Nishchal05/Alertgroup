import Link from "next/link";
import React from "react";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import ApplyHeroSection from "./ApplyHeroSection";
import Joblisting from "./Joblisting";

export const metadata = {
  title: "Careers & Jobs | Join AlertGroup",
  description: "Looking for a career in security? Join AlertGroup's team of professionals. View our open positions and apply today.",
  alternates: {
    canonical: "/JoinPortal",
  },
  openGraph: {
    title: "Careers & Jobs | Join AlertGroup",
    description: "Looking for a career in security? Join AlertGroup's team of professionals.",
    url: "/JoinPortal",
  },
};

const Page = () => {
  return (
    <div>
      <ApplyHeroSection/>
      <Joblisting/>
    </div>
  );
};

export default Page;
