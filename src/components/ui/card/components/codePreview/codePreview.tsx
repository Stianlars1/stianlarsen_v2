"use client";

import { CodePreview } from "@stianlarsen/react-code-preview";

export const CodePreviewer = ({ className = "" }: { className?: string }) => {
  return <CodePreview code="This is some code" />;
};
