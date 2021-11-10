import React from "react";
import './MiniCard.scss'

export default function MiniCard({ day, img, temp }) {

  return (
    <div class="weakly-weather-item">
      <p class="mb-0"> {day} </p>
      <img src={`https://openweathermap.org/img/wn/${img}@2x.png`} alt="Img not found" height='60' />
      <p class="mb-0"> {temp}° </p>
    </div>
  );
}