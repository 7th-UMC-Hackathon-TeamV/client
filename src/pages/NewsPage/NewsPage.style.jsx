import styled from "styled-components";

export const NewsPage = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 16px;
`;

export const Back = styled.img`
  position: absolute;
  top: 24px;
  left: 16px;
`

export const NewsContents = styled.div`
  width: 100%; 
  margin-top: 80px;
`

export const Badge = styled.div`
  width: 59px;
  height: 34px;

  border-radius: 8px;
  background-color: var(--gray-500);
  color: var(--gray-100);

  font-size: var(--font-caption-13)
  font-weight: 700;

  text-align: center;
  align-content: center;
`

export const NewsTitle = styled.p`
  font-size: var(--font-title-16);
  font-weight: 700;
  height: 24px;

  margin-top: 16px;
  color: ${props => props.$color};
`

export const NewsImage = styled.img`
  height: 160px;
  margin-top: 16px;
`

export const NewsDetail = styled.div`
  margin-top: 16px;
  padding: 8px;
  font-size: var(--font-body-14);
  color: var(--gray-500);
`

export const LikeWrapper = styled.div`
  margin-top: 16px;
  align-items: center;
  display: flex;
  height: 24px;
  gap: 8px;
`

export const LikeButton = styled.div`
`

export const LikeIcon = styled.img` 
  width: 24px;
  height: 24px;
`

export const LikeCount = styled.div`
  font-size: var(--font-caption-13);
  font-weight: 700;
`