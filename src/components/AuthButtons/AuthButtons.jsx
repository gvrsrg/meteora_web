import React from "react";
import cls from "./AuthButtons.module.css";

export default function AuthButtons() {
  return (
    <div className={cls.authButtons}>
      <div className={cls.authButton}>Sign up</div>
      <div className={cls.authButton}>Sign in</div>
    </div>
  );
}
