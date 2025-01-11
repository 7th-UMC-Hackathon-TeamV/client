import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardListWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  width: 100%;
`;

export const CardContainer = styled.div`
  position: relative;
  width: 85%;
  height: 75%;
  background: #dfdfdf;
  border-radius: 8px;
  display: flex;
  justify-content: flex-start;
  position: relative;
  margin-top: -30px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  width: 70%;
  height: 18%;
  position: absolute;
  left: 20px;
  bottom: 20px;
`;

export const TitleBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const Title = styled.p`
  color: white;
  font-size: 24px;
  font-weight: 800;
  justify-content: center;
  align-items: center;
  margin-top: 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; 
`;


export const Type = styled.div`
  background: ${({ type }) => type === 'True' ? '#E22c2f' : '#18309F'};
  width: 18px;
  height: 100%;
  margin-right: 15px;
`;

export const XButton = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 10px;
  right: 10px;
`