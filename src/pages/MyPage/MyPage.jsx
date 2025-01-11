import { BottomBar, PageLayout } from "../../components";
import * as S from "./MyPage.style";
import { useState } from "react";
import NewsCard from '../../components/NewsCard/NewsCard';

const MyPage = () => {

  const newsData = [
    { title: 'title', url: 'url' },
    { title: 'title', url: 'url' },
  ]

  const imgurl = 'https://cdn.pixabay.com/photo/2022/03/10/15/13/clouds-7060045_1280.jpg'

  return (
    <PageLayout footer={<BottomBar />}>
      <S.MyPage>
        <S.Gap $gap={'80px'}/>
        <S.PageTitleWrapper>
          <S.PageTitle>
            오늘 6시 공개 예정!
          </S.PageTitle>
          <S.Ellipse src="/svgs/ellipse.svg" />
        </S.PageTitleWrapper>

        <S.CardList>
          {newsData.map((news, index) => (
            <NewsCard
              key={index}
              title={news.title}
              hasDeleteButton={true}
            />
          ))}
        </S.CardList>
        <S.PageTitleWrapper>
          <S.PageTitle>
            어제의 온에어
          </S.PageTitle>
          <S.Ellipse src="/svgs/ellipse.svg" />
        </S.PageTitleWrapper>

        <S.CardList>
          {newsData.map((news, index) => (
            <NewsCard
              key={index}
              title={news.title}
            />
          ))}

        </S.CardList>
      </S.MyPage>
    </PageLayout>
  )
};

export default MyPage;
