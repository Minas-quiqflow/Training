import React from "react";
import Card from "../components/organisms/Card";

export default function About() {
  const handleCardClick = () => {
    alert("About page card clicked!");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>About Screen</h1>

      <Card
        title="About Product"
        description="This card is reused on another screen."
        imageUrl="https://picsum.photos/200/150?random=3"
        onButtonClick={handleCardClick}
      />
    </div>
  );
}
