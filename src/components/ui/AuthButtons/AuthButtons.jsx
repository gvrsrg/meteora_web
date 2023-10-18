import React from "react";
import buttons_clr from "../../../pages/WelcomePage/WelcomePage.module.css";
import buttons from "./AuthButtons.module.css";
import dark from "../../../styles/themes/dark.module.css";

export default function AuthButtons() {
  const buttonName = `${buttons["auth-button"]} ${buttons_clr["form-button"]} 
    ${dark["fb-yellow"]}`;

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
