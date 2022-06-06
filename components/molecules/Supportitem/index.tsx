import React from "react";
import ListItem from "../../atoms/ListItem";

export default function SupportItem() {
  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">Support</p>
      <ul className="list-unstyled">
        <ListItem item="Refund Policy" />
        <ListItem item="Unlock Rewards" />
        <ListItem item="Live Chatting" />
      </ul>
    </div>
  );
}
