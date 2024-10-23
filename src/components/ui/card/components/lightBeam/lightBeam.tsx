"use client";
import { LightBeam } from "@stianlarsen/react-light-beam";

export const Beam = ({ className = "" }: { className: string }) => {
  return (
    <LightBeam
      className={className}
      colorLightmode="hsl(var(--purple))"
      colorDarkmode="hsl(var(--blue))"
      fullWidth={0.98}
      scrollElement={typeof window !== "undefined" ? window : undefined}
      maskLightByProgress={true}
    />
  );
};
