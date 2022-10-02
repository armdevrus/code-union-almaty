import React from "react";
import "./CardItem.css";
import CardImg from "../../img/card-img.svg";

export default function CardItem() {
  return (
    <div className="card-wrapper">
      <img src={CardImg} alt="card_img" />
      <div className="card-info">
        <h4 className="card-name">Ininity Plaza</h4>
        <h5 className="card-place">Анталья, Турция</h5>
        <p className="card-desc">Один из крупнейших ресторанов..</p>
        <h4 className="card-price">от $56 000 000</h4>
        <button className="card-moreinfo">Подробнее</button>
      </div>
    </div>
  );
}
