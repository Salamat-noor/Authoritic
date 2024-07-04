import Image from "next/image";
import React from "react";
import Button from "@/components/muiButton";

const CertificateCard = ({ data }) => {
  console.log(data);
  return (
    <div className="flex items-center justify-center gap-[1vw] ">
      <div>
        <Image src={data.src} alt="sample" width={168} height={126} />
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="font-koho text-[#080808] font-light text-[20px]">
          {data.certificateName}
        </h3>
        <h3 className="font-koho text-[#080808] font-light text-[20px]">
          {data.dateCertificateissue}
        </h3>
        <h3 className="font-koho text-[#080808] font-light text-[20px]">
          {data.numberOfCertficateIssue}
        </h3>
      </div>

      <div className="flex flex-col pl-[5vw] gap-5">
        <Button title={data.btnOne} from="homePageAfterLogin" />
        <Button title={data.btnTwo} from="homePageAfterLogin" />
        <Button title={data.btnThree} from="homePageAfterLogin" />
      </div>
    </div>
  );
};

export default CertificateCard;
