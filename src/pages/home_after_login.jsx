import React from "react";
import CustomButton from "@/components/muiButton";
import Asset from "@/assets/jsonData/sampleOrders";
import SampleCard from "@/components/certificateCards";
import Header from "@/components/header";
import Footer from "@/components/footer";

const index = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <Header />

      <div className="max-w-[962px] h-full relative mx-auto pb-11">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-end">
            <CustomButton title={"New order"} />
            <CustomButton title={"drafts"} colored={true} />
          </div>
        </div>

        <div className="w-full h-full flex flex-col justify-start items-center gap-[70px]">
          {Asset &&
            Asset.map((data) => <SampleCard data={data} key={data.id} />)}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default index;
