import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
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
  position: relative;
`;

export const HotIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 35px;
  border-radius: 20px;
  background: #222222;
  position: absolute;
  top: 15px;
  left: 20px;
`;

export const HOTLabel = styled.p`
  color: white;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
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
  font-size: 28px;
  font-weight: 800;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 10px;
`;

export const HotType = styled.div`
  background: ${({ type }) => (type === "True" ? "#E22c2f" : "#18309F")};
  width: 18px;
  height: 100%;
  margin-right: 15px;
`;

export const EmptyContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 16px;
`;

export const EmptyMessage = styled.p`
  font-size: 20px;
  color: #999;
  font-weight: bold;
`;
