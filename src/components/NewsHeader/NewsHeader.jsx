import * as S from "./NewsHeader.style";

const NewsHeader = ({ title }) => {
  return (
    <S.NewsHeaderWrapper>
      <S.Title>{title}</S.Title>
      <S.RedDot />
    </S.NewsHeaderWrapper>
  );
};

export default NewsHeader;
