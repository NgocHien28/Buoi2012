import React, { useState } from "react";

export default function Account() {
    const [info, setInfo] = useState({ id: 1, username: "Lê Văn Hải", password: 12345678 });
    const [text, setText] = useState("");
    const [pass, setPass] = useState("");
    function handle_loading() {
        let x = localStorage.getItem("user_info");
        x = JSON.parse(x);
        console.log(x);
        setInfo({ ...info, username: x.username, password: x.password });
    }
    return (
        <div>
            <button onClick={handle_loading}>Load page</button>
            <p>Hãy nhập thông tin như sau:</p>
            <input
                type="text"
                placeholder="Nhập username"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key == "Enter") {
                        setInfo({ ...info, username: text });
                    }
                }}
            />
            <br />
            <input
                type="number"
                placeholder="Nhập password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key == "Enter") {
                        setInfo({ ...info, password: pass });
                        localStorage.setItem("user_info", JSON.stringify({ ...info, password: pass }));
                    }
                }}
            />
            <br />
            <p>
                Username: {info.username}, Password: {info.password}
            </p>
        </div>
    );
}
