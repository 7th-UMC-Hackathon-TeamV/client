import { useState } from "react";
import { BottomBar, PageLayout,LogoHeader } from "../../components";
import * as S from "./NewsPage.style";
import { useNavigate } from "react-router-dom";

const NewsPage = () => {

  const titleColor = 'red';
  const navigate = useNavigate();

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
    <PageLayout header={<LogoHeader />} footer={<BottomBar />}>
      <S.NewsPage>
        <S.Back src="/svgs/back.svg" onClick={() => navigate('/home')} />
        <S.NewsContents>
          <S.Badge>속보</S.Badge>
          <S.NewsTitle $color={titleColor}>bad은 빨강, good은 파랑으로 됩니다.</S.NewsTitle>
          <S.NewsImage src="https://cdn.pixabay.com/photo/2022/03/10/15/13/clouds-7060045_1280.jpg"/>
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
