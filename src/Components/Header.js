import './index.css'
import { useWeather } from '../Context/WeatherContext'

function Header() {
  const{city, setCity} = useWeather();
  const cityVals = ["Adana", "Adıyaman","Afyonkarahisar","Ağrı","Aksaray","Amasya","Ankara","Antalya","Ardahan","Artvin","Aydın","Balıkesir","Bartın","Batman","Bayburt","Bilecik","Bingöl","Bitlis","Bolu","Burdur","Bursa","Çanakkale","Çankırı","Çorum","Denizli","Diyarbakır","Düzce","Edirne","Elazığ","Erzincan","Erzurum","Eskişehir","Gaziantep","Giresun","Gümüşhane","Hakkâri","Hatay","Iğdır","Isparta","İstanbul","İzmir","Kahramanmaraş","Karabük","Karaman","Kars","Kastamonu","Kayseri","Kilis","Kırıkkale","Kırklareli","Kırşehir","Kocaeli","Konya","Kütahya","Malatya","Manisa","Mardin","Mersin","Muğla","Muş","Nevşehir","Niğde","Ordu","Osmaniye","Rize","Sakarya","Samsun","Şanlıurfa","Siirt","Sinop","Sivas","Şırnak","Tekirdağ","Tokat","Trabzon","Tunceli","Uşak","Van","Yalova","Yozgat","Zonguldak"];
  const options = cityVals.map((val)=><option name={val} value={val}>{val}</option>)
    
  return (
    <div className='header'>
        <div>
            <h2>7 Günlük Hava Durumu</h2>
        </div>
        <div className='dropdown'>
            <select className='cities' name="cities" value={city} onChange={e=>setCity(e.target.value)} >
                {options}
            </select>
        </div>
        {/* <h1>{e && JSON.stringify(e.value).replace('"', '').replace('"', '')}</h1> */}
    </div>
  )
}

export default Header