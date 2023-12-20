import React, { useState } from "react";

export default function Name() {
    const [name, setName] = useState("Nguyễn Văn Minh");
    function handle_name(e) {
        setName(e.target.value); //name=e.targer.value
    }
    const [tuoi, setTuoi] = useState("23");
    function handle_tuoi(e) {
        setTuoi(e.target.value); //name=e.targer.value
    }
    return (
        <div>
            <input type="text" value={name} onChange={handle_name} />
            <p>Name: {name}</p>

            <input type="text" value={tuoi} onChange={handle_tuoi} />
            <p>Name: {tuoi}</p>
        </div>
    );
}
