import { createBrowserRouter } from "react-router-dom";
import { HomePage, LoginPage, NewsPage, UpdateNewsPage } from "./pages";
import StartPage from "./pages/StartPage/StartPage";

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <StartPage />,
      },
      {
        path: "/home",
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
      {
        path: "/update-news",
        element: <UpdateNewsPage />,
      },
    ],
  },
]);

export default router;
