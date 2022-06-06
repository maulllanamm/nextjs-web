import React from "react";
import CompanyItem from "../../molecules/CompanyItem";
import ConnectItem from "../../molecules/Connectitem";
import SupportItem from "../../molecules/Supportitem";

export default function Listfooter() {
  return (
    <div className="col-lg-8 mt-lg-0 mt-20">
      <div className="row gap-sm-0">
        <CompanyItem />
        <SupportItem />
        <ConnectItem />
      </div>
    </div>
  );
}
