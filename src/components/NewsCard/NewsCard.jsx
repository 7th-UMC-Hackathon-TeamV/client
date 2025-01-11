import React from "react";
import * as S from "./NewsCard.style";

const NewsCard = ({ title, type, backgroundImage, hasDeleteButton = false }) => {

  const handleDeleteButton = () => {
    console.log('delete');
  }

  return (
<S.NewsCard>
    <S.CardContainer
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
  
        {hasDeleteButton && <S.XButton src='/svgs/x.svg' onClick={() => handleDeleteButton()}/>}
        <S.TitleWrapper>
          <S.Type type={type}></S.Type>
          <S.TitleBox>
            <S.Title>
              {title}
            </S.Title>
          </S.TitleBox>
        </S.TitleWrapper>
      </S.CardContainer>
    </S.NewsCard>
  );
};

export default NewsCard;
