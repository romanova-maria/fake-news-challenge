import { http, HttpResponse } from "msw";

import { news } from "./mocks/news";
export const handlers = [
  http.get("/", () => {
    return HttpResponse.json(news);
  }),
];
