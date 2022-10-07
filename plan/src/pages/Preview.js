import React from "react";
import Header from "../components/Header";
import styled from "styled-components";

function Preview() {
  return (
    <PreviewMain>
      <Header />
      Preview
    </PreviewMain>
  );
}

const PreviewMain = styled.div`
  width: 100%;
  height: 100vh;
`;

export default Preview;
