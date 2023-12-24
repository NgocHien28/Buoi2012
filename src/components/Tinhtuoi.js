import React, { useState } from "react";

export default function Tinhtuoi() {
    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [age, setAge] = useState("");
    const [text, setText] = useState("");

    //arrow function
    const handle_keydown = (e) => {
        if (e.key == "Enter") {
            setAge(new Date().getFullYear() - year);
            setName(text);
        }
    };
    // return (
    //     <div>
    //         <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Nhập tên" />
    //         <br />
    //         <input type="number" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Nhập năm sinh" onKeyDown={handle_keydown} />
    //         <br />
    //         <p>Hãy xác nhận thông tin</p>
    //         <p>{name && "Name: " + name}</p>
    //         <p>{age && "Tuoi: " + age}</p>
    //     </div>
    // );
    return (
        <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Nhập tên" onKeyDown={handle_keydown} />
            <br />
            <input type="number" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Nhập năm sinh" onKeyDown={handle_keydown} />
            <br />
            <p>{name && "Name: " + name}</p>
            <p>{age && "Tuoi: " + age}</p>
        </div>
    );
}
