import { PageLayout } from "../../components";
import { LogoHeader } from "../../components";
import * as S from "./StartPage.style";
import { useNavigate } from "react-router-dom";

const StartPage = () => {
  const navigator = useNavigate();

  const getGroupKey = async () => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/api/random-group`, {
      method: 'POST',
    })
    const data = await response.json()

    navigator(`/${data.result}`)
  }

  return (
    <PageLayout header={<LogoHeader />}>
      <S.StartPage>
        <S.ContentWrapper>
          {`6시가 기다려지는\n우리들만의 특급 뉴스를\n친구들과 공유해보세요!\nOnair`}
        </S.ContentWrapper>
        <S.Description></S.Description>
        <S.ButtonContainer>
          <button onClick={() => getGroupKey()}>온에어 시작하기</button>
        </S.ButtonContainer>
      </S.StartPage>
    </PageLayout>
  );
};

export default StartPage;
