import React from "react";
import ListItem from "../../atoms/ListItem";

export default function ConnectItem() {
  return (
    <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">Connect</p>
      <ul className="list-unstyled">
        <ListItem item="hi@store.gg" />
        <ListItem item="team@store.gg" />
        <ListItem item="Pasific 12, Jakarta Selatan" />
        <ListItem item="021 - 1122 - 9090" />
      </ul>
    </div>
  );
}
