import React, { ReactNode } from "react";
import Button from "../UI/Button";

interface PricingCardProps {
  title: string;
  usersIncluded: string;
  price: string | ReactNode;
  period?: string;
  features: string[];
  buttonLabel: string;
  onButtonClick: () => void;

  // Custom styles
  borderColor: string;
  headerBgColor: string;
  textColor: string;
  buttonBgColor: string;
  className?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  usersIncluded,
  price,
  period = "/month",
  features,
  buttonLabel,
  onButtonClick,
  borderColor,
  headerBgColor,
  textColor,
  buttonBgColor,
  className = "",
}) => {
  return (
    <div
      className={`w-full border-2 rounded-lg px-8 min-h-[666px] ${borderColor} ${className}`}
    >
      <div
        className={`xl:w-[calc(100%-60px)] md:w-[calc(100%-30px)] mx-auto rounded-lg md:py-2 py-1 relative -top-[38px] ${headerBgColor}`}
      >
        <h3 className="md:text-2xl text-lg font-semibold text-white text-center">
          {title}
        </h3>
        <p className="md:text-base text-sm font-normal text-white text-center">
          {usersIncluded}
        </p>
      </div>
      <div className="w-full text-center">
        <h3 className={`lg:text-[2.5rem] text-3xl ${textColor}`}>
          {price}
          <span className="text-lightblue_400 lg:text-[1.25rem] text-base font-normal">
            {" "}
            {period}
          </span>
        </h3>
      </div>
      <Button
        name={buttonLabel}
        size="medium"
        onClick={onButtonClick}
        varient="primary"
        className={`!px-12 !border-black_dark !w-full my-11 ${buttonBgColor}`}
      />
      <ul className="text-center">
        {features.map((feature, idx) => (
          <li
            key={idx}
            className="text-dark text-sm md:text-base font-medium mb-5 last:mb-0"
          >
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
