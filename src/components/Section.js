import React from "react";
import styled from "styled-components";
function Section({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
}) {
  return (
    <Wrap bgImg={backgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftBtnText}</LeftButton>
          {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("images/model-s.jpg");
  background-size: cover;
  background-position: Center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/images/${props.bgImg}")`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
`;
const RightButton = styled(LeftButton)`
  background-color: #fff;
  opacity: 0.65;
  color: #000;
  margin-left: 20px;
  @media (max-width: 768px) {
    margin-top: 20px;
    margin-left: 0;
  }
`;
const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`;
const Buttons = styled.div`
  align-items: center;
`;
