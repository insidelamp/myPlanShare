import React from "react";
import styled from "styled-components";
import { CgHome } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  {
    /* 로그인 기능을 만들때 헤더의 버튼은 리덕스에서 정보를 받아와 로그인이 되어있으면 로그아웃으로 로그인이 안되있으면 로그아웃으로 변하는 삼향연산자를 사용할것입니다 */
  }
  const moveMainBtn = () => {
    navigate("/plan");
  };

  const logoutBtn = () => {
    navigate("/");
  };

  return (
    <MainHeader>
      <MainHeaderLeft>
        <HeaderIcons>
          <CgHome onClick={moveMainBtn} />
        </HeaderIcons>
        <HeaderTitle>하루 공유 계획하기</HeaderTitle>
      </MainHeaderLeft>
      <MainHeaderRight>
        <HeaderUser>OOO님 안녕하세요</HeaderUser>
        <HeaderBtn onClick={logoutBtn}>로그아웃</HeaderBtn>
      </MainHeaderRight>
    </MainHeader>
  );
}

const MainHeader = styled.div`
  border: 1px solid green;
  font-size: red;
  width: 100%;
  height: 12%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
`;

const MainHeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const MainHeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeaderIcons = styled.div`
  font-size: 80px;
  margin: 20px 30px 0px 50px;
`;

const HeaderTitle = styled.div`
  font-size: 50px;
  font-weight: bolder;
  margin-left: 10px;
`;

const HeaderUser = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const HeaderBtn = styled.button`
  width: 90px;
  height: 50px;
  margin: 0px 30px;
  font-size: 15px;
  border-radius: 15px;
`;
export default Header;
