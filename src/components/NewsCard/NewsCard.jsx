import React from "react";
import * as S from "./NewsCard.style";

const NewsCard = ({ title, type, backgroundImage }) => {
  return (
    <S.NewsCard>
      <S.CardContainer backgroundImage={backgroundImage}>
        <S.TitleWrapper>
          <S.Type type={type} />
          <S.TitleBox>
            <S.Title>{title}</S.Title>
          </S.TitleBox>
        </S.TitleWrapper>
      </S.CardContainer>
    </S.NewsCard>
  );
};

export default NewsCard;
