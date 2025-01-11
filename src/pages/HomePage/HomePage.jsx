import {
  BottomBar,
  NewsAlertBox,
  PageLayout,
  NewsHeader,
  HotNewsCard,
  NewsCardList,
} from "../../components";
import * as S from "./HomePage.style";

const HomePage = () => {
  const USER_ID_LIST = ["v0111", "v0132", "올라"]; // 추후 삭제하고 API 연동 통해서 userID 가져와야함

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
            <HotNewsCard />
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
