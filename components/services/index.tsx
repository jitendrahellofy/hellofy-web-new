import { CartIcon } from "@/constant/icons";
//import ServiceCard from "../Common/ServiceCard";
import ServiceCardNew from "../Common/ServiceCardNew";
//import ServiceData from "./serviceData";
import { serviceDataNew } from "./ServiceDataNew";

const Services = () => {
  return (
    <section
      id="services"
      className="bg-white border-t border-black_dark px-4 lg:px-20 2xl:px-[150px] py-[80px] xl:py-[132px]"
    >
      <h2 className="text-xl text-center lg:text-2xl xl:text-[56px] xl:leading-[65px] text-black_dark mb-11">
        Industries we serve
      </h2>
      <div className="w-full 2xl:hidden block container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-5 gap-y-12 place-items-center  mx-auto">
          {serviceDataNew.map((item, idx) => (
            <ServiceCardNew
              key={idx}
              title={item.title}
              className={`${item.bg} ${item.border}`}
              iconWrapperClass={item.border}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
      <div className="w-full 2xl:block hidden">
        {/* Row 1 - 5 items */}
        {/* <div className="w-full flex justify-center"> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-5 gap-y-12 place-items-center max-w-[1350px] mx-auto">
          {serviceDataNew.slice(0, 5).map((item, idx) => (
            <ServiceCardNew
              key={idx}
              title={item.title}
              className={`${item.bg} ${item.border}`}
              iconWrapperClass={item.border}
              icon={item.icon}
            />
          ))}
        </div>
        {/* </div> */}

        {/* Row 6 - 11 items */}
        <div className="grid 2xl:grid-cols-6 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-12 py-16 place-items-center max-w-[1632px] mx-auto">
          {serviceDataNew.slice(5, 11).map((item, idx) => (
            <ServiceCardNew
              key={idx}
              title={item.title}
              className={`${item.bg} ${item.border}`}
              iconWrapperClass={item.border}
              icon={item.icon}
            />
          ))}
        </div>

        {/* Row 11 - 16 items */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-5 gap-y-12 pb-7 place-items-center max-w-[1350px] mx-auto">
          {serviceDataNew.slice(11, 16).map((item, idx) => (
            <ServiceCardNew
              key={idx}
              title={item.title}
              className={`${item.bg} ${item.border}`}
              iconWrapperClass={item.border}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-8 gap-x-5 gap-y-12 mt-[54px] hidden">
        <ServiceCardNew
          icon={<CartIcon />}
          title={`Retail & \nE- commerce`}
          className="bg-thistle border-rosybrown"
          iconWrapperClass="border-rosybrown"
        />
        {/* <div className="border-[#B39AAC] bg-[#FDDAF3] border rounded w-[252px] h-[96px] p-3.5 relative flex justify-center">
          <p className="text-base font-normal text-center text-black_dark">
            Retail & <br /> E- commerce
          </p>
          <div className="bg-white border-[#B39AAC] border rounded-full h-[56px] w-[56px] absolute -bottom-1/2 -translate-y-1/3 flex items-center justify-center">
            <CartIcon />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Services;
