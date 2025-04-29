"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import InputField2 from "../UI/InputField2";
import { HeroVector2 } from "@/constant/icons";
const Hero = () => {
  const [activeOption, setActiveOption] = useState<"B2B" | "B2C">("B2C");

  const handleToggle = (option: "B2B" | "B2C") => {
    setActiveOption(option);
  };
  return (
    <>
      <section
        id="home"
        // style={{
        //   backgroundImage: "url(/images/hero/hero_bg.png)",
        //   backgroundSize: "100% 100%",
        // }}
        className="dark:bg-gray-dark relative z-10 overflow-hidden pt-[76px]  md:pt-[92px] h-full  xl:pt-[92px] 2xl:pt-[92px]  bg-no-repeat max-[900px]:bg-cover"
      >
        <div className="relative w-full bg-[url(/images/hellofy/HeroBg.svg)] bg-no-repeat bg-cover 2xl:h-[1217px] lg:h-[1024px] h-[1100px]">
          <div className="w-full container pt-28">
            <h2
              className="text-center xl:text-[56px] text-3xl font-bold xl:leading-[70px] tracking-tight
"
            >
              Hellofy <br />
              Where{" "}
              <span className="text-transparent bg-clip-text bg-gradient-efficiency relative">
                Efficiency{" "}
                <HeroVector2 className="absolute -right-[70px] top-8 w-14 xl:block hidden" />
              </span>{" "}
              <br />
              Meets Customer{" "}
              <span className="text-transparent bg-clip-text bg-gradient-engagement">
                Engagement{" "}
              </span>
            </h2>{" "}
            <p className="max-w-[1106px] mx-auto text-center text-dark 2xl:text-2xl lg:text-lg font-normal mt-3.5">
              Manage customer interactions effortlessly with Hellofy’s powerful
              WhatsApp CRM. Automate workflows, streamline conversations, and
              boost engagement—all in one platform.
            </p>
          </div>
          {/* <div className="w-[682px] h-[682px] bg-white rounded-full mx-auto absolute -bottom-[145px] inset-x-0"> */}
          <div className="w-full bg-[url(/images/hellofy/HeroCircelVector.svg)] px-6 sm:px-0 absolute bottom-0 bg-size-[100% 100%] bg-center bg-no-repeat h-[568px]">
            <h4 className="text-center max-w-[386px] mx-auto text-[20px] font-medium text-black mt-[68px]">
              🔥 Experience the Power of Hellofy Enjoy Your 7-Day Free Trial
              Today! 🎯
            </h4>
            <div className="max-w-[432px] mx-auto flex flex-col gap-4 mt-8">
              <InputField2
                id="fullName"
                label="Full Name"
                type="text"
                placeholder="John"
              />
              <InputField2
                id="Email"
                label="Email"
                type="email"
                placeholder="example@xyz.com"
              />
              <InputField2
                id="BusinessName"
                label="Business name"
                type="text"
                placeholder="Business name"
              />
              <InputField2
                id="PhoneNumber"
                label="Phone number"
                type="text"
                placeholder="Phone number"
              />
              <button className="h-[52px] bg-primary rounded-lg border border-b-4 border-black_dark text-white text-base font-semibold">
                Get Started
              </button>

              {/* <div className="relative mb-3">
                <input
                  type="email"
                  className="peer m-0 block h-[52px] w-full rounded-lg border border-b-4 border-solid border-black_dark bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-400 dark:text-white dark:autofill:shadow-autofill dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                  id="floatingInput"
                  placeholder="Jonh "
                />
                <label
                  htmlFor="floatingInput"
                  className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-3 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                >
                  Full Name
                </label>
              </div> */}
            </div>
          </div>
          {/* Or set aspect ratio here */}
        </div>
        {/* <Image
          src="images/hellofy/HeroIndex.svg"
          //layout="fill"
          alt="HeroIndex"
          height={1024}
          width={3075}
          objectFit="cover"
        /> */}
        <div className="w-full px-7 hidden">
          <div className="flex items-center w-fit p-1.5 border border-french_gray rounded-xl shadow-dim_grey_shadow mx-auto mb-2.5 text-sm leading-6 text-dark bg-white font-semibold ">
            <div
              onClick={() => handleToggle("B2B")}
              className={`cursor-pointer py-1 px-3.5 rounded-lg ${
                activeOption === "B2B"
                  ? "bg-primary text-white"
                  : "bg-white text-primary"
              }`}
            >
              B2B
            </div>
            <div
              onClick={() => handleToggle("B2C")}
              className={`cursor-pointer py-1 px-3.5 rounded-lg ${
                activeOption === "B2C"
                  ? "bg-primary text-white"
                  : "bg-white text-primary"
              }`}
            >
              B2C
            </div>
          </div>
          <div className="flex flex-wrap hidden">
            <div className="flex items-start justify-between w-full">
              <Image
                src={` ${
                  activeOption === "B2C"
                    ? "/images/hero/hero_left.svg"
                    : "/images/hero/hero_right.svg"
                }`}
                alt="hero_left"
                width={512}
                height={509}
                className="hidden md:block h-full max-h-[250px] lg:max-h-[300px] 3xl:max-h-[509px] w-full max-w-[512px]"
              />
              <Image
                src="/images/hero/home_hero_main.gif"
                alt="gif"
                width={486}
                height={606}
                className="w-auto h-full max-h-[250px] mx-auto lg:max-h-[330px] 3xl:max-h-[606px]"
              />
              {/* <div
                className="relative h-[300px] lg:h-[400px] 3xl:h-[648px] lg:max-w-[654px] mx-auto bg-no-repeat bg-cover bg-center w-full "
                style={{
                  backgroundImage: "url(/images/hero/gif_bg.png)",
                  backgroundSize: "100%",
                }}
              >
                <Image
                  src="/images/hero/gif.gif"
                  alt="gif"
                  width={486}
                  height={606}
                  className="w-auto h-full max-h-[250px] mx-auto lg:max-h-[330px] 3xl:max-h-[606px] mt-5"
                />
              </div> */}
              <Image
                src={` ${
                  activeOption === "B2C"
                    ? "/images/hero/hero_right.svg"
                    : "/images/hero/hero_left.svg"
                }`}
                alt="hero_right"
                width={512}
                height={509}
                className="hidden md:block h-full max-h-[250px] lg:max-h-[300px] 3xl:max-h-[509px] w-full max-w-[512px] relative -right-6"
              />
            </div>
            <div className="w-full px-4 mt-12">
              {/* <div className="relative border max-w-fit lg:max-w-[140px] rounded-lg p-2 md:py-3 md:px-4 mx-auto -mt-3 bg-white">
                <Image
                  src="/images/logo/meta_tech_provider_logo.svg"
                  alt="logo"
                  width={108}
                  height={42}
                  className="w-20 md:w-24 lg:w-[108px]"
                />
              </div> */}
              <div
                className="wow fadeInUp mx-auto max-w-[1026px] text-center pt-3 lg:pt-0"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-2xl font-bold leading-tight font-lexend text-dark dark:text-white sm:text-4xl sm:leading-tight xl:text-6xl 3xl:text-[78px] 3xl:leading-tight">
                  <div className="relative bg-primary text-white inline-block border border-dark px-4 md:px-8 mr-3 ">
                    Boost
                    {/* <div className="absolute w-1.5 h-1.5 md:w-2.5 md:h-2.5 bg-dark -top-1  md:-top-1.5 -left-1 md:-left-1.5 top-left"></div>
                    <div className="absolute w-1.5 h-1.5 md:w-2.5 md:h-2.5 bg-dark -top-1 md:-top-1.5 -right-1 md:-right-1.5 top-right"></div>
                    <div className="absolute w-1.5 h-1.5 md:w-2.5 md:h-2.5 bg-dark -bottom-1 md:-bottom-1.5 -left-1 md:-left-1.5 bottom-left"></div>
                    <div className="absolute w-1.5 h-1.5 md:w-2.5 md:h-2.5 bg-dark -bottom-1 md:-bottom-1.5 -right-1 md:-right-1.5 bottom-right"></div> */}
                  </div>
                  your business <br />
                  <span className="flex items-end justify-center">
                    growth with{" "}
                    <span className="text-primary ml-1.5">WhatsApp</span>
                    <Image
                      src="/images/hero/plan_icon.svg"
                      alt="plan_icon"
                      width={70}
                      height={70}
                      className="w-8 h-8 lg:w-[70px] lg:h-[70px]"
                    />
                  </span>
                </h1>
                <p className="dark:text-body-color-dark text-sm md:!leading-7 text-battleship_gray sm:text-lg lg:text-2xl mb-6">
                  Enhance your sales, marketing, and service teams with
                  AI-powered personalized interactions via Email, SMS, and
                  WhatsApp. Seamlessly manage the entire customer journey with
                  Hellofy.
                </p>
                {/* <Link
                  href="https://staging.hellofy.io/"
                  className="ease-in-up hover:shadow-btn-hover rounded-lg w-fit mx-auto bg-primary px-4 py-2.5 text-sm md:text-base font-medium text-white transition duration-300 hover:bg-opacity-90 md:block max-h-11"
                >
                  Book Demo
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
