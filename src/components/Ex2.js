import React, { useState } from "react";

export default function Ex2() {
    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [text, setText] = useState("");
    const [age, setAge] = useState("");
    const handle_keydown = (e) => {
        if ((e.key = "Enter")) {
            setName(text);
            setAge(new Date().getFullYear() - year);
        }
    };
    return (
        <div>
            <input
                type="text"
                value={text}
                placeholder="Input name"
                onChange={(e) => setText(e.target.value)}
                // onKeyDown={(e) => {
                //     if (e.key == "Enter") {
                //         setName(text);
                //     }
                // }}
            />
            <br />
            <input
                type="number"
                value={year}
                placeholder="Input birthday year"
                onChange={(e) => setYear(e.target.value)}
                onKeyDown={handle_keydown}
                // onKeyDown={(e) => {
                //     if (e.key == "Enter") {
                //         setAge(new Date().getFullYear() - year);
                //     }
                // }}
            />
            <br />
            <p>{name && "Name: " + name}</p>
            <p>{age && "Age: " + age}</p>
        </div>
    );
}
