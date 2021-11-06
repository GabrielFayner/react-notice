import React from "react";
import { ButtonCustom } from "./styles";

function Button({ click, title, kind }) {
  return (
    <ButtonCustom onClick={click} kind={kind}>
      {title}
    </ButtonCustom>
  );
}

export default Button;
