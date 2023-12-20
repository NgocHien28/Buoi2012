import React, { useState } from "react";

export default function CountUp() {
    const [count, setCount] = useState(6);
    function handle_count_up() {
        setCount(count + 1);
    }
    console.log("render count up");
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handle_count_up}>Count Up</button>
        </div>
    );
}
