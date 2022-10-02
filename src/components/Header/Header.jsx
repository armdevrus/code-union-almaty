import React from "react";
import { useSelector } from "react-redux";
import "./Header.css";

export default function Header({
  email,
  password,
  visibleAuth,
  setVisibleAuth,
  setVisibleReg,
}) {
  const user = useSelector((state) => state.user);

  return (
    <div className="h">
      <div className="h-a-wrapper">
        <div className="h-a-tomain">
          <button className="h-to-main">Главная</button>
        </div>
        <div className="h-reg-auth">
          {visibleAuth === "none" &&
          user[0].email === email &&
          user[0].password === password ? (
            <>
              <span style={{ color: "gray" }}>Привет, {user[0].email}</span>
            </>
          ) : user.length ? (
            <button className="h-auth" onClick={() => setVisibleAuth("flex")}>
              Авторизация
            </button>
          ) : (
            <button className="h-reg" onClick={() => setVisibleReg("flex")}>
              Регистрация
            </button>
          )}
        </div>
      </div>
      <div className="h-s-wrapper">
        <h3 className="h-s-title">Найдите лучшее предложение от ресторана</h3>
        <div className="h-s-search">
          <input
            type="search"
            name="search"
            id="s"
            placeholder="Город, адрес, шоссе или ЖК"
          />
          <button>Найти</button>
        </div>
      </div>
    </div>
  );
}
