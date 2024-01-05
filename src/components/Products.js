import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.get("https://65980bbc668d248edf23fe77.mockapi.io/list").then(function (res) {
            console.log(res);
            setList(res.data);
        });
    }, []);
    return (
        <div>
            {list &&
                list.map((item, index) => {
                    return (
                        <div>
                            <Link to={`/product/${item.id}`}>{item.name}</Link>
                        </div>
                    );
                })}
        </div>
    );
}
