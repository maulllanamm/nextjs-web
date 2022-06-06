import React from "react";
import ListItem from "../../atoms/ListItem";

export default function CompanyItem() {
  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">Company</p>
      <ul className="list-unstyled">
        <ListItem item="About Us" />
        <ListItem item="Press Release" />
        <ListItem item="Terms of Use" />
        <ListItem item="Privacy & Policy" />
      </ul>
    </div>
  );
}
