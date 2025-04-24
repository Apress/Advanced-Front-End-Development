import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest-axe/extend-expect";
import { axe } from "jest-axe";
import AccessibleForm from "./AccessibleForm";

describe("AccessibleForm Accessibility Tests", () => {
  // ✅ Test 1: Ensure no accessibility violations
  it("should have no accessibility violations", async () => {
    const { container } = render(<AccessibleForm />);
    const results = await axe(container);
    expect(results).toHaveNoViolations(); // ✅ FIXED
  });

  // ✅ Test 2: Ensure all form elements are accessible
  it("should have properly labeled input fields", () => {
    render(<AccessibleForm />);
    const usernameLabel = screen.getByLabelText("Username");
    const passwordLabel = screen.getByLabelText("Password");

    expect(usernameLabel).toBeInTheDocument(); // ✅ FIXED
    expect(passwordLabel).toBeInTheDocument(); // ✅ FIXED
  });

  // ✅ Test 3: Ensure focus starts on the username input field
  it("should focus on the username input when the form loads", () => {
    render(<AccessibleForm />);
    const usernameInput = screen.getByLabelText("Username");

    expect(usernameInput).toHaveFocus(); // ✅ FIXED
  });
});
