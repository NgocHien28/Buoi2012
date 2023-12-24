import React from "react";

export default function ES6sample() {
    const q1 = ["January", "February", "March"];
    const q2 = ["April", "May", "June"];
    const q3 = ["July", "August", "September"];
    const q4 = ["October", "November", "December"];
    const list = [...q1, ...q2, ...q3, ...q4];
    console.log(list);
    console.log({ id: 4, name: "meo", age: 3, id: 5, name: "ga" });
    return <div>{list}</div>;
}

// import React from "react";

// export default function ES6sample() {
//     const q1 = ["Jan ", "Feb ", "Mar "];
//     const q2 = ["Apr ", "May ", "Jun "];
//     const q3 = ["Jul ", "Aug ", "Sep "];
//     const q4 = ["Oct ", "Nov ", "Dec"];
//     const o1 = { name: "Meo", age: 3 };
//     const o2 = { name: "Ga", age: 4 };
//     const list = [...q1, ...q2, ...q3, ...q4];
//     const newObject = { ...o1, ...o2 };
//     console.log(list);
//     console.log(newObject);
//     console.log({ id: 4, name: "Meo", age: 3, name: "Ga", age: 4, sex: "male" });
//     return <div>{list}</div>;
// }

// function nhan(x, y) {
//     return x * y;
// }
// //arrow function ES6
// const nhan = (x, y) => {
//     return x * y;
// };
