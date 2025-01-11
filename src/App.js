import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { GlobalStyle } from "./styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
