import { useNavigate, useParams } from "react-router-dom";
import {
  BottomBar,
  PageLayout,
  NewsHeader,
  LogoHeader,
} from "../../components";
import * as S from "./LoginPage.style";
import { useState, useEffect } from "react";
import axios from 'axios';

const LoginPage = () => {
  const [disabled, setDisabled] = useState(true);
  const [id, setId] = useState("");
  const [passwd, setPasswd] = useState("");

  const { groupKey } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id.length > 0 && passwd.length > 0){
      setDisabled(false);
    }
    else{
      setDisabled(true);
    }
  }, [id, passwd])

  const loginHandler = async () => {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/api/${groupKey}/users/login`,
      {
        username: id,
        password: passwd,
      }
    )
    const data = response.data

    localStorage.setItem('username', data.result.username)

    navigate(`/${groupKey}`);
  }

  return (
    <PageLayout header={<LogoHeader />} footer={<BottomBar />}>
      <S.LoginPage>
        <S.LoginTitleWrapper>
          <NewsHeader title="로그인 후에 나만의 뉴스를 작성해주세요." />
        </S.LoginTitleWrapper>
        <S.Gap $gap={"25px"} />
        <S.InputWrapper>
          <S.InputDiv>
            <S.Input
              maxLength="10"
              placeholder="아이디를 입력하세요."
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <S.TextNum>{id.length}/10</S.TextNum>
          </S.InputDiv>
          <S.Gap $gap={"8px"} />
          <S.InputDiv>
            <S.Input
              maxLength="20"
              type="password"
              placeholder="비밀번호를 입력하세요."
              value={passwd}
              onChange={(e) => setPasswd(e.target.value)}
            />
            <S.TextNum>{passwd.length}/20</S.TextNum>
          </S.InputDiv>
          <S.Gap $gap={"16px"} />
          <S.LoginButton disabled={disabled} onClick={() => loginHandler()}>로그인</S.LoginButton>
        </S.InputWrapper>
      </S.LoginPage>
    </PageLayout>
  );
};

export default LoginPage;
