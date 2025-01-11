import { BottomBar, NewsAlertBox, PageLayout } from "../../components";
import { NewsHeader } from "../../components/NewsHeader";
import * as S from "./HomePage.style";

const HomePage = () => {
  const USER_ID_LIST = ["v0111", "v0132", "올라"]; // 추후 삭제하고 API 연동 통해서 userID 가져와야함

  return (
    <PageLayout footer={<BottomBar />}>
      <S.HomePage>홈페이지</S.HomePage>
      <S.NewsSection>
        <NewsHeader title="On Air Box" />
        <S.NewsAlertBoxWrapper>
          {USER_ID_LIST.map((userId, index) => (
            <NewsAlertBox key={index} userId={userId} />
          ))}
        </S.NewsAlertBoxWrapper>
      </S.NewsSection>
    </PageLayout>
  );
};

export default HomePage;
