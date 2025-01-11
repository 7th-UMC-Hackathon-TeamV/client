// StartPage.style.js
import styled from "styled-components";

export const StartPage = styled.div`
  padding: 20px;
`;

export const ButtonContainer = styled.div`
  position: fixed;
  bottom: 40px;
  left: 50%;
  width: 450px;
  height: 50px;
  transform: translateX(-50%);
  border-radius: 15px;
  background: var(--gray-500);
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 100%;
    height: 100%;
    color: white;
    font-weight: 800;
    font-size: 16px;
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export const ContentWrapper = styled.div`
  position: absolute;
  top: 16vh;
  left: 4vw;
  display: flex;
  white-space: pre-wrap;
  font-weight: 800;
  font-size: 25px;
  line-height: 1.4;
`;

