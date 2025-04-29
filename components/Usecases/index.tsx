import {
  ChatVector,
  DimondVector02,
  DimondVector03,
  LineVector,
  MoreIcon,
} from "@/constant/icons";
import Image from "next/image";
import UseCaseSection from "../Common/UseCaseSection";

function Usecases() {
  return (
    <div className="w-full lg:py-32 md:py-20 py-16 rounded-t-3xl relative top-0 sm:-top-[70px] z-20 bg-white">
      <div className="container">
        <div className="max-w-[1344px] mx-auto">
          <h2 className="xl:text-[3.5rem] lg:text-4xl md:text-3xl text-2xl text-black_dark font-bold text-center">
            USE CASES
          </h2>
          <p className="text-grey_dark lg:text-[2rem] md:text-xl text-base  font-normal text-center mt-7 mb-11">
            Boost conversions and re-engage customers with time-sensitive
            promotions, special offers, and events that inspire immediate action
          </p>
        </div>
        <div className="w-full flex flex-col lg:gap-[60px] gap-8">
          <ChatVector className="absolute left-0 w-[10vw] top-[10rem]" />
          <UseCaseSection
            imageSrc="/images/hellofy/Usecase01.svg"
            altText="Usecase01"
            category="TRAVEL"
            SmallTitleClass="text-cornflowerblue_900"
            heading="Turn wanderlust into bookings with real-time assistance"
            description="Travelers crave instant answers—whether it’s about destinations, pricing, or availability. Use chatbots to handle inquiries, suggest trips, check bookings, and upsell add-ons like insurance or tours. Let automation handle the rush while you focus on delivering unforgettable experiences. ✈️ Always-on chat support keeps travelers engaged—and ready to book."
            reverse={false}
            CaptionVector={
              <LineVector className="absolute bottom-0 hidden xl:-right-10 2xl:-right-12 w-[5vw]" />
            }
          />
          <UseCaseSection
            imageSrc="/images/hellofy/Usecase02.svg"
            altText="Usecase02"
            category="Fashion"
            SmallTitleClass="text-mediumseagreen"
            heading="Create FOMO and drive sales with timely campaigns"
            description="Fashion moves fast, and so should your marketing. Use CRM-powered broadcasts to promote new drops, flash sales, and restocks. Segment your audience by interest or behavior to send the right style to the right person—at the right moment. 👗 Make every message feel like it was tailor-made"
            reverse={true}
            CaptionVector={
              <DimondVector02 className="absolute bottom-0 2xl:-left-10 xl:-left-10 hidden" />
            }
          />
          <UseCaseSection
            imageSrc="/images/hellofy/Usecase03.svg"
            altText="Usecase03"
            category="Education"
            SmallTitleClass="text-slateblue"
            heading="Gather feedback and improve student experiences"
            description="Understanding student needs is essential for growth. Use custom forms to collect feedback on courses, instructors, events, and campus services. Automatically sync responses to your CRM for analysis and follow-up. 📋 Insightful feedback helps you adapt, improve, and create a more engaging learning environment"
            reverse={false}
            CaptionVector={
              <DimondVector03 className="absolute bottom-0 2xl:-right-8 xl:-right-8 hidden w-[60px]" />
            }
          />
          <UseCaseSection
            imageSrc="/images/hellofy/Usecase04.png"
            altText="Usecase04"
            category="Logistics & Delivery"
            SmallTitleClass="text-goldenrod"
            heading="Resolve delivery issues faster and keep customers informed"
            description="From delayed shipments to address changes, customer service in logistics moves fast. Ticket management helps your team track every issue, assign it to the right agent, and keep customers updated in real-time. 🚚 Fast resolutions lead to better reviews—and repeat business"
            reverse={true}
            CaptionVector={
              <DimondVector02 className="absolute bottom-0 2xl:-left-10 xl:-left-10 hidden" />
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Usecases;
