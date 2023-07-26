//import {} from "dotenv/config";
//import env from "react-dotenv";

export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': "0163d9448cmshc2ee42516cb00b0p1ddc1cjsn3d9895605016",
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "fcfaf0816fc485a804d81b25c453cf5b"; // enter your key from openweather API