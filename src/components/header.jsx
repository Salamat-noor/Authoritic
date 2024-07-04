import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Typography, Box } from "@mui/material";
import Logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      className="px-2 sm:px-4 md:px-10"
    >
      <Box display="flex" alignItems="center">
        <Image
          src={Logo}
          alt="Logo"
          height={250}
          width={200}
          className="w-[125px] sm:w-[160px] md:w-[200px]"
        />
      </Box>

      <Link href={"/"}>
        <Typography
          variant="h6"
          color="inherit"
          className="font-[Kodchasan] text-[20px] font-semibold"
        >
          Home
        </Typography>
      </Link>
    </Box>
  );
};

export default Header;
