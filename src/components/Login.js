import React, { useEffect, useState } from "react";

export default function Login() {
    const [account, setAccount] = useState({ id: 1, username: "Le Minh Anh", password: "123456" });
    const [text, setText] = useState("");
    const [pass, setPass] = useState("");
    useEffect(() => {
        let x = JSON.parse(localStorage.getItem("account"));
        setAccount(x);
    }, []);
    function handle_save() {
        setAccount({ ...account, username: text, password: pass });
        localStorage.setItem("account", JSON.stringify({ ...account, username: text, password: pass }));
    }
    return (
        <div>
            <h1>Nguoi dang nhap: {account.username}</h1>
            <input
                type="text"
                placeholder="Nhap username"
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                }}
            />
            <br />
            <input
                type="password"
                placeholder="Nhap pass"
                value={pass}
                onChange={(e) => {
                    setPass(e.target.value);
                }}
            />
            <br />
            <input type="submit" value="Login" onClick={handle_save} />
        </div>
    );
}
