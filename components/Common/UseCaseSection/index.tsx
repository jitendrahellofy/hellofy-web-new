import Image from "next/image";
import { FC, ReactNode } from "react";
import { MoreIcon } from "@/constant/icons";

interface UseCaseSectionProps {
  imageSrc: string;
  altText: string;
  category: string;
  heading: string;
  description: string;
  reverse?: boolean; // Controls zigzag layout
  onClick?: () => void;
  SmallTitleClass?: string;
  CaptionVector?: ReactNode;
}

const UseCaseSection: FC<UseCaseSectionProps> = ({
  imageSrc,
  altText,
  category,
  heading,
  description,
  reverse = false,
  onClick,
  SmallTitleClass,
  CaptionVector,
}) => {
  return (
    <div
      className={`w-full bg-white z-[2] flex flex-col lg:flex-row py-0 md:py-[33px] border-t-2 border-l-2 border-r-4 border-b-4 border-black_dark rounded-xl ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Image Section */}
      <div
        className={`w-full lg:w-1/2 flex items-center justify-center py-16 px-6 lg:py-28 ${
          reverse ? "lg:border-l-2" : "lg:border-r-2"
        } border-black_dark`}
      >
        <Image src={imageSrc} alt={altText} height={388} width={505} />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center md:py-16 py-8 lg:py-28 px-6 lg:px-20 relative">
        <div className="w-full">
          <h5 className={`text-base font-medium ${SmallTitleClass}`}>
            {category}
          </h5>
          <h3 className="text-black_dark font-medium md:text-3xl text-2xl lg:text-[2.5rem] my-4">
            {heading}
          </h3>
          <p className="lg:text-base text-sm font-medium text-black_dark mb-6">
            {description}
          </p>
          <button
            className="border-2 border-black_dark rounded-lg px-6 py-3.5 text-sm lg:text-base font-medium flex items-center gap-2"
            onClick={onClick}
          >
            Learn more <MoreIcon />
          </button>
        </div>
        {CaptionVector}
      </div>
    </div>
  );
};

export default UseCaseSection;
