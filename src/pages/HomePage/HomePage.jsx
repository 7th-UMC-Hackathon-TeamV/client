import {
  BottomBar,
  NewsAlertBox,
  PageLayout,
  NewsHeader,
  HotNewsCard,
  NewsCardList,
  LogoHeader,
} from "../../components";
import * as S from "./HomePage.style";
import Slider from "react-slick";

const HomePage = () => {
  const USER_ID_LIST = ["v0111", "v0132", "올라"];

  const hotNewsData = [
    { title: "윈터, 7기 해커톤 참여", type: "False", backgroundImage: "https://img.activityjapan.com/wi/winter-trip-couple_thumb.jpg" },
    { title: "V팀, 저녁 메뉴 족발인 것으로 밝혀져...", type: "False", backgroundImage: "https://static.hubzum.zumst.com/hubzum/2019/07/26/11/8291a05e16b14e9b91eedc7a4375c934_780x585.jpg" },
    { title: "위니, 끝내 동역사에서 4호선 갈아타기 실패… 하나 더 기다려  “극대노”", type: "True", backgroundImage: "https://theindigo.co.kr/wp-content/uploads/2020/12/%EC%A0%84%EC%B2%A001.jpg" },
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
        {/* <S.NewsAlertBox>
          <NewsHeader title="On Air Box" />
          <S.NewsAlertBoxWrapper>
            {USER_ID_LIST.map((userId, index) => (
              <NewsAlertBox key={index} userId={userId} />
            ))}
          </S.NewsAlertBoxWrapper>
        </S.NewsAlertBox> */}

        <S.NewsSectionWrapper>
          <S.NewsSection>
            {/* <NewsHeader title="어제의 핫! 온에어" /> */}
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
            <S.HeaderWrapper>
              <NewsHeader title="실시간 온에어" />
              <S.NewsHeaderDescription>
                (매일 18:00마다 업데이트됩니다.)
              </S.NewsHeaderDescription>
            </S.HeaderWrapper>
            <NewsCardList />
          </S.NewsSection>
        </S.NewsSectionWrapper>
      </S.HomePage>
    </PageLayout>
  );
};

export default HomePage;
