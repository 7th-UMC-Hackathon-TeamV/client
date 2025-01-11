import * as S from "./LogoHeader.style";
import { useNavigate } from "react-router-dom";

const LogoHeader = () => {
  const navigator = useNavigate();

  return (
    <S.LogoHeader>
      <S.ContentWrapper>
        <S.ContentIcon src="/svgs/onair_logo.svg" />
      </S.ContentWrapper>
    </S.LogoHeader>
  );
};

export default LogoHeader;
