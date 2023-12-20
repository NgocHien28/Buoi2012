import React, { useState } from "react";

export default function Count() {
    const [count, setCount] = useState(6);
    function handle_count_down() {
        setCount(count - 1); //count=count-1
    }
    console.log("render count down");
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handle_count_down}>Count Down</button>
        </div>
    );
}
