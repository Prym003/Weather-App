import React from "react";
import MiniCard from "./MiniCard";
import './Modal.scss'

export default function Modal({ days, currentDay, name }) {
    return (
        <div className='card card-weather'>
            <div className="card-body">
                <div className="weather-date-location">
                    <h3>{currentDay.day[0]}</h3>
                    <p className="text-gray"> <span className="weather-date">{currentDay.day[1] + ',' + currentDay.day[2]}</span> <span className="weather-location">- {name}</span> </p>
                    <div className='stats2'>
                        <p className='stats'> <span className='title'>Humidity</span> <span className='data'>{currentDay.humidity}%</span> </p>
                        <p className='stats'> <span className='title'>Wind</span> <span className='data'>{currentDay.speed} km/h</span> </p>
                    </div>
                </div>
                <div className="weather-data d-flex">
                    <div className="mr-auto">
                        <h4 className="display-3">{currentDay.temp} <span className="symbol">°</span>C</h4>
                        <p className='description'> {currentDay.description} </p>
                    </div>
                </div>
            </div>
            <div className='card-body p-0'>
                <div className='d-flex weakly-weather'>
                    {days ? days.map(d =>
                        <MiniCard
                            day={d.day}
                            temp={d.temp}
                            img={d.img}
                        />
                    ) : null
                    }
                </div>
            </div>
        </div>

    );
}
