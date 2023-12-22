import React, { useState } from "react";

export default function Tinhtuoi() {
    const [name, setName] = useState("Nguyễn Minh Nhân");
    const [birthday, setBirthday] = useState("1990");
    var CurrentYear = new Date().getFullYear();
    function handle_name(e) {
        setName(e.target.value);
    }
    function handle_birthday(e) {
        setBirthday(e.target.value);
    }
    return (
        <div>
            <labe>Nhập tên: </labe>
            <input type="text" value={name} onChange={handle_name} />
            <br />
            <label>Nhập năm sinh: </label>
            <input type="number" value={birthday} onChange={handle_birthday} />
            <br />
            <p>{name}</p>
            <p>Tuoi: {CurrentYear - birthday}</p>
        </div>
    );
}
