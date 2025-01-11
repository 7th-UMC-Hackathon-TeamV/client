import styled from "styled-components";

export const NewsCard = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const CardContainer = styled.div`
  position: relative;
  width: 85%;
  height: 160px;
  border-radius: 8px;
  display: flex;
  justify-content: flex-start;
  padding: 8px;
  background: #dfdfdf;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  cursor: pointer; 

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4); /* 배경을 어둡게 하는 반투명 오버레이 */
    border-radius: 8px;
    z-index: 1;
  }

  /* 내부 요소들이 오버레이 위로 보이도록 설정 */
  * {
    position: relative;
    z-index: 2;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  width: 70%;
  height: 18%;
  position: absolute;
  left: 20px;
  bottom: 20px;
`;

export const Type = styled.div`
  background: ${({ type }) => (type === "True" ? "#E22c2f" : "#18309F")};
  width: 18px;
  height: 100%;
  margin-right: 15px;
`;

export const TitleBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Title = styled.p`
  color: white;
  font-size: 22px;
  font-weight: 800;
  margin-top: 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const XButton = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 10px;
  right: 10px;
`