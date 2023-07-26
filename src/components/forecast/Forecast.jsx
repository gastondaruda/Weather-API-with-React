import {useState} from 'react'
import {Button} from 'react-bootstrap/';
//import {Card} from 'react-bootstrap/Card';
import "./forecast.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
    
    return (
        <div className='d-flex flex-wrap justify-content-around align-items-center card-container'>
            {
                data.list.splice(0,6).map((item,idx) => (
                        <div key={idx} className='card-weather'>
                            <Button variant="success" className="day">{forecastDays[idx]}</Button>
                            <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`} className="icon-small" alt="weather" />
                            <Button variant="primary">{item.main.feels_like}°C</Button>
                            <div className="d-flex justify-content-center">
                                {Math.round(item.main.temp_max)}°C /{Math.round(item.main.temp_min)}°C
                            </div>
                        </div>
                ))
            }
        </div>
    );
    };

export default Forecast;



/*

 <Accordion allowZeroExpanded>
            {data.list.splice(0, 7).map((item, idx) => (
            <AccordionItem key={idx}>
                <AccordionItemHeading>
                <AccordionItemButton>
                    <div className="daily-item">
                    <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`} className="icon-small" alt="weather" />
                    <label className="day">{forecastDays[idx]}</label>
                    <label className="description">{item.weather[0].description}</label>
                    <label className="min-max">{Math.round(item.main.temp_max)}°C /{Math.round(item.main.temp_min)}°C</label>
                    </div>
                </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className="daily-details-grid">
                    <div className="daily-details-grid-item">
                    <label>Pressure:</label>
                    <label>{item.main.pressure}</label>
                    </div>
                    <div className="daily-details-grid-item">
                    <label>Humidity:</label>
                    <label>{item.main.humidity}</label>
                    </div>
                    <div className="daily-details-grid-item">
                    <label>Clouds:</label>
                    <label>{item.clouds.all}%</label>
                    </div>
                    <div className="daily-details-grid-item">
                    <label>Wind speed:</label>
                    <label>{item.wind.speed} m/s</label>
                    </div>
                    <div className="daily-details-grid-item">
                    <label>Sea level:</label>
                    <label>{item.main.sea_level}m</label>
                    </div>
                    <div className="daily-details-grid-item">
                    <label>Feels like:</label>
                    <label>{item.main.feels_like}°C</label>
                    </div>
                </div>
                </AccordionItemPanel>
            </AccordionItem>
            ))}
        </Accordion>
*/