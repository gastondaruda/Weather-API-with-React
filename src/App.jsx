import { useState } from "react";
import Search from "./components/search/Search";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import Forecast from "./components/forecast/Forecast";
import {Container, Row, Col} from 'react-bootstrap/';
//import Clock from 'react-live-clock';
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
//images
import Clear from './assets/images/Clear.jpg'
import Fog from './assets/images/fog.png'
import Cloudy from './assets/images/Cloudy.jpg'
import Rainy from './assets/images/Rainy.jpg'
import Snow from './assets/images/snow.jpg'
import Stormy from './assets/images/Stormy.jpg'
import Sunny from './assets/images/Sunny.jpg'
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [image, setImage] = useState(Sunny)

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
        //setImage(currentWeather.weather[0].main)
        console.log(currentWeather.weather[0].main + "esto")

        if (currentWeather.weather[0].main) {
          let imageString = currentWeather.weather[0].main
          if (imageString.toLowerCase().includes('clear')) {
            setImage(Clear)
          } else if (imageString.toLowerCase().includes('cloud')) {
            setImage(Cloudy)
          } else if (imageString.toLowerCase().includes('rain') || imageString.toLowerCase().includes('shower')) {
            setImage(Rainy)
          } else if (imageString.toLowerCase().includes('snow')) {
            setImage(Snow)
          } else if (imageString.toLowerCase().includes('fog')) {
            setImage(Fog)
          } else if (imageString.toLowerCase().includes('thunder') || imageString.toLowerCase().includes('storm')) {
            setImage(Stormy)
          }
        }
      })
      .catch(console.log);
  };

  return (
    <>
      <div 
        className="container">
        <Search onSearchChange={handleOnSearchChange} />
        <Container>
          <Row>
            <Col>
              {currentWeather && <CurrentWeather data={currentWeather} />}

            </Col>
            <Col>
          {forecast && <Forecast data={forecast} />}

            </Col>
          </Row>
        </Container>
      </div>
        <img src={image} className="bg-img" alt="backgroundImage" />
    </>
  );
}

export default App;