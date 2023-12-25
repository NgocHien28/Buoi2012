import React, { useState } from "react";

export default function Object() {
    const [sv, setSv] = useState({ id: 1, name: "Lê Văn Mèo", age: 18 });
    const [age, setAge] = useState("");
    const [text, setText] = useState("");
    return (
        <div>
            <input
                type="text"
                placeholder="Nhập tên"
                value={text}
                onChange={(e) => setText(e.target.value)}
                // onKeyDown={(e) => {
                //     if (e.key == "Enter") {
                //         setSv({ ...sv, name: text });
                //     }
                // }}
            />
            <br />
            <input
                type="number"
                placeholder="Nhập tuổi"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key == "Enter") {
                        setSv({ ...sv, age: age, name: text });
                    }
                }}
            />
            <br />
            <p>
                Name: {sv.name}, Age: {sv.age}
            </p>
        </div>
    );
}
