import { useState } from "react";

function Weather() {
  const [city, setCity] = useState("");
  const [cityName, setCityName] = useState("Karachi");
  const [temperature, setTemperature] = useState("32°C");
  const [description, setDescription] = useState("Sunny");
  const [icon, setIcon] = useState(
    "https://cdn-icons-png.flaticon.com/512/1163/1163661.png"
  );

  const getWeather = () => {
    if (city === "") {
      alert("Please enter city name");
      return;
    }

    setCityName(city);

    let temp = Math.floor(Math.random() * 15) + 20;
    setTemperature(temp + "°C");

    let weatherList = ["Sunny", "Cloudy", "Rainy", "Stormy"];
    let randomWeather =
      weatherList[Math.floor(Math.random() * weatherList.length)];

    setDescription(randomWeather);

    if (randomWeather === "Sunny") {
      setIcon("https://cdn-icons-png.flaticon.com/512/869/869869.png");
    } else if (randomWeather === "Cloudy") {
      setIcon("https://cdn-icons-png.flaticon.com/512/414/414825.png");
    } else if (randomWeather === "Rainy") {
      setIcon("https://cdn-icons-png.flaticon.com/512/1163/1163624.png");
    } else {
      setIcon("https://cdn-icons-png.flaticon.com/512/1146/1146860.png");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Weather App</h1>

      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather}>Search</button>

      <div style={{ marginTop: "20px" }}>
        <img src={icon} alt="weather" width="120" />
        <h2>{cityName}</h2>
        <h3>{temperature}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Weather;