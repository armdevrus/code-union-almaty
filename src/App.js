import { useState } from "react";
import { useSelector } from "react-redux";
import Registration from "./components/Registration/Registration";
import Main from "./pages/Main";
import "./App.css";
import Authorization from "./components/Authorization/Authorization";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [visibleReg, setVisibleReg] = useState("flex");
  const [visibleAuth, setVisibleAuth] = useState("flex");
  const user = useSelector((state) => state.user);

  return (
    <div className="App">
      <Main
        email={email}
        password={password}
        visibleAuth={visibleAuth}
        setVisibleAuth={setVisibleAuth}
        setVisibleReg={setVisibleReg}
      />
      {user.length ? (
        <Authorization
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          visible={visibleAuth}
          setVisible={setVisibleAuth}
        />
      ) : (
        <Registration visible={visibleReg} setVisible={setVisibleReg} />
      )}
    </div>
  );
}

export default App;
