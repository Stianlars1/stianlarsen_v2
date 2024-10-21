"use client";
import { Meteors } from "@stianlarsen/meteors";

export const MeteorsBackground = () => {
  return (
    <Meteors
      amount={10}
      colorLightmode="hsl(var(--blue))"
      colorDarkmode="hsl(var(--purple))"
      speed={1}
      style={{ zIndex: -1, opacity: 0.5 }}
    />
  );
};
