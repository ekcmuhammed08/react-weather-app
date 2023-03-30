import React from 'react'
import { useWeather } from '../Context/WeatherContext';

function Options() {
    const{setCity} = useWeather();
    const cityVals = ["Adana", "Adıyaman","Afyonkarahisar","Ağrı","Aksaray","Amasya","Ankara","Antalya","Ardahan","Artvin","Aydın","Balıkesir","Bartın","Batman","Bayburt","Bilecik","Bingöl","Bitlis","Bolu","Burdur","Bursa","Çanakkale","Çankırı","Çorum","Denizli","Diyarbakır","Düzce","Edirne","Elazığ","Erzincan","Erzurum","Eskişehir","Gaziantep","Giresun","Gümüşhane","Hakkâri","Hatay","Iğdır","Isparta","İstanbul","İzmir","Kahramanmaraş","Karabük","Karaman","Kars","Kastamonu","Kayseri","Kilis","Kırıkkale","Kırklareli","Kırşehir","Kocaeli","Konya","Kütahya","Malatya","Manisa","Mardin","Mersin","Muğla","Muş","Nevşehir","Niğde","Ordu","Osmaniye","Rize","Sakarya","Samsun","Şanlıurfa","Siirt","Sinop","Sivas","Şırnak","Tekirdağ","Tokat","Trabzon","Tunceli","Uşak","Van","Yalova","Yozgat","Zonguldak"];
    const handleSelect = ()=>{
        document.getElementsByName("city").forEach((e)=>{e.selected=false})
        document.getElementsByName("city").forEach((e)=>{e.checked&&setCity(e.value)})
    }  

    const inputs = cityVals.map((val)=>
    <li >
        <input  onClick={handleSelect} type="radio" name="city" id={val} value={val}/>
        <label for={val}>{val}</label>
    </li>)
    
  return (
    <div className='options'>
            <div class="radio-container">
                <div class="radio-options">
                    <div class="toggle">Şehir Seçiniz</div>
                    <ul>
                        {inputs}
                    </ul>   
                </div>
            </div>
    </div>
  )
}

export default Options