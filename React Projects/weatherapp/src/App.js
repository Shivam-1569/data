import './App.scss'
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './Components/Card';


const apiKey = "c529772e41f0c2273b6fbadbf4eb2a0a&units=metric"
const cityName = "DELHI";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`

function App() {
    const [weather, setWeather] = useState("")

    useEffect(()=>{
        const fetchData = async (e)=>{
            const dataFromUrl = await axios(url)
            const impData = dataFromUrl.data.main
            setWeather(impData)
        }
        fetchData()
    },[])
    

  return (
   <div>
       <div className='Header'>
        <div className="logo">
            <TiWeatherPartlySunny />
            <h2>WeatherApp</h2>
            <div className='search'>
                <form action="" id='inputt' className="input-hide">
                    <input type='text' placeholder='Enter the Name of the City...'/>
                    <button type='submit'><FaSearch /></button>
                </form>
            </div>
        </div>
      </div>
      
       <Card  temp={weather.temp} hum={weather.humidity} pressure = {weather.pressure} max={weather.temp_max} min={weather.temp_min}/>
    
   </div>
  );
}

export default App;



