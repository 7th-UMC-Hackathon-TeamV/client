import { createBrowserRouter } from "react-router-dom";
import { HomePage, LoginPage, NewsPage } from "./pages";

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/news",
        element: <NewsPage />,
      },
    ],
  },
]);

export default router;
