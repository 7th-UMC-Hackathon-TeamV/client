import { PageLayout } from "../../components";
import { LogoHeader } from "../../components";
import * as S from "./StartPage.style";
import { useNavigate } from "react-router-dom";

const StartPage = () => {
  const navigator = useNavigate();

  return (
    <PageLayout header={<LogoHeader />}>
      <S.StartPage>
        <S.ContentWrapper>
          {`6시가 기다려지는\n우리들만의 특급 뉴스, \n오늘의 뉴스를 공유해보세요!\nOnair`}
        </S.ContentWrapper>
        <S.Description></S.Description>
        <S.ButtonContainer>
          <button onClick={() => navigator("/home")}>온에어 시작하기</button>
        </S.ButtonContainer>
      </S.StartPage>
    </PageLayout>
  );
};

export default StartPage;
