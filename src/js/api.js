import Sig from "./s";

const API = "http://127.0.0.1:5000/";

export async function get_captcha() {
	let url = API + "service/captcha"

	try {
		let response = await fetch(url)

		response = await response.json()

		return response.captcha.src;
	} catch(error) {
		return "";
	}
}

export async function get_clubs(cat, start) {
	let url = API + "global/root/clubs";

	const body = JSON.stringify({
		start: start.toString(),
		size: "5",
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

export async function get_client() {
	let url = API + "service/get_client";

	try {
		let response = await fetch(url, {
			method: "POST",
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
