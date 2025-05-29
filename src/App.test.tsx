import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders a unicorn emoji", () => {
  render(<App />);
  const unicorn = screen.getByLabelText(/unicorn/i);
  expect(unicorn).toBeInTheDocument();
});