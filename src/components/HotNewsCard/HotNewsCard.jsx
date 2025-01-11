import React from "react";
import * as S from "./HotNewsCard.style.jsx";

const HotNewsCard = ({ title, type, backgroundImage }) => {
  if (!title && !type && !backgroundImage) {
    return (
      <S.EmptyContainer>
        <S.EmptyMessage>당신의 뉴스를 들려주세요</S.EmptyMessage>
      </S.EmptyContainer>
    );
  }

  return (
    <S.PageContainer>
      <S.HotCardContainer
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <S.HotIcon>
          <S.HOTLabel>속보!</S.HOTLabel>
        </S.HotIcon>
        <S.HotTitleWrapper>
          <S.HotType type={type}></S.HotType>
          <S.HotTitleBox>
            <S.HotTitle>{title}</S.HotTitle>
          </S.HotTitleBox>
        </S.HotTitleWrapper>
      </S.HotCardContainer>
    </S.PageContainer>
  );
};

export default HotNewsCard;
