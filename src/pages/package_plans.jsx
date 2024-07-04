import React from "react";
import RegistrationPlans from "@/assets/jsonData/registrationAsset";
import PackageCard from "@/components/packageCards";
import Footer from "@/components/footer";
import Header from "@/components/header";

const index = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <div className="h-full max-w-[1440px] mx-auto bg-white relative">
        <div className="w-full h-full flex items-center  justify-center pt-[10%] md:pt-0  pb-[150px] mt-10 mb-7">
          <div className="grid items-end justify-items-center gap-7 md:gap-1 lg:gap-7 grid-cols-1 md:grid-cols-3 px-2">
            {RegistrationPlans.map((data) => (
              <PackageCard data={data} key={data.id} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default index;
