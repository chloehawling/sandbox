import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

test("renders navbar with brand text", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const brand = screen.getByText(/Happy Tails/i);
  expect(brand).toBeInTheDocument();
});

test("renders home hero headline", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Find Your New Best Friend/i)).toBeInTheDocument();
});

test("renders Adopt link", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Adopt/i)).toBeInTheDocument();
});

test("renders 404 page for unknown route", () => {
  render(
    <MemoryRouter initialEntries={["/random"]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/404/i)).toBeInTheDocument();
});