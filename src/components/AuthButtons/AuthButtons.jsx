import React from "react";
import { useNavigate } from "react-router-dom";
import buttons from "./AuthButtons.module.css";

export default function AuthButtons() {
    const navigate = useNavigate();

    return (
        <div className={buttons.authButtons}>
            <div
                className={buttons.authButton}
                onClick={() => navigate("/register")}
            >
                Sign up
            </div>

            <div
                className={buttons.authButton}
                onClick={() => navigate("/login")}
            >
                Sign in
            </div>
        </div>
    );
}
