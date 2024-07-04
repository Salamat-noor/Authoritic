"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import faqAsset from "@/assets/jsonData/FAQAsset";
import Header from "@/components/header";
import Footer from "@/components/footer";

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);
  const [chooseIndex, setChooseIndex] = useState(null);

  const handleChange = () => {
    setExpanded(!expanded);
  };
  return (
    <main className="w-full min-h-screen flex flex-col justify-between">
      <Header />

      <div className="w-full h-full flex flex-col items-center justify-start gap-11">
        {faqAsset &&
          faqAsset.map((asset, index) => (
            <div className="max-w-2xl" key={index}>
              <Accordion
                expanded={index === chooseIndex && expanded}
                onChange={handleChange}
                onClick={() => setChooseIndex(index)}
                className={`shadow-md rounded-lg bg-white border-2 md:px-3 lg:px-5 ${
                  index === chooseIndex && expanded
                    ? "border-purple-600"
                    : "border-transparent"
                }`}
              >
                <AccordionSummary
                  expandIcon={
                    <div
                      className={`w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-[#4A3AFF] rounded-full`}
                    >
                      <svg
                        className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
                        viewBox="0 0 24 24"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                      </svg>
                    </div>
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className="py-3 px-4"
                >
                  <Typography variant="subtitle1">{asset.title}</Typography>
                </AccordionSummary>

                <AccordionDetails className="bg-white py-2 px-4 pb-3">
                  <Typography variant="body1">{asset.desc}</Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          ))}
      </div>
      <Footer />
    </main>
  );
};

export default FAQ;
