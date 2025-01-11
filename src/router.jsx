import { createBrowserRouter } from "react-router-dom";
import { HomePage, LoginPage, NewsPage, UpdateNewsPage, MyPage } from "./pages";

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
      {
        path: "/update-news",
        element: <UpdateNewsPage />,
      },
      {
        path: "/mypage",
        element: <MyPage />,
      },
    ],
  },
]);

export default router;
