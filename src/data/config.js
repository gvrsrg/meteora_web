import settings from "../assets/ui/settings.svg";
import control from "../assets/ui/control.svg";
import help from "../assets/ui/help.svg";
import chat from "../assets/ui/chat.svg";

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
