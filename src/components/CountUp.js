import React, { useState } from "react";

export default function CountUp() {
    const [count, setCount] = useState(0);
    function handle_count_up() {
        setCount(count + 1);
    }
    return (
        <div>
            <button onClick={handle_count_up}>Count up</button>
            <p>Hãy cùng đếm: {count}</p>
        </div>
    );
}
