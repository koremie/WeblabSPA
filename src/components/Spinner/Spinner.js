import React from "react";
import { Spinner } from "./Spinner.styled";
import lol from "../../images/frog-spin-frog.gif";

export default function LoadingSpinner() {
  return (
    <Spinner>
      <img src={lol}/>
    </Spinner>
  );
}