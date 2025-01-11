import * as S from "./LoginPage.style";
import { useState } from "react";

const LoginPage = () => {

  const [disabled, setDisabled] = useState(false);

  return (
    <S.LoginPage>
    <S.LoginTitleWrapper>
      <S.LoginTitle>
        로그인 후에 나만의 뉴스를 작성해주세요.
      </S.LoginTitle> 
      <S.Ellipse src="/svgs/ellipse.svg"/>
    </S.LoginTitleWrapper>
    <S.Gap $gap={'25px'}/>
    <S.InputDiv>
      <S.Input placeholder="아이디를 입력하세요."/>
      <S.TextNum>0/10</S.TextNum>
    </S.InputDiv>
    <S.Gap $gap={'8px'}/>
    <S.InputDiv>
      <S.Input placeholder="비밀번호를 입력하세요."/>
      <S.TextNum>0/10</S.TextNum>
    </S.InputDiv>
    <S.Gap $gap={'16px'}/>
    <S.LoginButton disabled={disabled}>로그인</S.LoginButton>
    </S.LoginPage>
  )
};

export default LoginPage;
