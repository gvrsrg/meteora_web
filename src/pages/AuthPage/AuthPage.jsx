import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import form from "./AuthPage.module.css";
import { get_captcha } from "../../js/api";
import { formLinks, formTitles } from "../../js/config";

export default function AuthPage({ mode }) {
	function submit(e, mode) {
		e.preventDefault();

		console.log(mode);
	}

	const links = formLinks[mode];
    const [captcha, setCaptcha] = useState("");
	const [formTitle, buttonTitle] = formTitles[mode].split("&");

    useEffect(() => {
        get_captcha().then((captcha) => setCaptcha(captcha))
    }, [])

	return (
		<div className={form.screen}>
			<form className={form.form} onSubmit={(e) => e.preventDefault()}>
				<div className={form.title}>{formTitle}</div>
				<div className="flash-message"></div>
				<div className={form.field}>
					<input type="email" name="email" placeholder="Почта" />
				</div>
				{["login", "register"].includes(mode) && (
					<div className={form.field}>
						<input
							name="secret"
							type="password"
							placeholder="Пароль"
							autoComplete="new-password"
						/>
					</div>
				)}
				{mode === "register" && (
					<div className={form.field}>
						<input
							type="text"
							name="nickname"
							placeholder="Никнейм"
						/>
					</div>
				)}
				<div className={form.captcha}>
					<img src={captcha} alt="" className={form.icon} />
					<div className={form.field}>
						<input type="text" name="cap" placeholder="Капча" />
					</div>
				</div>
				<div className={form.submit} onClick={(e) => submit(e, mode)}>
					{buttonTitle}
				</div>
				{links && (
					<div className={form.links}>
						{links.map((link) => (
							<Link key={link.to} to={link.to}>
								{link.text}
							</Link>
						))}
					</div>
				)}
			</form>
		</div>
	);
}
