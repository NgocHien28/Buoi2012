// import axios from "axios";
// import React, { useEffect, useState } from "react";

// export default function ApiStudent() {
//     const [list, setList] = useState([]);
//     let url = "https://658d92597c48dce947396bce.mockapi.io/list";
//     useEffect(() => {
//         axios.get(url).then(function (res) {
//             console.log(res.data);
//         });
//     }, []);
//     return <div>ApiStudent</div>;
// }

import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ApiStudent() {
    const [list, setList] = useState([]);
    let url = "https://658d92597c48dce947396bce.mockapi.io/list";
    useEffect(() => {
        axios
            .get(url)
            .then(function (res) {
                console.log(res.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    return (
        <div>
            {list.map((item, index) => (
                <div key={index}>
                    {item.id},{item.name},{item.age}
                </div>
            ))}
        </div>
    );
}
