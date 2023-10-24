import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cls from "./MainPage.module.css";
import get_client from "../../data/api";
import GridBlock from "../../components/GridBlock/GridBlock";
import Loading from "../../components/Loading/LoadingScreen";
import SideBar from "../../components/SideBar/SideBar";
import Header from "../../components/Header/Header";
import OneRow from "../../components/OneRow/OneRow";

export default function MainPage() {
  const navigate = useNavigate();
  const [client, setClient] = useState(false);

  useEffect(() => {
    get_client().then((client) => setClient(client));
  }, []);
  // Если клиент не загрузился, перенаправляем
  setTimeout(() => (client ? navigate("/hello") : false), 2500);

  if (client) return <Loading />;

  return (
    <>
      <Header />
      <main className={cls.scrollArea}>
        <SideBar user={client} />
        <div className={cls.container}>
          <OneRow name="myClubs" title="Мои клубы" createClub={true} />
          <OneRow name="popularClubs" title="Поплуярные клубы" />
          <GridBlock name="board" title="Вам может быть интересно" />
        </div>
      </main>
    </>
  );
}
