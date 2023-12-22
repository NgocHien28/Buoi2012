import React, { useState } from "react";

export default function Tinhtuoi() {
    const [name, setName] = useState("");
    const [birthday, setBirthday] = useState("");
    const [age, setAge] = useState("");
    const [text, setText] = useState("");

    function handle_name(e) {
        setName(e.target.value);
    }
    function handle_birthday(e) {
        setBirthday(e.target.value);
    }
    return (
        <div>
            {/* <input type="text" value={name} onChange={handle_name} placeholder="Nhập tên" />
             */}
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Nhập tên"
                onKeyDown={(e) => {
                    if (e.key == "Enter") {
                        setName(text);
                    }
                }}
            />
            <br />

            <input
                type="number"
                value={birthday}
                onChange={handle_birthday}
                placeholder="Nhập năm sinh"
                onKeyDown={(e) => {
                    if (e.key == "Enter") {
                        setAge(new Date().getFullYear() - birthday);
                    }
                }}
            />
            <br />
            <p>Hãy xác nhận thông tin</p>
            <p>{name && "Name: " + name}</p>
            <p>{age && "Tuoi: " + age}</p>
        </div>
    );
}
