import { Metadata } from "next";
import { PreviewPDF } from "./components/previewPDF";
import "./css/resume.css";

export const metadata: Metadata = {
  title: "CV | resume",
  description: "Take a look at my CV / resume",
};
export default async function ResumePage() {
  return (
    <div className="resume">
      <h1 className="resume__title">Resume</h1>
      <div className="resume__links">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          Open in New Tab
        </a>
        <a href="/resume.pdf" download="My_Resume.pdf">
          Download
        </a>
      </div>
      <PreviewPDF />
    </div>
  );
}
