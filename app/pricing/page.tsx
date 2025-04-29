import Pricing from "@/components/Pricing";
import PricingNew from "@/components/PricingNew";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Hellofy",
  description: "This is Pricing Page for Hellofy",
};

const PricingPage = () => {
  return (
    <>
      <PricingNew />
    </>
  );
};

export default PricingPage;
