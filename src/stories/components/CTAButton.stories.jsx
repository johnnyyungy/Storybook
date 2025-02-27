import React from "react";
import CTAButton from "./CTAButton";

export default {
  title: "Components/CTA Button",
  component: CTAButton,
};

export const Primary = () => (
  <CTAButton text="Get Started" onClick={() => alert("CTA Clicked!")} />
);
