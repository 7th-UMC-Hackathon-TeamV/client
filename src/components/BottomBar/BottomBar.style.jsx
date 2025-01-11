import styled from "styled-components";

export const BottomBar = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const ContentWrapper = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  gap: 4px;
`;

export const ContentIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const ContentText = styled.p`
  font-size: 13px;
`;
