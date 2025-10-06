import React from "react";
import Button from "../atoms/Button";

export default function Form({ onSubmit }) {
  return (
    <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <label>
        Name:
        <input type="text" name="name" required style={{ padding: "0.5rem", marginTop: "0.2rem" }} />
      </label>
      <label>
        Email:
        <input type="email" name="email" required style={{ padding: "0.5rem", marginTop: "0.2rem" }} />
      </label>
      <Button label="Submit" type="submit" />
    </form>
  );
}
