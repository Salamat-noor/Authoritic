// components/Footer.js
import React from "react";
import Link from "next/link";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      className="w-full flex justify-center items-center h-24 bg-[#22477F]"
      component="footer"
    >
      <Box className="flex justify-between space-x-8 text-white w-[548px]">
        <Link href="/about">
          <Typography
            variant="body1"
            className="hover:underline font-kodchasan"
          >
            About
          </Typography>
        </Link>
        <Link href="/terms">
          <Typography
            variant="body1"
            className="hover:underline font-kodchasan"
          >
            Terms
          </Typography>
        </Link>
        <Link href="/contactUs">
          <Typography
            variant="body1"
            className="hover:underline font-kodchasan"
          >
            Contact
          </Typography>
        </Link>
        <Link href="/FAQ">
          <Typography
            variant="body1"
            className="hover:underline font-kodchasan"
          >
            Help
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
