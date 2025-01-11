import React from 'react';
import * as S from './NewsCard.style.js';

const NewsCard = ({ title, type, backgroundImage }) => {
    return (
        <S.PageContainer>
            <S.CardContainer
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center' 
              }}
            >
                <S.TitleWrapper>
                    <S.Type type={type}></S.Type>
                    <S.TitleBox>
                        <S.Title>
                          {title}
                        </S.Title>
                    </S.TitleBox>
                </S.TitleWrapper>
            </S.CardContainer>
        </S.PageContainer>
    );
};

export default NewsCard;