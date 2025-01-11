import * as S from "./BottomBar.style";
import { useNavigate, useParams } from "react-router-dom";

const BottomBar = () => {
  const navigator = useNavigate();

  const { groupKey } = useParams();

  console.log(groupKey)

  return (
    <S.BottomBar>
      <S.ContentWrapper onClick={() => navigator(`/${groupKey}`)}>
        <S.ContentIcon src="/svgs/home.svg" />
        <S.ContentText>홈</S.ContentText>
      </S.ContentWrapper>

      <S.ContentWrapper onClick={() => navigator(`/update-news/${groupKey}`)}>
        <S.ContentIcon src="/svgs/pencil.svg" />
        <S.ContentText>작성</S.ContentText>
      </S.ContentWrapper>

      <S.ContentWrapper onClick={() => navigator(`/login/${groupKey}`)}>
        <S.ContentIcon src="/svgs/user.svg" />
        <S.ContentText>마이페이지</S.ContentText>
      </S.ContentWrapper>
    </S.BottomBar>
  );
};

export default BottomBar;
