import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
`;

export const Content = styled.main`
  flex: 1;
  padding-bottom: 60px;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 600px;
  height: 60px;
  background-color: #f8f9fa;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;
