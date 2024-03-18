import { PropsWithChildren, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import primaryTheme from "../src/styles/themes/primaryTheme";
import { expect } from "vitest";
import * as matchers from "@testing-library/jest-dom/matchers";
import { toHaveNoViolations } from "jest-axe";
import { routesConfig } from "../src/router";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

const AllTheProviders = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={primaryTheme}>
      <RouterProvider router={createMemoryRouter(routesConfig)} />
      {children}
    </ThemeProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: AllTheProviders, ...options });

const renderRoute = (route = "/") => {
  return render(
    <ThemeProvider theme={primaryTheme}>
      <RouterProvider
        router={createMemoryRouter(routesConfig, {
          initialEntries: [{ pathname: route }],
        })}
      />
    </ThemeProvider>,
  );
};

expect.extend(matchers);
expect.extend(toHaveNoViolations); // to check a11y issues

export * from "vitest";
export * from "@testing-library/react";
export * from "jest-axe";
export { customRender as render, renderRoute, expect };
export * from "@testing-library/user-event";
