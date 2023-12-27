import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ApiStudent() {
    const [list, setList] = useState([]);

    let url = "https://658c2935859b3491d3f59bd2.mockapi.io/list";
    useEffect(() => {
        axios
            .get(url)
            .then(function (res) {
                console.log(res.data);
                setList(res.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    return (
        <div>
            {list.map((item, index) => (
                <div key={index}>
                    {item.id},{item.name}
                </div>
            ))}
        </div>
    );
}
