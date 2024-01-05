import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/object">Object</Link>
                </li>
                <li>
                    <Link to="/footer">Footer</Link>
                </li>
                <li>
                    <Link to="/reactstr">Reactstrap</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </div>
    );
}
