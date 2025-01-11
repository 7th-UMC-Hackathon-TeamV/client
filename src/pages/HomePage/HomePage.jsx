import { BottomBar, NewsAlertBox, PageLayout } from "../../components";
import * as S from "./HomePage.style";

const HomePage = () => {
  return (
    <PageLayout footer={<BottomBar />}>
      <S.HomePage>홈페이지</S.HomePage>
      <NewsAlertBox userId="v0111" />
    </PageLayout>
  );
};

export default HomePage;
