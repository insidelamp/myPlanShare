import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { CgHome } from "react-icons/cg";

function Login() {
  const navigate = useNavigate();

  const loginBtn = () => {
    navigate("/plan");
  };
  const signupBtn = () => {
    navigate("/signup");
  };
  const previewBtn = () => {
    navigate("/preview");
  };
  return (
    <LoginMain>
      <MainTitle>
        <TitleIcons>
          <CgHome />
        </TitleIcons>
        하루 계획 공유하기
      </MainTitle>
      <LoginWriteBox>
        <LoginTitle>아이디</LoginTitle>
        <LoginWriteInput placeholder="아이디를 입력해주세요!" />
      </LoginWriteBox>
      <PassawordWriteBox>
        <PasswordTitle>비밀번호</PasswordTitle>
        <PasswordWriteInput placeholder="비밀번호를 입력해주세요!" />
      </PassawordWriteBox>
      {/*
      로그인 기능 만들면 삼향연산자로 바꿔 작성할 예정
       */}
      <LoginCheck>
        입력하신 아이디와 비밀 번호를 다시한번 확인해주세요!
      </LoginCheck>
      <SubmitBox>
        <SubmitBtn onClick={loginBtn}>로그인</SubmitBtn>
        <SubmitBtn onClick={signupBtn}>회원가입</SubmitBtn>
        <SubmitBtn onClick={previewBtn}>둘러보기</SubmitBtn>{" "}
      </SubmitBox>
    </LoginMain>
  );
}

const LoginMain = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 50px;
`;

const MainTitle = styled.div`
  font-size: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const TitleIcons = styled.div`
  margin: 10px 10px 0px 0px;
  font-size: 70px;
`;
const LoginWriteBox = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
`;

const LoginTitle = styled.div`
  font-size: 40px;
  margin-right: 33%;
  font-weight: bold;
`;

const LoginWriteInput = styled.input`
  width: 40%;
  height: 35%;
  border-radius: 15px;
  text-align: center;
  font-size: 30px;
  border: none;
  background-color: rgba(0, 0, 0, 0.2);
`;
const PassawordWriteBox = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0px;
`;
const PasswordTitle = styled.div`
  font-size: 40px;
  margin-right: 33%;
  font-weight: bold;
`;

const PasswordWriteInput = styled.input`
  width: 40%;
  height: 35%;
  border-radius: 15px;
  text-align: center;
  font-size: 30px;
  border: none;
  background-color: rgba(0, 0, 0, 0.2);
`;
const LoginCheck = styled.div`
  font-size: 40px;
  color: red;
  text-align: center;
  margin-bottom: 20px;
`;

const SubmitBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const SubmitBtn = styled.button`
  width: 200px;
  height: 60px;
  border-radius: 10px;
  font-size: 30px;
  &:nth-child(2) {
    margin: 0px 50px;
  }
`;

export default Login;
