import React from "react";
import "../styles/Logo.css";

export const Logo = () => {
    return (
        <div className="Logo">
        <h2>Book</h2>
        <img
            width="40"
            height="40"
            src="https://img.icons8.com/color/100/books.png"
            alt="books"
        />
        <h2>Surf</h2>
        </div>
    );
}