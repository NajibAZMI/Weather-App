import { Button, Form } from "react-bootstrap"
import styles from "./SearchBar.module.scss"
import { Autocomplete, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { setData , resetData} from "../../features/weather/WeatherSlice"
import { Switch} from "@mui/material"
export const SearchBar=()=> {
  const GEOAPIKEY=process.env.REACT_APP_GEO_API_KEY
  const WEATHERKEY=process.env.REACT_APP_WEATHER_KEY
  const dispatch=useDispatch()
  const [cities,SetCities]=useState([])
  const [Unity,setUnity]=useState('metric')
  
 
  
  const handleInput=(e)=>{
    const {value}=e.currentTarget
    fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${value}&type=city&format=json&apiKey=${GEOAPIKEY}`)
    .then(response => response.json())
    .then(result => SetCities(result.results.map(data=>{
      const {lat,lon,city,country,formatted}=data
      return {lat,lon,city,country,formatted}}
      )))
    
  }

  const handleAutoCompleteSelect=(e,value)=>{
      if(value !== null){
          const {lon,lat}=value
          fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&units=${Unity}&lon=${lon}&appid=${WEATHERKEY}`)
         .then(response => response.json())
         .then(json => {
              const {clouds,main,name,sys,weather,wind}=json
              dispatch(setData({clouds,main,name,sys,weather,wind}))
          }
        )
      }
      else{
           dispatch(resetData())
      }
  }
  return (
   <>
   <Form >
    <Switch/>
         <Form.Group className={styles.searchContainer}> 
          <Autocomplete className={styles.searchInput}  size={'lg'} 
                   clearOnBlur={false}
                   onChange={handleAutoCompleteSelect}
                   getOptionLabel={(option)=> option.formatted }
                   renderInput={(params)=>
                   <TextField  onChange={handleInput}  {...params} label={'Enter your City ....'}/>} 
                   options={cities}/> 
          
              <Button className={styles.searchButton} variant="primary" >Search</Button>   
        </Form.Group>              
   </Form>
   </>
  )
}

