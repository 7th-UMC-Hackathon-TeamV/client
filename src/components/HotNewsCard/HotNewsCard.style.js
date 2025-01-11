import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  /* height: 300px; */
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HotCardContainer = styled.div`
  width: 85%;
  height: 300px;
  background: #dfdfdf;
  border-radius: 8px;
  display: flex;
  justify-content: flex-start;
  position: relative;
  /* margin-top: 50px; */
`;

export const HotIcon = styled.div`
  display: flex;
  justify-content: left;
  margin-top: 6px;
  padding-left: 14px;
  width: 80px;
  height: 35px;
  border-radius: 20px;
  background: #222222;
  position: absolute;
  top: 10px;
  left: 20px;
`;

export const HOTLabel = styled.p`
  color: white;
  font-size: 22px;
  font-weight: 1000;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

export const HotTitleWrapper = styled.div`
  display: flex;
  width: 70%;
  height: 18%;
  position: absolute;
  left: 20px;
  bottom: 20px;
`;

export const HotTitleBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const HotTitle = styled.p`
  color: white;
  font-size: 24px;
  font-weight: 800;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const HotType = styled.div`
  background: ${({ type }) => (type === "True" ? "#E22c2f" : "#18309F")};
  width: 18px;
  height: 100%;
  margin-right: 15px;
`;
