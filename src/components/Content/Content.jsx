import React from "react";
import CardItem from "../CardItem/CardItem";
import Registration from "../Registration/Registration";
import "./Content.css";

export default function Content() {
  return (
    <div className="c">
      <div className="c-title">
        <h3>Популярные предложения</h3>
        <h4>Предложения, которые любят наши клиенты</h4>
      </div>
      <div className="c-card-list">
        <CardItem />
      </div>
    </div>
  );
}
