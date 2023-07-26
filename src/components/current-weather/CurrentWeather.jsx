import {Button} from 'react-bootstrap/';
import "./current-weather.css"

const CurrentWeather = ({ data }) => {
    return (
        <div className="weather">
            <div className='d-flex align-items-center justify-content-around'>
                <img
                alt="weather"
                className="weather-icon"
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                />
                <p className="temperature">{Math.round(data.main.temp)}°C</p>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <p className="city">{data.city}</p>
            </div>
            <div className='d-flex '>
            <Button variant="primary" className="d-flex flex-column">
                <span>
                    Wind Speed
                </span>
                <span>
                    {data.wind.speed} m/s
                </span>
            </Button>{' '}
            <Button variant="success" className="d-flex flex-column">
                <span>Humidity</span>
                <span>{data.main.humidity}%</span>
            </Button>{' '}
            </div>
            <Button variant="warning" size="lg">
                {data.weather[0].description}
            </Button>
        </div>
    );
};

export default CurrentWeather;