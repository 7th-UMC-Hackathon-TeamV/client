import * as S from "./BottomBar.style";
import { useNavigate } from "react-router-dom";

const BottomBar = () => {
  const navigator = useNavigate();

  return (
    <S.BottomBar>
      <S.ContentWrapper onClick={() => navigator("/")}>
        <S.ContentIcon src="/svgs/home.svg" />
        <S.ContentText>홈</S.ContentText>
      </S.ContentWrapper>

      <S.ContentWrapper onClick={() => navigator("/news")}>
        <S.ContentIcon src="/svgs/pencil.svg" />
        <S.ContentText>작성</S.ContentText>
      </S.ContentWrapper>

      <S.ContentWrapper onClick={() => navigator("/login")}>
        <S.ContentIcon src="/svgs/user.svg" />
        <S.ContentText>마이페이지</S.ContentText>
      </S.ContentWrapper>
    </S.BottomBar>
  );
};

export default BottomBar;
