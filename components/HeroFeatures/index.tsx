import React from "react";
import Image from "next/image";
import HeroCard from "../Common/HeroCard";
import { HeroCardIcon, ContactFeatureVector01 } from "@/constant/icons";
import GateStartedInput from "../Common/GateStartedInput";
import FeatureTitleTag from "../FeatureTitleTag";

const HeroFeatures = () => {
  const data = [
    {
      id: 1,
      icon: HeroCardIcon,
      title: "Seamless Organization",
      description: "Effortlessly manage and categorize customer data.",
      borderColor: "border-yellow_600",
      iconColor: "fill-yellow_700",
    },
    {
      id: 2,
      icon: HeroCardIcon,
      title: "Centralized View",
      description:
        "Access complete contact history for personalized interactions.",
      borderColor: "border-aero_blue",
      iconColor: "fill-aero_blue",
    },
    {
      id: 3,
      icon: HeroCardIcon,
      title: "Streamlined Workflow",
      description:
        "Easily update, filter, and assign contacts for better management.",
      borderColor: "border-pale_cyan",
      iconColor: "fill-pale_cyan",
    },
  ];
  return (
    <>
      <div className="w-full h-screen pt-[95px]">
        <div className="container h-full">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-full max-w-[1260px]">
              <h2 className="xl:text-[56px] md:text-3xl text-2xl font-bold xl:leading-[68px]  text-center">
                💬 Conversations to 💰 Conversions Everything Your Team Needs in
                One CRM 🧰
              </h2>
              <p className="mt-5 xl:text-2xl md:text-base text-sm text-dark text-center font-normal tracking-wide">
                Manage chats, campaigns, forms, tickets, and more—all in one
                place. Hellofy helps your team engage leads, automate workflows,
                and deliver seamless support across every channel. No more
                juggling tools. Just faster responses, smarter sales, and
                happier customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroFeatures;
