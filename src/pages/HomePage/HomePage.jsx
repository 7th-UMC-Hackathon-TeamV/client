import React from 'react';
import {
  BottomBar,
  NewsAlertBox,
  PageLayout,
  NewsHeader,
  HotNewsCard,
  NewsCardList,
  LogoHeader
} from "../../components";
import * as S from "./HomePage.style";
import Slider from "react-slick";

const HomePage = () => {
  const USER_ID_LIST = ["v0111", "v0132", "올라"]; 

  const hotNewsData = [
    { title: "위니, 끝내 동역사에서 4호선 갈아타기 실패… 하나 더 기다려  “극대노”", type: "True", backgroundImage: "image1.jpg" },
    { title: "위니, 끝내 동역사에서 4호선 갈아타기 실패… 하나 더 기다려  “극대노”", type: "False", backgroundImage: "image2.jpg" },
    { title: "위니, 끝내 동역사에서 4호선 갈아타기 실패… 하나 더 기다려  “극대노”", type: "True", backgroundImage: "image3.jpg" },
  ];


  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <PageLayout header={<LogoHeader />} footer={<BottomBar />}>
      <S.HomePage>
        <S.NewsAlertBox>
          <NewsHeader title="On Air Box" />
          <S.NewsAlertBoxWrapper>
            {USER_ID_LIST.map((userId, index) => (
              <NewsAlertBox key={index} userId={userId} />
            ))}
          </S.NewsAlertBoxWrapper>
        </S.NewsAlertBox>

        <S.NewsSectionWrapper>
          <S.NewsSection>
            <NewsHeader title="어제의 핫! 온에어" />
            <Slider {...sliderSettings}>
              {hotNewsData.map((news, index) => (
                <HotNewsCard
                  key={index}
                  title={news.title}
                  type={news.type}
                  backgroundImage={news.backgroundImage}
                />
              ))}
            </Slider>
          </S.NewsSection>

          <S.NewsSection>
            <NewsHeader title="어제의 온에어" />
            <NewsCardList />
          </S.NewsSection>
        </S.NewsSectionWrapper>
      </S.HomePage>
    </PageLayout>
  );
};

export default HomePage;
