import React, { useState } from "react";

export default function CurrentDate() {
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <p>DayTime | {date.toDateString()}</p>
        </div>
    );
}
