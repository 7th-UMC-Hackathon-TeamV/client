import styled from "styled-components";

export const BottomBar = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 82px;
`;

export const ContentWrapper = styled.button`
  display: flex;
  width: 105px;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  gap: 4px;
  color: ${props => props.$color || `var(--gray-400)`};
`;

export const ContentIcon = styled.img`
  width: 18px;
  height: 18px;
`;

export const ContentText = styled.p`
  font-size: 13px;
`;
