"use client";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
const options = {
  cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
};

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.mjs",
//   import.meta.url
// ).toString();
export const PreviewPDF = () => {
  const [, setNumPages] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [pageNumber, setPageNumber] = useState(1); // In case your PDF has multiple pages

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setLoading(false);
    setNumPages(numPages);
    setPageNumber(1);
  }
  return (
    <div className="resume__fileWrapper">
      {loading && <LoadingResume />}

      <Document
        file="/resume.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        onLoad={() => setLoading(false)}
        loading={<></>}
        className={"resume__fileWrapper__file"}
        options={options}
      >
        <Page width={400} pageNumber={pageNumber} />
      </Document>
    </div>
  );
};

const LoadingResume = () => {
  return (
    <div className="loading-resume">
      <FaSpinner size={24} />
      Loading Resume
    </div>
  );
};
