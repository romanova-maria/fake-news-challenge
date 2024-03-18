import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import { FakeNews } from "./pages";
import { Layout } from "./layouts";
import ArticleDetailedView from "./features/FakeNews/ArticleDetailedView";
import { FakeNewsList } from "./features/FakeNews";

export const routesConfig: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      { path: "*", element: <Navigate to="/" /> },
      {
        path: "/",
        element: <FakeNews />,
        children: [
          {
            index: true,
            element: <FakeNewsList />,
          },
          {
            path: "/news/:newsId",
            element: <ArticleDetailedView />,
          },
        ],
      },
    ],
  },
];

export const router = createBrowserRouter(routesConfig);

export { Outlet, useLoaderData } from "react-router-dom";
