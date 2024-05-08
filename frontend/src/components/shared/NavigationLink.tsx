import React from "react";
import { Link } from "react-router-dom";

type props = {
  to: string;
  bg: string;
  text: string;
  textColor: string;
  onClick?: () => Promise<void>;
};

function NavigationLink(props: props) {
  return (
    <Link
      to={props.to}
      style={{ background: props.bg, color: props.textColor }}
    >
      {" "}
      {props.text}{" "}
    </Link>
  );
}
export default NavigationLink;
