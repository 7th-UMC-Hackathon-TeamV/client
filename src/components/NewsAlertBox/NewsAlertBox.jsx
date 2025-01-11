import * as S from "./NewsAlertBox.style";

const NewsAlertBox = ({ userId }) => {
  return (
    <S.NewsAlertBox>
      <S.SideBar />
      <S.ContentWrapper>{userId}님이 뉴스를 공개 예정입니다!</S.ContentWrapper>
    </S.NewsAlertBox>
  );
};

export default NewsAlertBox;
