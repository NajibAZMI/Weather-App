import React from "react";
import { Card } from "react-bootstrap";
import styles from "./Weather.module.scss";
import DefaultWeather from "../Svgs/DefaultWeather";
import Thermometer from "../Svgs/Thermometer";
import Wind from "../Svgs/Wind";
import Humidity from "../Svgs/Humidity";
import SpeedoMeter from "../Svgs/SpeedoMeter";
import { TfiTime } from "react-icons/tfi";
import { useSelector } from "react-redux";
import Moment from "react-moment";

export const Weather = () => {
  const weather = useSelector((state) => state.Weather);
  const DisplayIcon=()=>{
   return weather.weather[0].icon
  }
  console.log(weather);
  return (
    <>
    <Card className={styles.container}>
       {weather.IsLoaded ? 
        <Card.Body>
        <Card.Title>
          {weather.name} , {weather.sys.country}
          <div className={styles.date}>
            <span><Moment  format={'llll'}></Moment></span>
            <span>
              <TfiTime size={20} />
            </span>
          </div>
        </Card.Title>
        
        <Card.Text as={"div"} className={styles.wheather_infos}>
          <div>
           <img src={`https://openweathermap.org/img/wn/${DisplayIcon()}@2x.png`} alt="Icon" />
          </div>
          <div className={styles.temperature}>
            <span>{weather.main.feels_like}°C</span>
            <span>
              <Thermometer />
            </span>
          </div>
          <div>
            Good Morning {weather.name}
            <div className={styles.separator}></div>
          </div>

          <div className={styles.infos}>
            <div className={styles.border_right}>
              <div>
                <DefaultWeather
                  color={"#fff"}
                  width={"25px"}
                  height={"25px"}
                />
              </div>
              <div>Sunrise</div>
              <div>
                <Moment unix={true} format={"hh:mm"}>
                  {weather.sys.sunrise}
                </Moment>
              </div>
            </div>
            <div className={styles.border_right}>
              <div>
                <Wind />
              </div>
              <div>Wind</div>
              <div>{weather.wind.speed} m/s</div>
            </div>
            <div className={styles.border_right}>
              <div>
                <Humidity />
              </div>
              <div>humidity</div>
              <div>{weather.main.humidity} %</div>
            </div>
            <div className={styles.border_right}>
              <div>
                <SpeedoMeter />
              </div>
              <div>pressure</div>
              <div>{weather.main.pressure} hPa</div>
            </div>
            <div>
              <div>
                <Thermometer color={"#fff"} width={"25px"} height={"25px"} />
              </div>
              <div>Temp</div>
              <div>{weather.main.feels_like}°C</div>
            </div>
          </div>
        </Card.Text>
      </Card.Body>
      :
       <Card.Body>
             <Card.Title>Please Choose Your City </Card.Title>
       </Card.Body>}
      </Card>
    </>
  );
};
