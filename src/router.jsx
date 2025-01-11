import { createBrowserRouter, Navigate } from "react-router-dom";
import { HomePage, LoginPage, NewsPage, UpdateNewsPage, MyPage, StartPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage />,
  },
  {
    path: ":groupKey",
    element: <HomePage />,
  },
  {
    path: "login",
    children: [
      {
        path: ":groupKey",
        element: <LoginPage />,    
      }
    ]
  },
  {
    path: "news",
    children: [
      {
        path: ":groupKey",
        children: [
          {
            path: ":newsId",
            element: <NewsPage />,
          },
        ],
      }
    ]
  },
  {
    path: "update-news",
    children: [
      {
        path: ":groupKey",
        element: <UpdateNewsPage />,        
      }
    ]
  },
  {
    path: "mypage",
    children: [
      {
        path: ":groupKey",
        element: <MyPage />,
      }
    ]
  },
]);

export default router;
