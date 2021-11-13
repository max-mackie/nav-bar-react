import React from "react";
import "./style.css";
import mySVG from "./layered-waves-haikei.svg";

const Spacer1 = () => {
  return (
    <div className="spacer layer1">
      style= `backgroundImage: url(${mySVG}) `
    </div>
  );
};

export { Spacer1 };
