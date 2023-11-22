import Sig from "./s";

function failed_pointer(response) {
	if (response.api_pointer) {
		try {
			let failed = document.querySelector(
				`input[name="${response.api_pointer}"],
				textarea[name="${response.api_pointer}"]`
			).parentNode;

			failed.classList.add("FailedField");

			failed.firstChild.addEventListener("focus", (e) =>
				failed.classList.remove("FailedField")
			);

			failed.childNodes[1].addEventListener("focus", (e) =>
				failed.classList.remove("FailedField")
			);
		} catch (error) {
			console.error(error);
			return false;
		}
	}
}

export async function form_resolve(mode, captcha, form) {
	let url = "";
	let body = {};

	switch (mode) {
		case "club":
			url = "/clubs/add-club";
			break;
		default:
			url = "/auth/" + mode;
			break;
	}

	const fields = form.querySelectorAll("input, textarea");
	fields.forEach(
		(field) =>
			(body[field.name] = !field.value
				? ""
				: encodeURIComponent(field.value))
	);

	body.captcha = captcha;
	body = JSON.stringify(body);

	try {
		let response = await fetch(url, {
			method: "POST",
			body: body,
			headers: {
				sig: await Sig(body),
			},
		});

		if (!response.ok) return response.statusText;

		response = await response.json();

		if (response.api_statuscode !== 200) {
			failed_pointer(response);
			return response.api_message;
		}

		return response.api_redirect;
	} catch (error) {
		console.error(error);
		return "API Server Error";
	}
}

export async function get_captcha() {
	let url = "/service/captcha";

	try {
		let response = await fetch(url);

		response = await response.json();

		return response.captcha;
	} catch (error) {
		return "";
	}
}

export async function get_clubs(cat, start) {
	let url = "/global/root/clubs";

	const body = JSON.stringify({
		start: start,
		size: 6,
		category: cat,
	});

	try {
		let response = await fetch(url, {
			method: "POST",
			body: body,
			headers: {
				sig: await Sig(body),
			},
		});

		response = await response.json();

		if (start === 0) {
			if (response.api_statuscode !== 200) {
				return "Не удалось загрузить данные";
			}

			if (response.clubsList.length === 0) {
				return "Здесь пока пусто";
			}
		}

		return response.clubsList;
	} catch (error) {
		if (start === 0) {
			return "Не удалось загрузить данные";
		} else {
			return false;
		}
	}
}

export async function get_posts(start) {
	let url = "/global/root/posts";

	const body = JSON.stringify({
		start: start,
		size: 6,
	});

	try {
		let response = await fetch(url, {
			method: "POST",
			body: body,
			headers: {
				sig: await Sig(body),
			},
		});

		response = await response.json();

		if (start === 0) {
			if (response.api_statuscode !== 200) {
				return "Не удалось загрузить данные";
			}

			if (response.postsList.length === 0) {
				return "Здесь пока пусто";
			}
		}

		return response.postsList;
	} catch (error) {
		if (start === 0) {
			return "Не удалось загрузить данные";
		} else {
			return false;
		}
	}
}

export async function get_client() {
	let url = "/service/get_client";

	try {
		let response = await fetch(url, {
			method: "POST",
			headers: {
				"Access-Control-Allow-Origin": "*",
			},
		});

		if (!response.ok) return false;

		response = await response.json();

		if (response.api_statuscode === 401) {
			return false;
		}

		return response;
	} catch (error) {
		return false;
	}
}
