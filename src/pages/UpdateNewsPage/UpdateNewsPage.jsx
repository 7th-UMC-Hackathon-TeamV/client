import { BottomBar, PageLayout } from "../../components";
import * as S from "./UpdateNewsPage.style";

const UpdateNewsPage = () => {
  return (
    <PageLayout footer={<BottomBar />}>
      <S.UpdateNewsPage>뉴스작성</S.UpdateNewsPage>
    </PageLayout>
  );
};

export default UpdateNewsPage;
