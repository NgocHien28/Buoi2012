import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Weather() {
    const apiKey = "e0ddc538b3415427caeb7901218a30dd";
    const [text, setText] = useState("Sa Pa");
    const [data, setData] = useState(null);
    const [error, setError] = useState("");

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=${apiKey}`;
    const getData = () => {
        axios
            .get(url)
            .then(function (res) {
                setData(res.data);
                console.log(res);
            })
            .catch((error) => {
                if (error.response.status == "404") {
                    setError("City not found! Please enter a valid city name.");
                    setData(null);
                }
            });
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Nhap ten thanh pho"
                onKeyDown={(e) => {
                    if (e.key == "Enter" && text) {
                        getData();
                        setText("");
                    }
                }}
            />
            {error && <h1>{error}</h1>}
            {data && (
                <div>
                    <h1>Temp {data.main.temp}</h1>
                    <h1>City {data.name}</h1>
                    <h1>Country {data.sys.country}</h1>
                    <h1>Weather {data.weather[0].description}</h1>
                    <img src={`http://openweathermap.org/img/w/${data && data.weather[0].icon}.png`} />
                </div>
            )}
        </div>
    );
}
