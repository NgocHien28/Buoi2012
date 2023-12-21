import React, { useState } from "react";

export default function CountDown() {
    const [count, setCount] = useState(10);
    function handle_count_down() {
        setCount(count - 1);
    }
    return (
        <div>
            <button onClick={handle_count_down}>Count down</button>
            <p>Hãy cùng đếm ngược chào đón năm mới 2024: {count}</p>
        </div>
    );
}
