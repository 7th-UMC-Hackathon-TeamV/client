import { BottomBar, PageLayout } from "../../components";
import * as S from "./LoginPage.style";

const LoginPage = () => {
  return (
    <PageLayout footer={<BottomBar />}>
      <S.LoginPage>로그인</S.LoginPage>
    </PageLayout>
  );
};

export default LoginPage;
