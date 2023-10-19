import React from "react";
import buttons from "./AuthButtons.module.css";

export default function AuthButtons(props) {
  const buttonName = `formButton formButton__alt 
    ${buttons.authButton} fb__${props.color}`;

  return (
    <div className={buttons.authButtons}>
      <div className={buttonName} onClick={(e) => {}}>
        Sign up
      </div>

      <div className={buttonName} onClick={(e) => {}}>
        Sign in
      </div>
    </div>
  );
}