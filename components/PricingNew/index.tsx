"use client";
import { useEffect, useState } from "react";
//import PricingBox from "../Pricing/PricingBox";
//import Image from "next/image";
import {
  //UnderlineVector,
  //PriceArrowVector,
  //CurrveVector01,
  PricingRateVector01,
  PricingRateVector02,
  StarterPlanVector,
} from "@/constant/icons";
//import planData from "./planData.json";
//import OfferList from "../Pricing/OfferList";
import Button from "../UI/Button";
import CostPerConversationModal from "../CostPerConversationModal";
import { useSearchParams } from "next/navigation";
import PricingCard from "./PricingCard";

const PricingNew = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const searchParams = useSearchParams();

  const startonPrice = 9;
  const basicPrice = 39;
  const growthPrice = 99;
  //const businessPrice = 199;

  const calculateYearlyPrice = (monthlyPrice) => {
    const yearlyPrice = monthlyPrice * 12;
    const discountedPrice = yearlyPrice * 0.8; // Applying 20% discount
    return discountedPrice.toFixed(2);
  };

  useEffect(() => {
    if (searchParams.get("viewconversationrates") === "open") {
      setModalOpen(true);
    }
  }, [searchParams]);
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <section id="pricing" className="relative">
      <div className="container pt-[150px] pb-[110px]">
      <div className="relative text-center">
          <h2 className="text-black_dark font-semibold text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-[56px] leading-snug">
            Hellofy Pricing Plans –{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Scalable & Transparent!</span>
              <span className="absolute bottom-1 left-0 w-full h-2 sm:h-[10px] bg-[#D9ECFF] rounded-full z-0"></span>
            </span>
          </h2>
        </div>
        <p className="text-dark xl:text-2xl text-center text-base w-full mx-auto mt-3">
          Only pay for active conversations—rates vary by country. Each session
          lasts 24 hours with unlimited messages.
        </p>
        <div className="w-full 2xl:max-w-[1322px] mt-11 mx-auto bg-ivory border-darkkhaki border rounded-lg py-7 px-8 relative lg:mb-0 mb-16">
          <div className="w-full flex lg:flex-row flex-col justify-between items-center">
            <div className="flex gap-3 items-center lg:flex-row flex-col">
              <h3 className="text-dark lg:text-[2rem] text-xl font-bold">
                🚀 Starter Plan
              </h3>
              <p className="text-darkkhaki lg:text-base text-sm font-semibold">
                Single User | Monthly Subscription
              </p>
            </div>
            <Button
              name="Get Started for $9"
              size="medium"
              onClick={handleOpenModal}
              varient="outline"
              className="!px-12 !border-black_dark !text-black_dark !bg-inherit lg:my-0 my-5"
            />
          </div>
          <p className="my-2 text-sm font-normal text-dark lg:text-left text-center">
            For Individuals & Small Teams Ready to Scale Communication
          </p>
          <p className="text-base text-dark lg:text-left text-center">
            Get <strong>1 user</strong> access,<strong>5,000</strong> monthly
            broadcasts, Team Inbox, optional Shopify automation, and priority
            email support—all in one powerful starter plan.
          </p>
          <StarterPlanVector className="absolute right-0" />
        </div>
        <div className="w-full relative md:my-12 lg:my-11 my-10">
          <div className="relative flex items-center justify-center border rounded-lg border-primary max-w-[332px] mx-auto p-2">
            <button
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly ? " text-white bg-primary" : "bg-white text-primary"
              } cursor-pointer text-base font-medium w-full py-2.5 rounded`}
            >
              Monthly
            </button>

            <button
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly ? "bg-white text-primary" : " text-white bg-primary"
              } cursor-pointer text-base font-medium w-full py-2.5 rounded`}
            >
              <span>Yearly</span>
            </button>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 lg:gap-[40px] gap-14 md:gap-8 xl:gap-[86px] pt-[38px] pb-11">
          <PricingCard
            title="Starter"
            usersIncluded="3 users included"
            price={
              isMonthly ? (
                <>${startonPrice}</>
              ) : (
                <>
                  {`$${calculateYearlyPrice(startonPrice)} `}
                  <span className="line-through hidden">
                    ${startonPrice * 12}
                  </span>
                </>
              )
            }
            features={[
              "Everything in Start on +",
              "No-code Chatbot",
              "Form builder",
              "Chatbot logs and sessions",
              "15k total broadcast p.m",
            ]}
            buttonLabel="Get Started"
            onButtonClick={handleOpenModal}
            borderColor="border-mediumseagreen_800"
            headerBgColor="bg-mediumseagreen_800"
            textColor="text-mediumseagreen_800"
            buttonBgColor="!bg-mediumseagreen_800"
          />

          <PricingCard
            title="Basic"
            usersIncluded="3 users included"
            price={
              isMonthly ? (
                <>${basicPrice}</>
              ) : (
                <>
                  {`$${calculateYearlyPrice(basicPrice)} `}
                  <span className="line-through hidden">
                    ${basicPrice * 12}
                  </span>
                </>
              )
            }
            features={[
              "Everything in Basic on +",
              "Chatbot connector",
              "API keys",
              "Role and user management",
              "Ticket management (Manual)",
              "Call support",
            ]}
            buttonLabel="Get Started"
            onButtonClick={handleOpenModal}
            borderColor="border-mediumpurple_800"
            headerBgColor="bg-mediumpurple_800"
            textColor="text-mediumpurple_800"
            buttonBgColor="!bg-mediumpurple_800"
          />
          <div className="sm:col-span-2 lg:col-span-1 flex justify-center lg:mt-0 sm:mt-8">
            <div className="w-full sm:max-w-md">
              <PricingCard
                title="Growth"
                usersIncluded="3 users included"
                price={
                  isMonthly ? (
                    <>${growthPrice}</>
                  ) : (
                    <>
                      {`$${calculateYearlyPrice(growthPrice)} `}
                      <span className="line-through hidden">
                        ${growthPrice * 12}
                      </span>
                    </>
                  )
                }
                features={[
                  "Everything in Growth +",
                  "Widget",
                  "Ticket management (Round robin)",
                  "Schedule broadcast",
                  "Enhanced AI features",
                  "Drip campaigns",
                  "WhatsApp support",
                ]}
                buttonLabel="Get Started"
                onButtonClick={handleOpenModal}
                borderColor="border-gold"
                headerBgColor="bg-gold"
                textColor="text-gold"
                buttonBgColor="!bg-gold"
              />
            </div>
          </div>
          {/* <div className="w-full border-2 border-mediumseagreen_800 rounded-lg px-8 min-h-[666px]">
            <div className="w-[calc(100%-60px)] mx-auto bg-mediumseagreen_800 rounded-lg py-2 relative -top-[38px]">
              <h3 className="text-2xl font-semibold text-white text-center">
                Basic
              </h3>
              <p className="text-base font-normal text-white text-center">
                3 users included
              </p>
            </div>
            <div className="w-full text-center">
              <h3 className="text-mediumseagreen_800 text-[2.5rem]">
                $39
                <span className="text-lightblue_400 text-[1.25rem] font-normal">
                  /month
                </span>
              </h3>
            </div>
            <Button
              name="Get Started"
              size="medium"
              onClick={handleOpenModal}
              varient="primary"
              className="!px-12 !border-black_dark !bg-mediumseagreen_800 !w-full my-11"
            />
            <ul className="text-center">
              <li className="text-dark text-base font-medium mb-5">
                Everything in Start on +
              </li>
              <li className="text-dark text-base font-medium mb-5">
                No-code Chatbot
              </li>
              <li className="text-dark text-base font-medium mb-5">
                Form builder
              </li>
              <li className="text-dark text-base font-medium mb-5">
                Chatbot logs and sessions
              </li>
              <li className="text-dark text-base font-medium">
                15k total broadcast p.m
              </li>
            </ul>
          </div>
          <div className="w-full border-2 border-mediumpurple_800 rounded-lg px-8 min-h-[666px]">
            <div className="w-[calc(100%-60px)] mx-auto bg-mediumpurple_800 rounded-lg py-2 relative -top-[38px]">
              <h3 className="text-2xl font-semibold text-white text-center">
                Basic
              </h3>
              <p className="text-base font-normal text-white text-center">
                3 users included
              </p>
            </div>
            <div className="w-full text-center">
              <h3 className="text-mediumpurple_800 text-[2.5rem]">
                $39
                <span className="text-lightblue_400 text-[1.25rem] font-normal">
                  /month
                </span>
              </h3>
            </div>
            <Button
              name="Get Started"
              size="medium"
              onClick={handleOpenModal}
              varient="primary"
              className="!px-12 !border-black_dark !bg-mediumpurple_800 !w-full my-11"
            />
            <ul className="text-center">
              <li className="text-dark text-base font-medium mb-5">
                Everything in Start on +
              </li>
              <li className="text-dark text-base font-medium mb-5">
                No-code Chatbot
              </li>
              <li className="text-dark text-base font-medium mb-5">
                Form builder
              </li>
              <li className="text-dark text-base font-medium mb-5">
                Chatbot logs and sessions
              </li>
              <li className="text-dark text-base font-medium">
                15k total broadcast p.m
              </li>
            </ul>
          </div>
          <div className="w-full border-2 border-gold rounded-lg px-8 min-h-[666px]">
            <div className="w-[calc(100%-60px)] mx-auto bg-gold rounded-lg py-2 relative -top-[38px]">
              <h3 className="text-2xl font-semibold text-white text-center">
                Basic
              </h3>
              <p className="text-base font-normal text-white text-center">
                3 users included
              </p>
            </div>
            <div className="w-full text-center">
              <h3 className="text-gold text-[2.5rem]">
                $39
                <span className="text-lightblue_400 text-[1.25rem] font-normal">
                  /month
                </span>
              </h3>
            </div>
            <Button
              name="Get Started"
              size="medium"
              onClick={handleOpenModal}
              varient="primary"
              className="!px-12 !border-black_dark !bg-gold !w-full my-11"
            />
            <ul className="text-center">
              <li className="text-dark text-base font-medium mb-5">
                Everything in Start on +
              </li>
              <li className="text-dark text-base font-medium mb-5">
                No-code Chatbot
              </li>
              <li className="text-dark text-base font-medium mb-5">
                Form builder
              </li>
              <li className="text-dark text-base font-medium mb-5">
                Chatbot logs and sessions
              </li>
              <li className="text-dark text-base font-medium">
                15k total broadcast p.m
              </li>
            </ul>
          </div> */}
        </div>
        <div className="w-full border-2 border-dark rounded-lg py-[15px]">
          <p className="md:text-[1.25rem] text-xs sm:text-sm font-medium text-center">
            Custom plan (for large enterprises)
            <a href="#" className="text-primary">
              - Contact sales
            </a>
          </p>
        </div>
        {/* <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
          <PricingBox
            packageName="Start on"
            price={
              isMonthly ? (
                <>${startonPrice}</>
              ) : (
                <>
                  {`$${calculateYearlyPrice(startonPrice)} `}
                  <span className="line-through hidden">
                    ${startonPrice * 12}
                  </span>
                </>
              )
            }
            duration={isMonthly ? "/mo" : "/mo"}
            subtitle="Users (Upto) - 1"
            subtitle1="Role Management Admin +1"
          >
            <OfferList text="Only broadcast" status="active" />
            <OfferList text="Team inbox" status="active" />
            <OfferList text="Shopify automation (+ $5)" status="active" />
            <OfferList text="5K broadcast per month" status="active" />
            <OfferList text="Campaign analytics" status="active" />
            <OfferList text="Email support" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Basic"
            price={
              isMonthly ? (
                <>${basicPrice}</>
              ) : (
                <>
                  {`$${calculateYearlyPrice(basicPrice)} `}
                  <span className="line-through hidden">
                    ${basicPrice * 12}
                  </span>
                </>
              )
            }
            duration={isMonthly ? "/mo" : "/mo"}
            subtitle="Users (Upto) - 3"
            subtitle1="Role Management Admin +4"
          >
            <OfferList text="Everything in Start on +" status="active" />
            <OfferList text="No-code Chatbot" status="active" />
            <OfferList text="Form builder" status="active" />
            <OfferList text="Chatbot logs and sessions" status="active" />
            <OfferList text="15k total broadcast p.m" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Growth"
            price={
              isMonthly ? (
                <>${growthPrice}</>
              ) : (
                <>
                  {`$${calculateYearlyPrice(growthPrice)} `}
                  <span className="line-through hidden">
                    ${growthPrice * 12}
                  </span>
                </>
              )
            }
            duration={isMonthly ? "/mo" : "/mo"}
            subtitle="Users (Upto) - 7"
            subtitle1="Role Management Admin +4"
          >
            <OfferList text="Everything in Basic +" status="active" />
            <OfferList text="Chatbot connector" status="active" />
            <OfferList text="API keys" status="active" />
            <OfferList text="Role and user management" status="active" />
            <OfferList text="Ticket management manual" status="active" />
            <OfferList text="Basic AI features" status="active" />
            <OfferList text="25k total broadcast p.m" status="active" />
            <OfferList text="Call support" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Business"
            price={
              isMonthly ? (
                <>${businessPrice}</>
              ) : (
                <>
                  {`$${calculateYearlyPrice(businessPrice)} `}
                  <span className="line-through hidden">
                    ${businessPrice * 12}
                  </span>
                </>
              )
            }
            duration={isMonthly ? "/mo" : "/mo"}
            subtitle="Users (Upto) - 15"
            subtitle1="Role Management Custom"
            //planType="custom"
          >
            <OfferList text="Everything in Growth +" status="active" />
            <OfferList text="Widget" status="active" />
            <OfferList
              text="Ticket management round robin and connect respective sales person"
              status="active"
            />
            <OfferList text="Schedule broadcast" status="active" />
            <OfferList text="Enhanced AI features" status="active" />
            <OfferList text="Unlimited broadcast" status="active" />
            <OfferList text="Drip campaigns" status="active" />
            <OfferList text="WhatsApp support" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Custom"
            //price={isMonthly ? "$199" : "$2388"}
            //duration={isMonthly ? "/mo" : "/mo"}
            subtitle="Users (Upto) - 15"
            subtitle1="Role Management Custom"
            planType="custom"
          >
            <OfferList
              text="Dedicated Relationship Manager - $89 (for queries, issue handling, users training)"
              status="active"
            />
            <OfferList
              text="Designing service - $119 (weekly 2 templates, 1 chatbot)"
              status="active"
            />
            <OfferList
              text="Marketing service - $179 (weekly 2 posts, 3 stories on all social media platforms)"
              status="active"
            />
          </PricingBox>
        </div> */}
      </div>
      <div className="w-full md:py-28 py-16 lg:py-[156px] bg-[url(/images/hellofy/pricing-rate-pattern-bg.svg)] border-t-2 border-primary ">
        <div className="container">
          <div className="w-full bg-aliceblue py-[90px] rounded-lg text-center relative">
            <PricingRateVector01 className="absolute left-0 top-0 md:opacity-100 opacity-20" />
            <div className="max-w-[820px] mx-auto md:px-0 px-4 relative z-10">
              <h3 className="lg:text-3xl text-2xl font-semibold text-dark max-w-fit">
                Conversation-Based Billing: No Per-Message Fees
              </h3>
              <p className="md:text-base text-sm font-normal text-dark my-5">
                Only pay for active conversations—rates vary by country. Each
                session lasts 24 hours with unlimited messages. The window
                starts when a user messages first and you respond, or
                immediately if your business initiates the chat
              </p>
              <Button
                name="View Conversation Rates"
                size="medium"
                onClick={handleOpenModal}
                varient="outline"
                className="!px-12"
              />

              <CostPerConversationModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
              />
            </div>
            <PricingRateVector02 className="absolute right-0 bottom-0 md:opacity-100 opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingNew;
