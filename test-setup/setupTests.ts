import { afterEach, afterAll, beforeAll, beforeEach } from "vitest";
import { cleanup } from "@testing-library/react";
import { mockServer } from "./mockServer";
import { handlers } from "./handlers";

beforeAll(() => {
  mockServer.listen({ onUnhandledRequest: "error" });
});

beforeEach(() => {
  mockServer.use(...handlers);
});

afterEach(() => {
  cleanup();
  mockServer.resetHandlers();
});

afterAll(() => {
  mockServer.close();
});
