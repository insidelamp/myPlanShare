import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
function Signup() {
  return (
    <SignupMain>
      <Header />
      <SignupNotice>
        당신의 계획을 공유하기위해 회원가입을 진행해주세요!
      </SignupNotice>
      <LoginWriteBox>
        <LoginTitle>아이디</LoginTitle>
        <LoginWriteInput placeholder="아이디를 입력해주세요!" />
      </LoginWriteBox>
      <PassawordWriteBox>
        <PasswordTitle>비밀번호</PasswordTitle>
        <PasswordWriteInput placeholder="비밀번호를 입력해주세요!" />
      </PassawordWriteBox>
      <PassawordWriteCheckBox>
        <PasswordTitleCheck>비밀번호 확인</PasswordTitleCheck>
        <PasswordWriteInputCheck placeholder="작성하신 비밀번화 같은 비밀번호를 작성해주세요!" />
      </PassawordWriteCheckBox>
      <SubmitBox>
        <SignupSubmitBtn>회원가입</SignupSubmitBtn>
      </SubmitBox>
    </SignupMain>
  );
}

const SignupMain = styled.div`
  width: 100%;
  height: 100vh;
`;

const SignupNotice = styled.div`
  height: 10%;
  margin: 15px 0px 0px 100px;
  font-size: 40px;
`;
const LoginWriteBox = styled.div`
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const LoginTitle = styled.div`
  font-size: 40px;
  margin-right: 400px;
  font-weight: bold;
`;

const LoginWriteInput = styled.input`
  width: 500px;
  height: 40%;
  border-radius: 15px;
  text-align: center;
  font-size: 30px;
  border: none;
  background-color: rgba(0, 0, 0, 0.2);
`;
const PassawordWriteBox = styled.div`
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0px;
`;
const PasswordTitle = styled.div`
  font-size: 40px;
  margin-right: 360px;
  font-weight: bold;
`;

const PasswordWriteInput = styled.input`
  width: 500px;
  height: 40%;
  border-radius: 15px;
  text-align: center;
  font-size: 30px;
  border: none;
  background-color: rgba(0, 0, 0, 0.2);
`;
const PassawordWriteCheckBox = styled.div`
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0px;
`;
const PasswordTitleCheck = styled.div`
  font-size: 40px;
  margin-right: 280px;
  font-weight: bold;
`;

const PasswordWriteInputCheck = styled.input`
  width: 500px;
  height: 40%;
  border-radius: 15px;
  text-align: center;
  font-size: 30px;
  border: none;
  background-color: rgba(0, 0, 0, 0.2);
`;
const SubmitBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SignupSubmitBtn = styled.button`
  width: 120px;
  height: 45px;
  border-radius: 10px;
  font-weight: bold;
  border: none;
`;

export default Signup;
