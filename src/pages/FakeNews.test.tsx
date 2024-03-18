import {
  describe,
  it,
  screen,
  expect,
  renderRoute,
  axe,
} from "../../test-setup/testUtils";

describe("Fake News Page", () => {
  it("contains first level header with a correct text", async () => {
    renderRoute("/");
    const header = screen.getByRole("heading", {
      level: 1,
      name: /Fake news/i,
    });
    expect(header).toBeInTheDocument();
  });

  it("should have no accessibility violations", async () => {
    const { container } = renderRoute("/");
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
