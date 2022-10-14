import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";
import { idCheck, pwdCheck } from "../common/effectivenessCheck";
import { fetchCreate } from "../common/fetchApi";
function Signup() {
  const navigator = useNavigate();
  const [userId, setUserId] = useState("");
  const [userPwd, setUserPwd] = useState("");
  const [userPwdAgain, setUserPwdAgain] = useState("");
  const [userIdCheck, setUserIdCheck] = useState(false);
  const [userPwdCheck, setUserPwdCheck] = useState(false);
  const [userPwdAgainCheck, setUserPwdAgainCheck] = useState(false);
  const [effectivenessCheck, setEffectivenessCheck] = useState(false);
  const userWriteId = (e) => {
    setUserId(e.target.value);
  };

  const userWritePwd = (e) => {
    setUserPwd(e.target.value);
  };
  const userWriteAgianPwed = (e) => {
    setUserPwdAgain(e.target.value);
  };

  const signUpSubmit = () => {
    if (!effectivenessCheck) {
      if (userId === "" && userPwd === "" && userPwdAgain === "") {
        window.alert("빈칸을 작성해주세요!");
      }
      if (userId === "" || !idCheck(userId)) {
        setUserIdCheck(true);
        return;
      } else {
        setUserIdCheck(false);
      }
      if (userPwd === "" || !pwdCheck(userPwd)) {
        setUserPwdCheck(true);
        return;
      } else {
        setUserPwdCheck(false);
      }
      if (userPwd !== userPwdAgain) {
        setUserPwdAgainCheck(true);
      } else if (userPwd === userPwdAgain) {
        setUserPwdAgainCheck(false);
      }
      setEffectivenessCheck(true);
    } else {
      let userData = {
        userId: userId,
        userPwd: userPwd,
      };
      fetchCreate("http://localhost:3001/user", userData);
      window.alert("회원가입에 성공하셨습니다!");
      navigator("/");
    }
  };

  return (
    <SignupMain>
      <Header />
      <SignupNotice>
        당신의 계획을 공유하기위해 회원가입을 진행해주세요!
      </SignupNotice>
      <LoginWriteBox>
        <LoginTitle>아이디</LoginTitle>
        <LoginWriteInput
          onChange={userWriteId}
          placeholder="아이디를 입력해주세요!"
        />
        {userIdCheck ? (
          <SignUpEffectivenessCheck>
            아이디의 형식을 소문자+숫자+언더바 허용 4~10자리사이로 만들어주세요!
          </SignUpEffectivenessCheck>
        ) : (
          <></>
        )}
      </LoginWriteBox>
      <PassawordWriteBox>
        <PasswordTitle>비밀번호</PasswordTitle>
        <PasswordWriteInput
          onChange={userWritePwd}
          type="password"
          placeholder="비밀번호를 입력해주세요!"
        />
        {userPwdCheck ? (
          <SignUpEffectivenessCheck>
            비밀번호의 형식을 문자와 특수문자 조합으로 6~14자리사이로
            만들어주세요!
          </SignUpEffectivenessCheck>
        ) : (
          <></>
        )}
      </PassawordWriteBox>
      <PassawordWriteCheckBox>
        <PasswordTitleCheck>비밀번호 재확인</PasswordTitleCheck>
        <PasswordWriteInputCheck
          type="password"
          placeholder="작성하신 비밀번화 같은 비밀번호를 작성해주세요!"
          onChange={userWriteAgianPwed}
        />
        {userPwdAgainCheck ? (
          <SignUpEffectivenessCheck>
            위에 작성하신 비밀번호와 똑같지 않습니다!
          </SignUpEffectivenessCheck>
        ) : (
          <></>
        )}
      </PassawordWriteCheckBox>
      <SubmitBox>
        <SignupSubmitBtn onClick={signUpSubmit}>회원가입</SignupSubmitBtn>
      </SubmitBox>
    </SignupMain>
  );
}

const SignupMain = styled.div`
  width: 100%;
  height: 100vh;
`;

const SignupNotice = styled.div`
  height: 7%;
  margin: 15px 0px 0px 100px;
  font-size: 40px;
`;
const LoginWriteBox = styled.div`
  height: 22%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const LoginTitle = styled.div`
  font-size: 40px;
  height: 25%;
  margin-right: 33%;
  font-weight: bold;
`;

const LoginWriteInput = styled.input`
  width: 40%;
  height: 45%;
  border-radius: 15px;
  text-align: center;
  font-size: 30px;
  border: none;
  background-color: rgba(0, 0, 0, 0.2);
  margin-top: 5px;
`;
const SignUpEffectivenessCheck = styled.div`
  font-size: 25px;
  color: red;
  text-align: center;
  margin: 20px 0px 10px 0px;
  height: 15%;
`;

const PassawordWriteBox = styled.div`
  height: 22%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0px;
`;
const PasswordTitle = styled.div`
  font-size: 40px;
  height: 25%;
  margin-right: 33%;
  font-weight: bold;
`;

const PasswordWriteInput = styled.input`
  width: 40%;
  height: 45%;
  border-radius: 15px;
  text-align: center;
  font-size: 30px;
  border: none;
  background-color: rgba(0, 0, 0, 0.2);
`;
const PassawordWriteCheckBox = styled.div`
  height: 22%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0px;
`;
const PasswordTitleCheck = styled.div`
  font-size: 40px;
  height: 25%;
  margin-right: 27%;
  font-weight: bold;
`;

const PasswordWriteInputCheck = styled.input`
  width: 40%;
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
  width: 150px;
  height: 60px;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  font-size: 25px;
`;

export default Signup;
