"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "next/link";
import CustomButton from "./muiButton";

const loginForm = ({ title }) => {
  const formdata = (e) => {
    e.preventDefault();
  };

  return (
    <Box
      onSubmit={formdata}
      component="form"
      sx={{
        "& .MuiTextField-root": {
          m: 1,
        },
      }}
      noValidate
      autoComplete="off"
      className="w-full   sm:w-3/4   lg:w-[336px]   flex   flex-col   gap-2   md:max-w-[336px]   p-4   sm:p-0"
    >
      <h1
        className={`text-center   text-[20px]   text-[#080808]   font-light 
          Koho-light`}
      >
        {title}
      </h1>

      <div className="w-full flex">
        <TextField
          id="outlined-email"
          label="Email"
          defaultValue=""
          type="email"
          style={{ width: "100%" }}
          InputLabelProps={{
            shrink: true,
          }}
          sx={{
            borderRadius: "10px",
            "& .MuiInputLabel-root": {
              color: "#606060",
              fontWeight: "semi-bold",
              mx: "3px",
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              "& fieldset": {
                borderColor: "#606060",
                borderWidth: "2px",
                borderRadius: "10px",
              },
              "&:hover fieldset": {
                borderColor: "#606060",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#606060",
              },
            },
          }}
        />
      </div>

      <div className="w-full flex">
        <TextField
          id="outlined-password"
          label="password"
          defaultValue=""
          type="password"
          style={{ width: "100%" }}
          InputLabelProps={{
            shrink: true,
          }}
          sx={{
            borderRadius: "10px",
            "& .MuiInputLabel-root": {
              color: "#606060",
              fontWeight: "semi-bold",
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              "& fieldset": {
                borderColor: "#606060",
                borderWidth: "2px",
                borderRadius: "10px",
              },
              "&:hover fieldset": {
                borderColor: "#606060",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#606060",
              },
            },
          }}
        />
      </div>

      <div className=" flex items-center justify-between md:justify-center px-3 md:p-0">
        <Link href={"/admin_dashboard"}>
          <Button
            type="submit"
            variant="contained"
            className="bg-[#22477F] rounded-[7px] font-kodchasan float-end  py-0  md:text-[20px] text-[16px]  text-white"
          >
            Login
          </Button>
        </Link>

        <Link href={"/registration"} className="block md:hidden">
          <Button
            type="submit"
            variant="contained"
            className="bg-[#22477F] rounded-[7px] font-kodchasan float-end  py-0  md:text-[20px] text-[16px]  text-white"
            sx={{
              textTransform: "none",
            }}
          >
            Register
          </Button>
        </Link>
      </div>

      <div className="flex items-center justify-end my-3">
        <Link
          href={"/"}
          className={`text-black font-bold text-[15px] Kodchasan-bold`}
        >
          Recover Lost Account
        </Link>
      </div>
    </Box>
  );
};
export default loginForm;
