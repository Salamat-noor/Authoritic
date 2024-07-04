import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";
import React from "react";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Link from "next/link";

const AdminDashboard = () => {
  return (
    <>
      <Head>
        <title>AdminDashboard</title>
      </Head>
      <div className="w-full h-screen flex flex-col justify-between">
        <Header />
        <div className="max-w-[1080px] lg:w-[1080px] h-full mx-auto my-7">
          <div className="w-full text-left">
            <h1 className=" font-Poppins font-semibold text-1xl md:text-2xl">
              ADMIN DASHBOARD
            </h1>
          </div>

          <div className="w-full h-auto flex items-start justify-start gap-3 flex-wrap py-3 my-3">
            <Link href={"/users"}>
              <div className="flex items-center gap-9 bg-slate-600 px-5 py-2 rounded-lg text-white transition-all hover:shadow-lg hover:scale-105 cursor-pointer">
                <div className="w-full h-full">
                  <PeopleOutlineIcon fontSize="xlarge" className="text-6xl" />
                </div>
                <div className="flex flex-col w-full h-full">
                  <h2>Users</h2>
                  <h3 className="text-right font-KoHo text-2xl">8</h3>
                </div>
              </div>
            </Link>

            <div className="flex items-center gap-9 bg-slate-600 px-5 py-2 rounded-lg text-white transition-all hover:shadow-lg hover:scale-105 cursor-pointer">
              <div className="w-full h-full">
                <ShoppingBagIcon fontSize="xlarge" className="text-6xl" />
              </div>
              <div className="flex flex-col w-full h-full">
                <h2>Vendor</h2>
                <h3 className="text-right font-KoHo text-2xl">100</h3>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AdminDashboard;
