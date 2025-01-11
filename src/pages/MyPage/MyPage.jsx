import { BottomBar, PageLayout, LogoHeader } from "../../components";
import * as S from "./MyPage.style";
import NewsCard from '../../components/NewsCard/NewsCard';

const MyPage = () => {

  const mockNewsData1 = [
    {
      title: '나 채이,삼성야구 끊겠다 선언',
      type: 'True',
      backgroundImage: 'https://www.hmap.co.kr/upload/post/1613630436_W3f_lions.jpg',
      hasDeleteButton: true,
      newsId: 101
    }
  ];

  const mockNewsData2 = [
    {
      title: '“정말 맛있었다.” 진, 과자 공부하고 0개 맞혀...',
      type: 'False',
      backgroundImage: 'https://ecimg.cafe24img.com/pg341b66939846097/kyungilfood21/web/product/big/20230627/0fcc8e793bccc78d0934866b8400e95e.jpg',
      hasDeleteButton: false,
      newsId: 101
    },
    {
      title: '주니, 비쿠에게 잼얘 협박',
      type: 'True',
      backgroundImage: 'https://mblogthumb-phinf.pstatic.net/MjAyNDA4MDJfMjky/MDAxNzIyNjAwMzY2NTg5.sxrBZ6BARV2W5looDFNxbznSl6pbfFH62OYfk10Yi14g.Upy9ndOMg7f-hv6_KhaRwwGC7W7OJy4plxNDMmnEiv0g.JPEG/IMG_6050.JPG?type=w800',
      hasDeleteButton: false,
      newsId: 102
    }
  ];

  return (
    <PageLayout header={<LogoHeader />} footer={<BottomBar />}>
      <S.MyPage>
        <S.Gap $gap={'20px'} />
        <S.PageTitleWrapper>
          <S.PageTitle>
            오늘 6시 공개 예정!
          </S.PageTitle>
          <S.Ellipse src="/svgs/ellipse.svg" />
        </S.PageTitleWrapper>

        <S.CardList>
          {mockNewsData1.map((news, index) => (
            <NewsCard
              key={index}
              title={news.title}
              type={news.type}
              backgroundImage={news.backgroundImage}
              hasDeleteButton={news.hasDeleteButton}
              newsId={news.newsId}
            />
          ))}
        </S.CardList>

        <S.PageTitleWrapper>
          <S.PageTitle>
            게시 중인 온에어
          </S.PageTitle>
          <S.Ellipse src="/svgs/ellipse.svg" />
        </S.PageTitleWrapper>

        <S.CardList>
        {mockNewsData2.map((news, index) => (
            <NewsCard
              key={index}
              title={news.title}
              type={news.type}
              backgroundImage={news.backgroundImage}
              hasDeleteButton={news.hasDeleteButton}
              newsId={news.newsId}
            />
          ))}

        </S.CardList>
      </S.MyPage>
    </PageLayout>
  );
};

export default MyPage;
