import './index.css'
import { useWeather } from '../Context/WeatherContext'
import Options from './Options';

function Header() {    
  return (
    <div className='header'>
        <div>
            <h2>7 Günlük Hava Durumu</h2>
        </div>
        <div className='dropdown'>
            <Options/>
        </div>
    </div>
  )
}

export default Header