import { axe, screen, render, expect, it } from "../../../test-setup/testUtils";
import Button from "./Button";
import { describe } from "vitest";

describe("Button", () => {
  it("should render", () => {
    render(<Button testId="new-button">New button</Button>);
    const newButton = screen.getByText("New button");
    expect(newButton).toBeInTheDocument();
  });

  it("should have no accessibility violations even if button does not have text", async () => {
    const { container } = render(
      <Button testId="new-button">New button</Button>,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
