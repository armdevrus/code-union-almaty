import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../features/userSlice/user-slice";
import "./Registration.css";

export default function Registration({visible, setVisible}) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPass, setRepeatPass] = useState("");
  const [isvaluecheck, setIsvaluecheck] = useState(false);
  const [error, setError] = useState(null);

  const handleOnRegistration = (event) => {
    event.preventDefault();
    if (email && password && repeatPass && isvaluecheck) {
      if (password === repeatPass) {
        dispatch(
          addUser({
            email,
            password,
            repeatPass,
            isvaluecheck,
          })
        );
        setEmail("");
        setPassword("");
        setRepeatPass("");
        setIsvaluecheck(false);
      } else {
        setError("Пароли не совпадают!");
      }
    } else {
      setError("Заполните все поля!");
    }
  };

  return (
    <form
      className="r"
      onSubmit={handleOnRegistration}
      style={{
        display: visible,
      }}
    >
      <div className="a-close" onClick={() => setVisible("none")}>
        &#10006;
      </div>
      <h3 className="r-title">Зарегистрироваться</h3>
      <div className="r-inputs">
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
        <input
          type="password"
          placeholder="Повторите пароль"
          value={repeatPass}
          onChange={(event) => setRepeatPass(event.target.value)}
        />
      </div>
      <div className="r-submit">
        <input
          type="checkbox"
          name="checkbox"
          onClick={() => setIsvaluecheck(!isvaluecheck)}
          checked={isvaluecheck}
          readOnly
        />
        <span>
          Я принимаю условия <u>
             Пользовательского соглашения, политики конфиденциальности, Обработки
            и распространения персональных данных
          </u>
        </span>
      </div>
      {error && <h4 style={{ margin: 0 }}>{error}</h4>}
      <button type="submit">Далее</button>
    </form>
  );
}
