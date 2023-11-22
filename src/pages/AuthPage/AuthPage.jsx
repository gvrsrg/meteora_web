import form from "./AuthPage.module.css";
import { formLinks, formTitles } from "../../js/config";
import { form_resolve, get_captcha } from "../../js/api";
import React, { useEffect, useRef, useState } from "react";

function flash_control(flashM, text, hide) {
	if (hide) {
		flashM.current.innerHTML = "";
		flashM.current.style.display = "none";

		return false;
	}

	flashM.current.innerHTML = text;
	flashM.current.style.display = "block";
}

export default function AuthPage({ mode }) {
	function submit(e, mode) {
		e.preventDefault();

		form_resolve(mode, captcha, document.forms[0]).then((status) => {
			status.indexOf("/") === -1
				? flash_control(flashM, status)
				: (window.location.href = status);
		});
	}

	const flashM = useRef();

	const links = formLinks[mode];
	const [refresh, setRefresh] = useState(0);
	const [captcha, setCaptcha] = useState({});
	const [formTitle, buttonTitle] = formTitles[mode].split("&");

	useEffect(() => {
		get_captcha().then((captcha) => setCaptcha(captcha));
	}, [refresh]);

	return (
		<div className={form.screen}>
			<form className={form.form} onSubmit={(e) => e.preventDefault()}>
				<div className={form.title}>{formTitle}</div>

				<div
					ref={flashM}
					className={form.flash}
					onClick={(e) => flash_control(flashM, "", true)}
				></div>

				{["login", "register", "restore"].includes(mode) && (
					<div className={form.field}>
						<input type="email" name="email" placeholder="Почта" />
					</div>
				)}

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

				{mode === "club" && (
					<div style={{ display: "flex", flexDirection: "column" }}>
						<div className={form.field}>
							<input
								name="name"
								type="text"
								placeholder="Имя клуба"
								autoComplete="new-password"
							/>
						</div>

						<div className={form.field + " " + form.field__bbc}>
							<div className="bbcode"> BBCode Bar </div>

							<textarea
								rows="3"
								name="desc"
								placeholder="Пару слов о вашем клубе"
							></textarea>
						</div>
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

				{!["club"].includes(mode) && (
					<div className={form.captcha}>
						<img
							alt=""
							src={captcha.src}
							className={form.icon}
							onClick={(e) => setRefresh(refresh + 1)}
						/>

						<div className={form.field}>
							<input type="text" name="cap" placeholder="Капча" />
						</div>
					</div>
				)}

				<div className={form.submit} onClick={(e) => submit(e, mode)}>
					{buttonTitle}
				</div>

				{links && (
					<div className={form.links}>
						{links.map((link) => (
							<a key={link.to} href={link.to}>
								{link.text}
							</a>
						))}
					</div>
				)}
			</form>
		</div>
	);
}
