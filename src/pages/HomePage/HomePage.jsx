import React from 'react';
import {
  BottomBar,
  NewsAlertBox,
  PageLayout,
  NewsHeader,
  HotNewsCard,
  NewsCardList,
} from "../../components";
import * as S from "./HomePage.style";
import Slider from "react-slick"; // react-slick import

const HomePage = () => {
  const USER_ID_LIST = ["v0111", "v0132", "올라"]; // 추후 삭제하고 API 연동 통해서 userID 가져와야함

  const hotNewsData = [
    { title: "News 1", type: "Type A", backgroundImage: "image1.jpg" },
    { title: "News 2", type: "Type B", backgroundImage: "image2.jpg" },
    { title: "News 3", type: "Type C", backgroundImage: "image3.jpg" },
    // 추가 데이터
  ];

  // Slider 설정
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <PageLayout footer={<BottomBar />}>
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
