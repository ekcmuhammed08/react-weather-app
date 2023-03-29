import './index.css'
import './cardImages.css'
import { useWeather } from '../Context/WeatherContext'

function WeatherCard() {
  const {weatherData} = useWeather(); 
  const dayArray = [0,1,2,3,4,5,6]
  const cards= dayArray.map((day)=> weatherData&&weatherData.daily&&(
    <div className='weatherCard'>
    <h3>{(new Date(weatherData.daily.time[day])).toLocaleDateString('tr-tr', {weekday:"long"})}</h3>
    {weatherData.daily.weathercode[day]===0 && <div className="sunny"></div>}
    {weatherData.daily.weathercode[day]===1 && <div className="sunny"></div>}
    {weatherData.daily.weathercode[day]===2 && <div className="partly-cloudy"></div>}
    {weatherData.daily.weathercode[day]===3 && <div className="closed"></div>}
    {weatherData.daily.weathercode[day]===45 && <div className="foggy"></div>}
    {weatherData.daily.weathercode[day]===48 && <div className="foggy"></div>}
    {weatherData.daily.weathercode[day]===51 && <div className="light-rain"></div>}
    {weatherData.daily.weathercode[day]===53 && <div className="light-rain"></div>}
    {weatherData.daily.weathercode[day]===55 && <div className="light-rain"></div>}
    {weatherData.daily.weathercode[day]===56 && <div className="freezer-drizzle"></div>}
    {weatherData.daily.weathercode[day]===57 && <div className="freezer-drizzle"></div>}
    {weatherData.daily.weathercode[day]===61 && <div className="light-rain"></div>}
    {weatherData.daily.weathercode[day]===63 && <div className="rainy"></div>}
    {weatherData.daily.weathercode[day]===65 && <div className="rainy"></div>}
    {weatherData.daily.weathercode[day]===66 && <div className="freezer-drizzle"></div>}
    {weatherData.daily.weathercode[day]===67 && <div className="rainy"></div>}
    {weatherData.daily.weathercode[day]===71 && <div className="light-snow"></div>}
    {weatherData.daily.weathercode[day]===73 && <div className="snowy"></div>}
    {weatherData.daily.weathercode[day]===75 && <div className="snowy"></div>}
    {weatherData.daily.weathercode[day]===77 && <div className="light-snow"></div>}
    {weatherData.daily.weathercode[day]===80 && <div className="light-rain"></div>}
    {weatherData.daily.weathercode[day]===81 && <div className="rainy"></div>}
    {weatherData.daily.weathercode[day]===82 && <div className="rainy"></div>}
    {weatherData.daily.weathercode[day]===85 && <div className="snowy"></div>}
    {weatherData.daily.weathercode[day]===86 && <div className="snowy"></div>}
    {weatherData.daily.weathercode[day]===95 && <div className="stormy"></div>}
    {weatherData.daily.weathercode[day]===96 && <div className="storm-w-hail"></div>}
    {weatherData.daily.weathercode[day]===99 && <div className="storm-w-hail"></div>}
    <div className="weathers">
      {weatherData.daily.weathercode[day]===0 && <p>güneşli</p>}
      {weatherData.daily.weathercode[day]===1 && <p>güneşli</p>}
      {weatherData.daily.weathercode[day]===2 && <p>parçalı bulutlu</p>}
      {weatherData.daily.weathercode[day]===3 && <p>kapalı</p>}
      {weatherData.daily.weathercode[day]===45 && <p>sisli</p>}
      {weatherData.daily.weathercode[day]===48 && <p>sisli</p>}
      {weatherData.daily.weathercode[day]===51 && <p>hafif yağmurlu</p>}
      {weatherData.daily.weathercode[day]===53 && <p>hafif yağmurlu</p>}
      {weatherData.daily.weathercode[day]===55 && <p>hafif yağmurlu</p>}
      {weatherData.daily.weathercode[day]===56 && <p>dondurucu çiseleme</p>}
      {weatherData.daily.weathercode[day]===57 && <p>dondurucu çiseleme</p>}
      {weatherData.daily.weathercode[day]===61 && <p>hafif yağmurlu</p>}
      {weatherData.daily.weathercode[day]===63 && <p>yağmurlu</p>}
      {weatherData.daily.weathercode[day]===65 && <p>yağmurlu</p>}
      {weatherData.daily.weathercode[day]===66 && <p>dondurucu çiseleme</p>}
      {weatherData.daily.weathercode[day]===67 && <p>yağmurlu</p>}
      {weatherData.daily.weathercode[day]===71 && <p>hafif karlı</p>}
      {weatherData.daily.weathercode[day]===73 && <p>karlı</p>}
      {weatherData.daily.weathercode[day]===75 && <p>karlı</p>}
      {weatherData.daily.weathercode[day]===77 && <p>hafif karlı</p>}
      {weatherData.daily.weathercode[day]===80 && <p>hafif yağmurlu</p>}
      {weatherData.daily.weathercode[day]===81 && <p>yağmurlu</p>}
      {weatherData.daily.weathercode[day]===82 && <p>yağmurlu</p>}
      {weatherData.daily.weathercode[day]===85 && <p>karlı</p>}
      {weatherData.daily.weathercode[day]===86 && <p>karlı</p>}
      {weatherData.daily.weathercode[day]===95 && <p>fırtınalı</p>}
      {weatherData.daily.weathercode[day]===96 && <p>fırtına ve dolu</p>}
      {weatherData.daily.weathercode[day]===99 && <p>fırtına ve dolu</p>}
      <div className="tempatures">
        <div className='tempature'>
        <img src="/assets/temp-max.png" alt="max-tempature" />
        {parseInt(weatherData.daily.apparent_temperature_max[day])} °C
        </div>
        <div className='tempature'>
        <img src="/assets/temp-min.png" alt="min-tempature" />
        {parseInt(weatherData.daily.apparent_temperature_min[day])} °C
        </div>
      </div> 
    </div>
  </div>
  ))
  return ( 
    cards
  )
}
export default WeatherCard