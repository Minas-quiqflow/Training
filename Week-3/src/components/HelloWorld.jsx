// src/HelloWorld.jsx
import React from "react";

function HelloWorld({ name }) {
  return (
    <div style={{ padding: "1rem", fontFamily: "Arial" }}>
      <h1>Hello, {name}!</h1>
      <p>This is a reusable HelloWorld component.</p>
    </div>
  );
}

export default HelloWorld;
