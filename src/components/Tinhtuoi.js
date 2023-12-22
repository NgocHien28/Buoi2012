import React, { useState } from "react";

export default function Tinhtuoi() {
    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [age, setAge] = useState("");
    const [text, setText] = useState("");

    // function nhan(x, y) {
    //     return x * y;
    // }
    // //arrow function ES6
    // const nhan = (x, y) => {
    //     return x * y;
    // };

    const q1 = ["Jan", "Feb", "Mar"];
    const q2 = ["Jan", "Feb", "Mar"];
    const q3 = ["Jan", "Feb", "Mar"];
    const q4 = ["Jan", "Feb", "Mar"];
    const o1 = { name: "Meo", age: 3 };
    const o2 = { name: "Ga", age: 4 };
    const list = [...q1, ...q2, ...q3, ...q4];
    const newObject = { ...o1, ...o2 };
    console.log(list);
    console.log(newObject);
    console.log({ id: 4, name: "Meo", age: 3, name: "Ga", age: 4, sex: "male" });
    //arrow function
    const handle_keydown = (e) => {
        if (e.key == "Enter") {
            setAge(new Date().getFullYear() - year);
            setName(text);
        }
    };
    return (
        <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Nhập tên" />
            <br />
            <input type="number" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Nhập năm sinh" onKeyDown={handle_keydown} />

            <br />
            <p>Hãy xác nhận thông tin</p>
            <p>{name && "Name: " + name}</p>
            <p>{age && "Tuoi: " + age}</p>
        </div>
    );
}
