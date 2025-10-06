import React from "react";
import Card from "../components/organisms/Card";
import Form from "../components/molecules/Form";

export default function Home() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    alert(`Hello ${name}, form submitted!`);
  };

  const handleCardClick = () => {
    alert("Card clicked!");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Home Screen</h1>
      <Form onSubmit={handleFormSubmit} />

      <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
        <Card
          title="Product A"
          description="This is product A."
          imageUrl="https://picsum.photos/200/150?random=1"
          onButtonClick={handleCardClick}
        />
        <Card
          title="Product B"
          description="This is product B."
          imageUrl="https://picsum.photos/200/150?random=2"
          onButtonClick={handleCardClick}
        />
      </div>
    </div>
  );
}
