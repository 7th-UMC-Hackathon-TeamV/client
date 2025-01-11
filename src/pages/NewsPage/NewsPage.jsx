import { BottomBar, PageLayout } from "../../components";
import * as S from "./NewsPage.style";

const NewsPage = () => {
  return (
    <PageLayout footer={<BottomBar />}>
      <S.NewsPage>뉴스페이퍼</S.NewsPage>
    </PageLayout>
  );
};

export default NewsPage;
