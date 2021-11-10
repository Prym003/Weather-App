import React from "react";
import './Card.scss'

export default function Card({ name, img, temp, id, description, close, openModal }) {

  return (
    <div className="Card">
      <button onClick={() => close(id)}>Remove</button>
      <div onClick={()=> openModal(id)} className='open-modal'>
        <img src={`https://openweathermap.org/img/wn/${img}@2x.png`} alt="Img not found" />
        <h4>{description}</h4>
        <h1>{temp}°</h1>
        <p>{name}</p>
      </div>
    </div>
  );
}
