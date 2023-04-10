import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App level test", () => {
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText("Expense", { exact: false });
    expect(linkElement).toBeInTheDocument();
  });
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText("logout", { exact: false });
    expect(linkElement).toBeInTheDocument();
  });
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText("Login", { exact: false });
    expect(linkElement).toBeInTheDocument();
  });
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/password/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText("reenter", { exact: false });
    expect(linkElement).toBeInTheDocument();
  });
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/cart/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/forgot/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/total/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/amount/i);
    expect(linkElement).toBeInTheDocument();
  });
});
