import WeatherCard from './WeatherCard'
import './index.css'
import { useWeather } from '../Context/WeatherContext';
import { useEffect } from 'react'

function WeatherBar() {
  const {cityData, fetchWeather} = useWeather();
  
  useEffect(() => {
    fetchWeather(cityData[0].lat,cityData[0].lon)
  }, [cityData])
  
  return (
    <div className='weatherBar'>
        <div className='card'>
          <WeatherCard/>
        </div>
    </div>
  )
}

export default WeatherBar