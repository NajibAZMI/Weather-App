import { createSlice } from "@reduxjs/toolkit"

const InitialState={
       clouds:undefined,
       main:{
               feels_like:undefined ,
               pressure: undefined,
               humidity:undefined
       },
       name:undefined,
       sys:{
                    country:undefined,
                    sunrise:undefined
       },
       weather:{
            icon:undefined
       },
       wind:{
             speed:undefined       
       },
       IsLoaded:false
}
const WeatherSlice=createSlice({
       name:"weather",    
       initialState:InitialState,
       reducers:{
             setData:(state,action)=>{
                  const {clouds,main,name,sys,weather,wind}=action.payload
                  state.clouds=clouds
                  state.main=main
                  state.name=name
                  state.sys=sys
                  state.weather=weather
                  state.wind=wind
                  state.IsLoaded=true

             } ,
             resetData:(state)=>{
                  state.IsLoaded=false
             }   
       }
})
export const {setData,resetData}=WeatherSlice.actions
export default WeatherSlice.reducer