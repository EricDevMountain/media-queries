import React from "react";
import "./Main.css";
import Button from "../Button/Button";

const Main = props => {
  return (
    <div clsssName="main_content">
      <div className="text small">Welcome To Our Studio!</div>
      <div className="text big">IT'S NICE TO MEET YOU</div>
      <Button />
    </div>
  );
};

export default Main;
