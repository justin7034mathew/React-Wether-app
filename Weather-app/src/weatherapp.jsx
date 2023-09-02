import React, { useState } from 'react'
import axios, { Axios } from 'axios'
import Mikyway_img from './images/milky-way-3602131_640.jpg'
import './weatherapp.css'

const Weatherapp = () => {

  const [ location , setLocation ] = useState("");
  const [data,setData] = useState("")

  const handleChange = () => {
    const Axios = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`).then((res) => {
      console.log(res.data.wind.deg)
      console.log(res.data);
      setData(res.data)
    })
  }
 
  return (
    <div className='wrapper'>
        <div className='weather-input'>
            <input type="text" onChange={(e) =>setLocation([e.target.value])} value={location} placeholder='Enter the location' />
            <button onClick={handleChange}>Search</button>
        </div>

        <div className='location'>
             {data.name ? <h1>Location : {data.name}</h1> : null}  
                <div className='degere'>
                    {data ? <h3>Degree : {data.wind.deg}°F</h3>: null} 
                    {data ? <h3>Description : {data.weather[0].description}</h3> : null } 
                </div>
        </div>
        
        <div className='climate'>
        <div className="climatedetail">
        {data ? <h4>longitude : {data.coord.lon}</h4> : null}
          {data ? <h4>latitude : {data.coord.lat}</h4> : null }
          {data ? <h4>Wind speed : {data.wind.speed}</h4> :null }
        </div>      
        </div>

    </div>
  )
}

export default Weatherapp;