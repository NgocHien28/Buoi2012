import axios from "axios";
import React, { useEffect, useState } from "react";
import CurrentDate from "./CurrentDate";

export default function Weather1() {
    const apiKey = "0b2253d0388c32cba29b813ec4077bc1";
    const [data, setData] = useState(null);
    const [text, setText] = useState("Ha Noi");
    const [error, setError] = useState("");
    const [temperature, setTemperature] = useState("");

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=${apiKey}`;
    const getData = () => {
        axios
            .get(url)
            .then(function (res) {
                setData(res.data);
                setTemperature(res.data.main.temp);
            })
            .catch((error) => {
                if (error.response.status == "404") {
                    setError("Invalid city name");
                    setData(null);
                }
            });
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <div className="weather-bar">
            <div className="topbar">
                <input
                    type="text"
                    value={text}
                    placeholder="Enter Location"
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key == "Enter" && text) {
                            getData();
                            setText("");
                        }
                    }}
                />
                <div className="search">
                    <i className="fa-brands fa-searchengin"></i>
                </div>
            </div>

            <div className="content">
                <h1 className="title">{text}</h1>
                <div className="bottom">
                    <div className="left">
                        <div className="top">
                            <div>
                                <i className="fa-solid fa-location-pin"></i>
                                <span>{text}</span>
                            </div>
                            <div className="time">
                                <i className="fa-solid fa-calendar"></i>
                                <CurrentDate />
                            </div>
                        </div>
                        <div className="center">
                            <div>
                                {temperature}&deg;C | {(temperature * 9) / 5 + 32 * 1}&deg;F
                            </div>
                        </div>
                        <div>
                            {error && <h3>{error}</h3>}
                            {data && (
                                <div>
                                    <h3>{data.weather[0].description}</h3>
                                    <p>City: {data.name}</p>
                                    <p>Temp: {data.main.temp}</p>
                                    <p>Country: {data.sys.country}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="right">
                        <img className="image" src={`http://openweathermap.org/img/w/${data && data.weather[0].icon}.png`} />
                    </div>
                </div>
            </div>
        </div>
    );
}
