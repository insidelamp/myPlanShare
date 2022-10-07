import React from "react";
import Header from "../components/Header";
import styled from "styled-components";

function Plan() {
  return (
    <PlanMain>
      <Header />
      Plan
    </PlanMain>
  );
}

const PlanMain = styled.div`
  width: 100%;
  height: 100vh;
`;

export default Plan;
