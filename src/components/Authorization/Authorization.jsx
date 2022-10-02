import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Authorization.css";

export default function Authorization({
  email,
  setEmail,
  password,
  setPassword,
  visible,
  setVisible,
}) {
  const [error, setError] = useState(null);

  const user = useSelector((state) => state.user);

  const handleOnAuthorization = (event) => {
    event.preventDefault();
    const getCheckUser = user.find((info) => info.email === email);
    if (getCheckUser && getCheckUser.password === password) {
      setVisible("none");
    } else {
      setError("Неверный логин или пароль!");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <form
      className="a"
      onSubmit={handleOnAuthorization}
      style={{
        display: visible,
      }}
    >
      <div className="a-close" onClick={() => setVisible("none")}>
        &#10006;
      </div>
      <h3 className="a-title">Войти</h3>
      <div className="a-inputs">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      {error && <h6 style={{ margin: 0, color: "red" }}>{error}</h6>}
      <button type="submit" className="a-enter">
        Войти
      </button>
      <button type="submit" className="a-reg">
        Зарегистрироваться
      </button>
      <button type="submit" className="a-res">
        <u>Забыли пароль?</u>
      </button>
    </form>
  );
}
