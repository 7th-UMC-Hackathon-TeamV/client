import { useState } from "react";
import { BottomBar, PageLayout } from "../../components";
import * as S from "./NewsPage.style";

const NewsPage = () => {

  const titleColor = 'red';
  
  const [likeCount, setLikeCount] = useState(0);
  const [isLike, setIsLike] = useState(false);

  const handleLikeButton = () => {
    if (isLike){
      setLikeCount(likeCount-1)
    }
    else {
      setLikeCount(likeCount+1)
    }
    setIsLike(!isLike);
  }

  return (
    <PageLayout footer={<BottomBar />}>
      <S.NewsPage>
        <S.Back src="/svgs/back.svg" onClick={() => { }} />
        <S.NewsContents>
          <S.Badge>속보</S.Badge>
          <S.NewsTitle $color={titleColor}>bad은 빨강, good은 파랑으로 됩니다.</S.NewsTitle>
          <S.NewsImage src="/svgs/likeon.svg"/>
          <S.NewsDetail>
            본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문
          </S.NewsDetail>
          <S.LikeWrapper>
            <S.LikeButton onClick={() => handleLikeButton()}>
              <S.LikeIcon src={isLike? "/svgs/likeon.svg" : "/svgs/likeoff.svg"}/>
            </S.LikeButton>
            <S.LikeCount>{likeCount}</S.LikeCount>
          </S.LikeWrapper>
        </S.NewsContents>
      </S.NewsPage>
    </PageLayout>
  );
};

export default NewsPage;
