import { createContext, useContext, useState, useEffect} from "react";
import axios from "axios";

const WeatherContext = createContext();

export const WeatherProvider = ({children})=>{
    const[weatherData,setWeatherData] = useState([{}]);
    const[cityData, setCityData] = useState([{}])
    const[city,setCity] = useState("Adana")   
    const[most,setMost]=useState()

    const fetchGeo = async (city) =>{        
        await axios (`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.REACT_APP_API_KEY}`)
        .then((res)=>setCityData(res.data))
    }

    useEffect(() => {
        fetchGeo(city)
    }, [city])
    
    const fetchWeather = async (lat,lon)=>{
        
        await axios(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=apparent_temperature_max&daily=apparent_temperature_min&daily=weathercode&current_weather&timezone=auto`)
        .then((res)=>setWeatherData(res.data))
    }
    
    const mostFreq = async()=>{
        const arr1=weatherData.daily.weathercode;
        console.log("most")

            let mf = 1;
            let m = 0;
            let item;
            for (let i=0; i<arr1.length; i++)
            {
                    for (let j=i; j<arr1.length; j++)
                    {
                            if (arr1[i] === arr1[j])
                            m++;
                            if (mf<=m)
                            {
                            mf=m;
                            item = arr1[i];
                            }
                    }
                    m=0;
            }
        setMost(item)    
    }
    
    const values= { most, mostFreq, fetchWeather, weatherData, cityData, city, setCity}
    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
} 

export const useWeather = ()=> useContext(WeatherContext);
