import React, { useState } from "react";
import './SearchBar.scss'

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const search = (e) => {
    e.preventDefault();
    onSearch(city);
    setCity("");
  };

  return (
    <div className="search">
      <div className="wrap">
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            placeholder="City..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit" className="searchButton" onClick={search}>
            🔍
          </button>
        </div>
      </div>
    </div>
  );
}
