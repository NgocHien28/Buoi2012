import React, { useState } from "react";

export default function Name() {
    const [name, setName] = useState("Nguyễn Văn A");
    const [age, setAge] = useState("23");
    function handle_name(e) {
        setName(e.target.value);
    }
    function handle_age(e) {
        setAge(e.target.value);
    }
    return (
        <div>
            <h4>Hãy nhập những thông tin sau:</h4>
            <input type="text" value={name} onChange={handle_name} />
            <br />
            <input type="number" value={age} onChange={handle_age} />
            <h4>Xác nhận lại thông tin của bạn:</h4>
            <p>Họ và tên: {name}</p>
            <p>Tuổi: {age}</p>
        </div>
    );
}

// import React, { useState } from "react";

// export default function Name() {
//     const [name, setName] = useState("Nguyễn Văn Minh");
//     function handle_name(e) {
//         setName(e.target.value); //name=e.targer.value
//     }
//     const [tuoi, setTuoi] = useState("23");
//     function handle_tuoi(e) {
//         setTuoi(e.target.value); //name=e.targer.value
//     }
//     return (
//         <div>
//             <input type="text" value={name} onChange={handle_name} />
//             <p>Name: {name}</p>

//             <input type="text" value={tuoi} onChange={handle_tuoi} />
//             <p>Name: {tuoi}</p>
//         </div>
//     );
// }
