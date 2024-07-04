import React from "react";
import Head from 'next/head';
import Image from "next/image";
import LogoPic from "@/assets/images/logo.svg";
import LogInForm from "@/components/logInForm";
import AppleIcon from "@mui/icons-material/Apple";
import googlePlayPic from "@/assets/images/googleplay.svg";
import Link from "next/link";
import Footer from "../components/footer";
import { Button } from "@mui/material";


export default function Home() {
  return (
    <>
      <Head>
        <title>Autharitic</title>
      </Head>
      <main className={`min-h-screen w-full flex flex-col justify-between  bg-white`}>
        <section className="relative w-full h-full max-w-[1440px] mx-auto">
          <Link href={"/registration"} className="absolute right-7 top-7 md:block hidden">
            <Button
              type="submit"
              variant="contained"
              className="bg-[#22477F] rounded-[7px] font-kodchasan "
              sx={{
                textTransform: "none"
              }}
            >
              Register
            </Button>
          </Link>
          {/* Home Page Logo */}
          <div className="w-full flex justify-center items-center">
            <Image
              src={LogoPic}
              alt="logo"
              height={204}
              priority="true"
              className="w-[280px] h[204px] sm:w-[320px] lg:w-[387px]"
            />
          </div>

          {/* Home Page main screen */}
          <div className="w-full flex justify-center items-center pt-[10%]" >
            <div className="flex gap-7 sm:gap-0 items-center md:items-start justify-around w-full flex-col-reverse md:flex-row pb-7 md:pb-0">
              <div className="text-black flex flex-col items-center lg:items-start gap-4">
                <h1
                  className={`text-[20px] md:text-[18px] lg:text-[20px] text-[#080808] font-light Koho-light`}
                >
                  FOR PERSONAL USE
                </h1>

                <div className="flex flex-col sm:flex-row  md:flex-col items-center justify-Center gap-3">
                  <Link href={"https://www.appstore.com/authartic"} target="_blank">
                    <div className="flex p-[5px] items-center bg-black md:w-[280px] lg:w- [300px] text-white rounded-3xl px-5 md:px-3 py-1 shadow-lg">
                      <div className="p-[5px] md:p-[10px]">
                        <div>
                          <AppleIcon color="white" className="text-[60px]" />
                        </div>
                      </div>
                      <div className="flex flex-col items-start">
                        <h3 className="text-[1rem] md:text-[1.2rem]">
                          download on the
                        </h3>
                        <h1 className="text-[1.5rem] md:text-[2rem]">
                          App Store
                        </h1>
                      </div>
                    </div>
                  </Link>

                  <Link href={"https://play.google.com/store/apps/authartic"} target="_blank">
                    <div className="flex p-[5px] items-center bg-black md:w-[280px] lg:w- [300px] text-white rounded-3xl px-5 md:px-3 py-1 shadow-lg">
                      <div className="p-[5px] md:p-[10px]">
                        <div className="w-[55px] p-[5px]">
                          <Image
                            src={googlePlayPic}
                            alt="google play"
                            width={100}
                            height={"auto"}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start">
                        <h3 className="text-[1rem] md:text-[1.2rem]">
                          Get It On
                        </h3>
                        <h1 className="text-[1.5rem] md:text-[2rem]">
                          Google play
                        </h1>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <LogInForm title={"VENDOR LOGIN"} />
            </div>
          </div>
        </section >
        <div className="h-24 pt-2">
          <Footer />
        </div>
      </main >

    </>
  );
}
