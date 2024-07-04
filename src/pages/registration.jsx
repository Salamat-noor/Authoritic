// components/Registration.js
import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";

const Registration = () => {
  const [validcode, setValidcode] = useState("");
  const [validcodeError, setValidcodeError] = useState("");

  const handleValidation = () => {
    let isValid = true;

    if (!validcode) {
      setValidcodeError("Email is required");
      isValid = false;
    } else {
      setValidcodeError("");
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      console.log("Form is valid");
      // Perform registration logic here
    }
  };

  return (
    <div className="w-full h-screen flex flex-col justify-between">
      <Header />
      <Box className="flex flex-col  justify-center h-full">
        <Box className="flex flex-col items-center">
          <form className="w-full max-w-xs" onSubmit={handleSubmit}>
            <TextField
              label="Validation code"
              variant="outlined"
              fullWidth
              value={validcode}
              onChange={(e) => setValidcode(e.target.value)}
              error={!!validcodeError}
              helperText={validcodeError}
              sx={{
                "& .MuiOutlinedInput-root": {
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
              className="mb-8 "
            />
          </form>
          <Link href="registration_with_code">
            <Button
              type="submit"
              variant="contained"
              className="mb-4 bg-[#22477F] rounded-[7px] font-kodchasan font-[700]"
            >
              Continue &gt;&gt;
            </Button>
          </Link>

          <div className="w-[50%] h-[1px] bg-black"></div>
          <Link href="registration_with_code">
            <Button
              variant="contained"
              className="w-100px mt-16 bg-[#22477F] rounded-[7px] font-kodchasan font-[700]"
            >
              i dont have a validation code
            </Button>
          </Link>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default Registration;
