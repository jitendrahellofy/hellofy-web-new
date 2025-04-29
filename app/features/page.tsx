import AboutSectionOne from "@/components/About/AboutSectionOne";
import FeatureSectionCard from "@/components/Common/FeatureSectionCard";
import HeroFeatures from "@/components/HeroFeatures";
import { FeaturesCardVector } from "@/constant/icons";

const FeaturesPage = () => {
  return (
    <div className="w-full bg-[url(/images/hellofy/FeatureHerobg.svg)]">
      <HeroFeatures />
      <div className="w-full border-dashed border-t-2 border-darkturquoise">
        <div className="max-w-[1920px] mx-auto">
          <FeatureSectionCard
            title="CHATBOT"
            subtitle="Turn wanderlust into bookings with real-time assistance"
            description="Travelers crave instant answers—whether it’s about destinations,
                pricing, or availability. Use chatbots to handle inquiries,
                suggest trips, check bookings, and upsell add-ons like insurance
                or tours. Let automation handle the rush while you focus on
                delivering unforgettable experiences. ✈️ Always-on chat support
                keeps travelers engaged—and ready to book"
            icon={
              <FeaturesCardVector className=" w-[60px] xl:w-[133px] fill-darkturquoise" />
            }
          />
          <FeatureSectionCard
            title="QUICK FORMS"
            subtitle="Turn wanderlust into bookings with real-time assistance"
            description="Travelers crave instant answers—whether it’s about destinations,
                pricing, or availability. Use chatbots to handle inquiries,
                suggest trips, check bookings, and upsell add-ons like insurance
                or tours. Let automation handle the rush while you focus on
                delivering unforgettable experiences. ✈️ Always-on chat support
                keeps travelers engaged—and ready to book"
            icon={
              <FeaturesCardVector className=" w-[60px] xl:w-[133px] fill-olivedrab" />
            }
            cardBgColorClass="bg-ivory"
            cardBorderColorClass="border-olivedrab"
            textColorClass="text-olivedrab"
            reverse
          />
          <FeatureSectionCard
            title="CAMPAIGNS"
            subtitle="Turn wanderlust into bookings with real-time assistance"
            description="Travelers crave instant answers—whether it’s about destinations,
                pricing, or availability. Use chatbots to handle inquiries,
                suggest trips, check bookings, and upsell add-ons like insurance
                or tours. Let automation handle the rush while you focus on
                delivering unforgettable experiences. ✈️ Always-on chat support
                keeps travelers engaged—and ready to book"
            icon={
              <FeaturesCardVector className=" w-[60px] xl:w-[133px] fill-mediumpurple" />
            }
            cardBgColorClass="bg-ghostwhite"
            cardBorderColorClass="border-mediumpurple"
            textColorClass="text-mediumpurple"
          />
          <FeatureSectionCard
            title="SHARED INBOX"
            subtitle="Turn wanderlust into bookings with real-time assistance"
            description="Travelers crave instant answers—whether it’s about destinations,
                pricing, or availability. Use chatbots to handle inquiries,
                suggest trips, check bookings, and upsell add-ons like insurance
                or tours. Let automation handle the rush while you focus on
                delivering unforgettable experiences. ✈️ Always-on chat support
                keeps travelers engaged—and ready to book"
            icon={
              <FeaturesCardVector className=" w-[60px] xl:w-[133px] fill-peru" />
            }
            cardBgColorClass="bg-whitesmoke_200"
            cardBorderColorClass="border-peru"
            textColorClass="text-peru"
            reverse
          />
        </div>
        {/* <div className="w-full bg-[url(/images/hellofy/FeatureHerobg.svg)] bg-cover flex justify-between ">
          <div className="w-full h-[798px] bg-azure_200 px-[140px] py-[155px] border-r-2 border-dashed border-darkturquoise">
            <div className="w-full border-2 border-darkturquoise h-full rounded-xl"></div>
          </div>
          <div className="w-full flex items-center justify-center px-[140px] py-[155px] relative overflow-hidden">
            <div className="bg-azure_200 h-[263px] w-[263px] rounded-full absolute -top-8 -right-16 flex items-center justify-center">
              <FeaturesCardVector className="fill-darkturquoise" />
            </div>
            <div className="max-w-[575px]">
              <h5 className={`text-base font-medium text-darkturquoise`}>
                CHATBOT
              </h5>
              <h3 className="text-black_dark font-bold md:text-3xl text-2xl lg:text-[2rem] my-4">
                Turn wanderlust into bookings with real-time assistance
              </h3>
              <p className="lg:text-base text-sm font-medium text-black_dark mb-6">
                Travelers crave instant answers—whether it’s about destinations,
                pricing, or availability. Use chatbots to handle inquiries,
                suggest trips, check bookings, and upsell add-ons like insurance
                or tours. Let automation handle the rush while you focus on
                delivering unforgettable experiences. ✈️ Always-on chat support
                keeps travelers engaged—and ready to book
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default FeaturesPage;
