import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the web page heading", () => {
  render(<App />);
  const heading = screen.getByText(/Welcome to Your New Web Page!/i);
  expect(heading).toBeInTheDocument();
});