import styled from "styled-components";

export const Gap = styled.div`
  height: ${props => props.$gap};
`

export const MyPage = styled.div`
  display: flex;
  flex-direction: column;
`
export const PageTitleWrapper = styled.div`
  width: 100%;
  height: 43px;
  
  padding: 8px 0;
  color: var(--gray-500)
  font-size: 18px;
  font-weight: 700;
  display: flex;
`

export const PageTitle = styled.p`
  align-content: center;
  padding: 0 0 0 25px;

  font-size: 18px;
  font-weight: 700;
`

export const Ellipse = styled.img`
  width: 8px;
  height: 8px;
  margin-left: 8px;
`

export const CardList = styled.div`
  display: flex;
  flex-direction: column;

  margin: 10px 0;

  gap: 16px;
`

export const CardBox = styled.div`
  position: relative;
`

