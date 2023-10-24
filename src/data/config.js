import settings from "../assets/ui/settings.svg";
import control from "../assets/ui/control.svg";
import help from "../assets/ui/help.svg";
import chat from "../assets/ui/chat.svg";
import menu from "../assets/ui/menu.svg";
import home from "../assets/ui/home.svg";

export const sideItems = [
	{
		icon: chat,
		text: "Чаты",
		link: "/chats",
	},

	{ text: "divider" },

	{
		icon: help,
		text: "Справка",
		link: "/help",
	},

	{
		icon: settings,
		text: "Настройки",
		link: "/settings",
	},

	{ text: "divider" },

	{
		icon: control,
		text: "Админ-панель",
		link: "/dev",
	},
];

export const navbarItems = [
	{
		icon: home,
		text: "Главная",
		link: "/",
	},

	{
		icon: chat,
		text: "Чаты",
		link: "/chats",
	},

	{ text: "user" },

	{
		icon: menu,
		text: "Ещё",
	},
];

export const exceptions = {
	404: "Not Found",
	403: "Forbidden",
	400: "Bad Request",
};

export const formLinks = {
	login: [
		{
			to: "/register",
			text: "Создать аккаунт",
		},

		{
			to: "/restore",
			text: "Восстановить доступ",
		},
	],

	register: [
		{
			to: "/login",
			text: "Уже есть аккаунт?",
		},

		{
			to: "/restore",
			text: "Восстановить доступ",
		},
	],

	restore: [
		{
			to: "/register",
			text: "Создать аккаунт",
		},

		{
			to: "/login",
			text: "Войти",
		},
	],
};

export const formTitles = {
	login: "Вход & Войти",
	register: "Регистрация & Зарегистрироваться",
	restore: "Восстановление & Восстановить",
};
