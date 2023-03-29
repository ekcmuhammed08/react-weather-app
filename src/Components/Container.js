import React from 'react'
import Header from './Header'
import WeatherBar from './WeatherBar'
import './index.css'
import { useWeather } from '../Context/WeatherContext'
import { useEffect , useState} from 'react' 
import Footer from './Footer'

function Container() {            
  const {city,weatherData,mostFreq,most} = useWeather(); 
  const[imageURL,setImageURL] = useState("/public/bg/default.jpg")
  
  useEffect(() => {
    mostFreq()
  }, [weatherData]) 

  useEffect(()=>{ 
    if(most===0||most===1){ //açık 
      let x = Math.floor(Math.random() * 3)
      if(x===0)setImageURL("/bg/sunny-1.jpg")
      else if(x===1)setImageURL("/bg/sunny-2.jpg")
      else if(x===2)setImageURL("/bg/sunny-3.jpg")
    }
    else if(most===2){ //parçalı bulutlu
      let x = Math.floor(Math.random() * 3)
      if(x===0)setImageURL("/bg/partly-cloudy-1.jpg")
      else if(x===1)setImageURL("/bg/party-cloudy-2.jpg")
      else if(x===2)setImageURL("/bg/partly-cloudy-3.jpg")
    }
    else if(most===3){ //kapalı
      let x = Math.floor(Math.random() * 3)
      if(x===0)setImageURL("/bg/closed-1.jpg")
      else if(x===1)setImageURL("/bg/closed-2.jpg")
      else if(x===2)setImageURL("/bg/closed-3.jpg")
    }
    else if(most===45||most===48){ //sisli
      let x = Math.floor(Math.random() * 3)
      if(x===0)setImageURL("/bg/foggy-1.jpg")
      else if(x===1)setImageURL("/bg/foggy-2.jpg")
      else if(x===2)setImageURL("/bg/foggy-3.jpg")
    }
    else if(most===51||most===53||most===55||most===61||most===80){//hafif yağmurlu
      let x = Math.floor(Math.random() * 3)
      if(x===0)setImageURL("/bg/light-rain-1.jpg")
      else if(x===1)setImageURL("/bg/light-rain-2.jpg")
      else if(x===2)setImageURL("/bg/light-rain-3.jpg")
    }
    else if(most===56||most===57||most===66){//dondurucu çiseleme
      setImageURL("/bg/freezer-drizzle-1.jpg")
    }
    else if(most===63||most===65||most===67||most===81||most===82){//yağmurlu
      let x = Math.floor(Math.random() * 5)
      if(x===0)setImageURL("/bg/rainy-1.jpg")
      else if(x===1)setImageURL("/bg/rainy-2.jpg")
      else if(x===2)setImageURL("/bg/rainy-3.jpg")
      else if(x===3)setImageURL("/bg/rainy-4.jpg")
      else if(x===4)setImageURL("/bg/rainy-5.jpg")
    }
    else if(most===71||most===77){//hafif karlı
      let x = Math.floor(Math.random() * 3)
      if(x===0)setImageURL("/bg/light-snow-1.jpg")
      else if(x===1)setImageURL("/bg/light-snow-2.jpg")
      else if(x===2)setImageURL("/bg/light-snow-3.jpg")
    }
    else if(most===73||most===75||most===85||most===86){//karlı
      let x = Math.floor(Math.random() * 5)
      if(x===0)setImageURL("/bg/snowy-1.jpg")
      else if(x===1)setImageURL("/bg/snowy-2.jpg")
      else if(x===2)setImageURL("/bg/snowy-3.jpg")
      else if(x===3)setImageURL("/bg/snowy-4.jpg")
      else if(x===4)setImageURL("/bg/snowy-5.jpg")
    }
    else if(most===95){//fırtınalı
      let x = Math.floor(Math.random() * 3)
      if(x===0)setImageURL("/bg/stormy-1.jpg")
      else if(x===1)setImageURL("/bg/stormy-2.jpg")
      else if(x===2)setImageURL("/bg/stormy-3.jpg")
    }
    else if(most===96||most===99){//fırtına ve dolu
      let x = Math.floor(Math.random() * 3)
      if(x===0)setImageURL("/bg/storm-w-hail-1.jpg")
      else if(x===0)setImageURL("/bg/storm-w-hail-1.jpg")
      else if(x===0)setImageURL("/bg/storm-w-hail-1.jpg")
    }
    else{
      setImageURL("/bg/default.jpg")
    }
  },[most,city])
  
  let bgstyle = `background:url(${imageURL})no-repeat center center fixed; background-size:cover;`
  const setStyle= ()=>{document.body.style.cssText+=bgstyle}
  setStyle()
  
  return (
    <div className='container'>
        <Header/>
        {city&&<WeatherBar/>}
        <Footer/>
    </div>
  )
}

export default Container