import { BottomBar, PageLayout } from "../../components";
import * as S from "./HomePage.style";

const HomePage = () => {
  return (
    <PageLayout footer={<BottomBar />}>
      <S.HomePage>홈페이지</S.HomePage>
    </PageLayout>
  );
};

export default HomePage;
