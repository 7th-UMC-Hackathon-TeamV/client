import { PageLayout } from "../../components";
import * as S from "./StartPage.style";
import { useNavigate } from "react-router-dom";


const StartPage = () => {
    const navigator = useNavigate();

  return (
    <PageLayout>
      <S.StartPage>
        <S.ContentWrapper>
            {`6시가 기다려지는\n우리들만의 특급 뉴스,\nOnair`}
        </S.ContentWrapper>
      </S.StartPage>
      <S.ButtonContainer>
        <button onClick={() => navigator("/home")}>온에어 시작하기</button>
      </S.ButtonContainer>
    </PageLayout>
  );
};

export default StartPage;

