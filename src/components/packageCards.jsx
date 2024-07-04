"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CheckIcon from "@mui/icons-material/Check";

export default function PackageCard({ data }) {
  return (
    <div
      className={`w-[80%] sm:w-[100%] justify-self-center md:justify-self-auto md:max-w-[329px] relative lg:w-[329px]`}
    >
      <Box
        sx={{
          border: "3px solid #2E2E3A",
          borderRadius: "20px",
          overflow: "hidden",
        }}
        className={`w-full`}
      >
        <Card
          variant="outlined"
          className={`${
            data.id === 1
              ? "bg-[#919197]"
              : data.id === 2
              ? "bg-[#2E2E3A]"
              : data.id === 3
              ? "bg-[#1D1D27]"
              : ""
          } lg:px-3`}
        >
          <React.Fragment>
            <CardContent className="text-white">
              <Typography
                variant="h5"
                component="div"
                sx={{ textAlign: "left" }}
                className={`font-poppins font-medium lg:my-2`}
              >
                {data.title}
                <span className="font-poppins font-medium text-[12px]">
                  {data.subTitle}
                </span>
              </Typography>

              <div className="flex flex-col items-start py-3">
                {data.textList &&
                  data.textList.map((li) => (
                    <Typography
                      key={li.id}
                      color="white"
                      variant="div"
                      className={`flex items-start justify-start gap-1 ${
                        data.id === 3 ? "my-3" : " my-1 "
                      }`}
                    >
                      <CheckIcon sx={{ color: "#A009B9" }} />
                      <b
                        className={`font-poppins font-semibold text-[19px] md:text-[14px] lg:text-[19px] `}
                      >
                        {li.text}
                      </b>
                    </Typography>
                  ))}
              </div>
            </CardContent>

            <CardActions className="justify-center">
              <Button
                size="small"
                className="text-[18px] font-medium bg-[#387AFA] text-white h-[34px] rounded-[20px] w-full font-poppins"
              >
                {data.btnTxt}
                <span className="font-poppins font-medium text-[10px] mx-1">
                  {data.btnSubTxt}
                </span>
              </Button>
            </CardActions>
          </React.Fragment>
        </Card>
      </Box>

      {data.extraDesc && (
        <div className="flex justify-center">
          <p className="max-w-[329px] text-center md:h-[150px] md:absolute top-full left-0 my-5 font-koho font-light text-[16px] text-[#080808] p-3">
            {data.extraDesc}
          </p>
        </div>
      )}
    </div>
  );
}
