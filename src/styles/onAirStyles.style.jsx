import { css } from "styled-components";

export const onAirStyles = css`
  * {
    font-family: Pretendard;
  }

  html {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    scroll-behavior: smooth;
  }

  body {
    height: 100%;
    -ms-overflow-style: none;
    overflow-x: hidden;
  }
  ::-webkit-scrollbar {
    display: none;
  }

  button,
  a {
    cursor: pointer;
  }

  button {
    padding: 0;
    border: none;
    background-color: transparent;
  }

  a {
    text-decoration: none;
    -webkit-user-drag: none;
  }

  button,
  input,
  textarea,
  select,
  meter,
  progress {
    /* appearance: none; */
  }

  b {
    font-weight: 700;
  }

  #root {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    overscroll-behavior-y: contain;

    .box {
      -ms-overflow-style: none;
    }
    .box::-webkit-scrollbar {
      display: none;
    }
  }

  :root {
    /* Gray Color */
    --gray-100: #FFFFFF;
    --gray-200: #F5F5F5;
    --gray-300: #D9D9D9;
    --gray-400: #A8A8A8;
    --gray-500: #222222;
    
  }
`;
