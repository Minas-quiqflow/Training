import React from "react";
import Button from "../atoms/Button";

export default function Card({ title, description, imageUrl, onButtonClick }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "1rem",
        width: "250px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <img src={imageUrl} alt={title} style={{ width: "100%", borderRadius: "5px" }} />
      <h3>{title}</h3>
      <p>{description}</p>
      <Button label="Learn More" onClick={onButtonClick} />
    </div>
  );
}
