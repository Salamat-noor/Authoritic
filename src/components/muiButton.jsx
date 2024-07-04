"use client";
import React from "react";
import { Button } from "@mui/material";
import Link from "next/link";

export default function CustomButton({ title, colored, from }) {
  return (
    <Link
      href={
        title === "Register"
          ? "registration-with-code"
          : title === "Home"
          ? "/"
          : ""
      }
    >
      <Button
        type={`${title === "Login" ? "submit" : null}`}
        variant="contained"
        className={`cursor-pointer  Kodchasan-font ${
          colored
            ? " bg-inherit text-black shadow-none  font-black  Kodchasan-bold "
            : from === "homePageAfterLogin"
            ? "w-[189px] h-[26px] flex justify-start"
            : "text-[16px]  rounded-[7px] text-white  py-0 "
        }`}
        sx={{
          backgroundColor: "bg-[#22477F]",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "none",
          },
        }}
      >
        {title}
      </Button>
    </Link>
  );
}
