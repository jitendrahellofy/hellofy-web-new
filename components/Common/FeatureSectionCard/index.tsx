import React from "react";

interface FeatureSectionCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  reverse?: boolean;
  backgroundImage?: string;
  cardBgColorClass?: string;
  cardBorderColorClass?: string;
  textColorClass?: string;
}

const FeatureSectionCard: React.FC<FeatureSectionCardProps> = ({
  title,
  subtitle,
  description,
  icon,
  reverse = false,
  cardBgColorClass = "bg-azure_200",
  cardBorderColorClass = "border-darkturquoise",
  textColorClass = "text-darkturquoise",
}) => {
  const containerClasses = `w-full bg-cover flex flex-col lg:flex-row justify-between ${
    reverse ? "lg:flex-row-reverse" : ""
  }`;

  return (
    <div className={containerClasses}>
      {/* Left Image/Card Section */}
      <div
        className={`w-full h-[400px] sm:h-[500px] xl:h-[798px] ${cardBgColorClass} px-6 sm:px-12 xl:px-[140px] py-12 sm:py-16 xl:py-[155px] border-dashed ${cardBorderColorClass} ${
          reverse
            ? "lg:border-l-2 relative lg:-left-[1px] lg:border-t-0 border-t-2"
            : "lg:border-r-2 lg:border-t-0 border-t-2"
        }`}
      >
        <div
          className={`w-full border-2 h-full rounded-xl ${cardBorderColorClass}`}
        ></div>
      </div>

      {/* Right Text & Icon */}
      <div className="w-full flex lg:flex-row flex-col items-center justify-center px-6 sm:px-12 xl:px-[140px] py-12 sm:py-16 xl:py-[155px] relative overflow-hidden">
        <div
          className={`h-[120px] w-[120px] sm:h-[138px] sm:w-[138px] xl:h-[263px]  xl:w-[263px] mb-6 lg:mb-0 rounded-full lg:absolute static flex items-center justify-center ${cardBgColorClass} ${
            reverse
              ? "-top-8 left-4 sm:-left-8 xl:-left-16"
              : "-top-8 right-4 sm:-right-8 xl:-right-16"
          }`}
        >
          {icon}
        </div>
        <div
          className={`max-w-[575px] text-center lg:text-left ${
            reverse ? "xl:pt-0 lg:pt-12 pt-0" : ""
          }`}
        >
          <h5 className={`text-sm sm:text-base font-medium ${textColorClass}`}>
            {title}
          </h5>
          <h3 className="text-black_dark font-bold text-xl sm:text-2xl lg:text-[2rem] my-4">
            {subtitle}
          </h3>
          <p className="text-sm xl:text-base font-medium text-black_dark mb-6">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSectionCard;
