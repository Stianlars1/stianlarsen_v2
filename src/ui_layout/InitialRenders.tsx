"use client";

import { useUpdateThemeColor } from "@/utils/updateThemeColor";
import { GoogleAnalyticsProvider } from "@/lib/analytics/GoogleAnalyticsProvider";

export const InitialRenders = () => {
  useUpdateThemeColor();
  return (
    <>
      <GoogleAnalyticsProvider />
    </>
  );
};
