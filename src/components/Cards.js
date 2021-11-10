import React from "react";
import Card from "./Card";
import './Cards.scss'

export default function Cards({ cities, close, openModal }) {
  return (
    <div className='cards-container'>
      {cities.map((c) =>
        <Card
          key={c.id}
          id={c.id}
          name={c.name}
          temp={c.temp}
          img={c.img}
          description={c.description}
          close={close}
          openModal={openModal}
        />
      )}
    </div>
  );
}
