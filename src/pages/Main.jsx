import React from "react";
import Content from "../components/Content/Content";
import Header from "../components/Header/Header";

export default function Main({ email, password, visibleAuth,setVisibleAuth, setVisibleReg }) {
  return (
    <div className="m">
      <Header
        email={email}
        password={password}
        visibleAuth={visibleAuth}
        setVisibleAuth={setVisibleAuth}
        setVisibleReg={setVisibleReg}
      />
      <Content />
    </div>
  );
}
