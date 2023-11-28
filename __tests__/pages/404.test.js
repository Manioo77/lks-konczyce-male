import { render, screen } from "@testing-library/react";
import NotFoundPage from "../../pages/404";

describe("404 not found page", () => {
  it("renders a not found page ", () => {
    render(<NotFoundPage />);

    const heading = screen.getByRole("heading", {
      name: /uppps! Strona nie istnieje/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
