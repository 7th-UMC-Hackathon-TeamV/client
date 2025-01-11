import React from 'react';
import * as S from './HotNewsCard.style.js';

const HotNewsCard = ({ title, type, backgroundImage }) => {
    return (
        <S.PageContainer>
            <S.HotCardContainer
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center' 
              }}
            >
                <S.HotIcon>
                    <S.HOTLabel>
                        HOT!
                    </S.HOTLabel>
                </S.HotIcon>
                <S.HotTitleWrapper>
                    <S.HotType type={type}></S.HotType>
                    <S.HotTitleBox>
                        <S.HotTitle>
                          {title}
                        </S.HotTitle>
                    </S.HotTitleBox>
                </S.HotTitleWrapper>
            </S.HotCardContainer>
        </S.PageContainer>
    );
};

export default HotNewsCard;
