import React, { useState } from "react";
import "./App.scss";
import SearchBar from "./components/SearchBar";
import Cards from "./components/Cards";
import axios from "axios";
import Modal from './components/Modal.js'

const apiKey = "02bb52b2da0fc48f4344e2cdee3bb22f";
// let url = `http://api.openweathermap.org/data/2.5/forecast?id={city ID}&appid={apiKey}`  // detalles

function App() {
  const [cities, setCities] = useState([]);
  const [ModalInfo, setModalInfo] = useState(false)

  const close = (cityId) => {
    setCities((allCities) => allCities.filter((city) => city.id !== cityId));
  };

  const openModal = async (id) => {
    try {
      let { data: { city: { name, country }, list } } = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${apiKey}&units=metric`)

      let WeekInfo = []
      let CityName = name + ', ' + country
      let TodayInfo = {
        date: 'null'
      }

      const longOptions = { day: 'numeric', weekday: 'long', year: 'numeric', month: 'short', };
      const shortOptions = { weekday: 'short' }

      for (let i = 0; i < list.length; i++) {
        let dateWeatherApi = list[i].dt_txt.split(' ')[0]
        if (WeekInfo.some(c => c.date === dateWeatherApi) || dateWeatherApi === TodayInfo.date) {
        } else {
          let { dt_txt, main: { temp, humidity }, weather: [{ description, icon }], wind: { speed } } = list[i]

          let apiDay = dt_txt.split(' ')[0]
          let day = new Date(apiDay.split('-').join('/'))
          description = description.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
          i !== 0 ?
            WeekInfo = [...WeekInfo, {
              date: apiDay,
              day: day.toLocaleString("en-US", shortOptions),
              temp,
              description,
              img: icon,
              speed,
              humidity
            }] :
            TodayInfo = {
              date: apiDay,
              day: day.toLocaleString("en-US", longOptions).split(','),
              temp,
              description,
              img: icon,
              speed,
              humidity
            }
        }
      }
      setModalInfo({ WeekInfo, CityName, TodayInfo })
    } catch (error) {
      alert('Something went wrong')
      console.log(error)
    }
  }

  const closeModal = () => {
    setModalInfo(false)
  }

  const onSearch = async (city) => {
    try {
      let { data: { name, id, main: { temp }, weather: [{ icon, description }], sys: { country } } } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      if (cities.some(c => c.id === id)) {
        alert(`${name} it's alredy in the list`)
      } else {
        setCities([...cities, {
          id,
          name: name + ', ' + country,
          temp,
          img: icon,
          description
        }])
      }
    } catch (error) {
      alert(`${city} not found`)
    }
  }

  return (
    <div className="app">
      <div className="blr">
        <div className="container">
          <div>
            <SearchBar onSearch={onSearch} />
            <Cards cities={cities} close={close} openModal={openModal} />
            {ModalInfo ?
              <div className='modal' onClick={closeModal}>
                {/* <button className='closeModal' onClick={closeModal}>close</button> */}
                <Modal
                  days={ModalInfo.WeekInfo}
                  name={ModalInfo.CityName}
                  currentDay={ModalInfo.TodayInfo}
                />
              </div> : null
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;