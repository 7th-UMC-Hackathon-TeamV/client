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
    --gray-100: #ffffff;
    --gray-200: #f5f5f5;
    --gray-300: #d9d9d9;
    --gray-400: #a8a8a8;
    --gray-500: #222222;

    /* Font Sizes */
    --font-title-20: 20px;
    --font-title-18: 18px;
    --font-title-16: 16px;
    --font-title-14: 14px;

    --font-body-16: 16px;
    --font-body-14: 14px;

    --font-caption-13: 13px;
    --font-caption-13: 13px;
  }
`;
