import React, { useState } from "react";

export default function Ex1() {
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [year, setYear] = useState("");
    const [age, setAge] = useState("");
    return (
        <div>
            <input
                type="text"
                value={text}
                placeholder="Please input name"
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key == "Enter") {
                        setName(text);
                    }
                }}
            />
            <br />
            <input
                type="number"
                value={year}
                placeholder="Input your birthday year"
                onChange={(e) => setYear(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key == "Enter") {
                        setAge(new Date().getFullYear() - year);
                    }
                }}
            />
            <br />
            <p>{name && "Name: " + name}</p>
            <p>{age && "Age: " + age}</p>
        </div>
    );
}

// import React, { useState } from "react";

// export default function Ex1() {
//     const [name, setName] = useState("");
//     const [year, setYear] = useState("");
//     const [age, setAge] = useState("");
//     const [text, setText] = useState("");
//     const handle_keydown = (e) => {
//         if (e.key == "Enter") {
//             setAge(new Date().getFullYear() - year);
//             setName(text);
//         }
//     };

//     return (
//         <div>
//             <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Nhập tên" />
//             <br />
//             <input type="number" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Nhập năm sinh" onKeyDown={handle_keydown} />
//             <br />
//             <p>{name && "Name: " + name}</p>
//             <p>{age && "Age: " + age} </p>
//         </div>
//     );
// }
