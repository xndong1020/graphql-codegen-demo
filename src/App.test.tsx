import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders content", () => {
  render(<App />);
  const linkElement = screen.getByText(/content/i);
  expect(linkElement).toBeInTheDocument();
});
