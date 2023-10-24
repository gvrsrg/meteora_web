import React from "react";
import { Link } from "react-router-dom";
import form from "./AuthPage.module.css";
import { formLinks, formTitles } from "../../data/config";

export default function AuthPage({ mode }) {
	function submit(e, mode) {
		e.preventDefault();

		console.log(mode);
	}

	const [formTitle, buttonTitle] = formTitles[mode].split("&");

	return (
		<div className={form.screen}>
			<form className={form.form} onSubmit={(e) => e.preventDefault()}>
				<div className={form.title}>{formTitle}</div>

				<div className="flash-message"></div>

				<div className={form.field}>
					<input type="email" name="email" placeholder="Почта" />
				</div>

				{["login", "register"].indexOf(mode) !== -1 ? (
					<div className={form.field}>
						<input
							name="secret"
							type="password"
							placeholder="Пароль"
							autoComplete="new-password"
						/>
					</div>
				) : null}

				{mode === "register" ? (
					<div className={form.field}>
						<input
							type="text"
							name="nickname"
							placeholder="Никнейм"
						/>
					</div>
				) : null}

				<div className={form.captcha}>
					<img src="" alt="" className={form.icon} />

					<div className={form.field}>
						<input type="text" name="cap" placeholder="Капча" />
					</div>
				</div>

				<div className={form.submit} onClick={(e) => submit(e, mode)}>
					{buttonTitle}
				</div>

				{formLinks[mode] ? (
					<div className={form.links}>
						{formLinks[mode].map((link) => (
							<Link key={Math.random()} to={link.to}>
								{link.text}
							</Link>
						))}
					</div>
				) : null}
			</form>
		</div>
	);
}