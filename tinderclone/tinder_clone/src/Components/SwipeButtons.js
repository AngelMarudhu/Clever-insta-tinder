import React from "react";
import styled from "styled-components";
import {
  MdReplay,
  MdClose,
  MdStarRate,
  MdFavorite,
  MdFlashOn,
} from "react-icons/md";

const SwipeButtons = () => {
  return (
    <Container>
      <Buttons>
        <div>
          <MdReplay size={30} color="lightgray" />
        </div>
        <div>
          <MdClose size={30} color="lightgray" />
        </div>
        <div>
          <MdStarRate size={30} color="lightgray" />
        </div>
        <div>
          <MdFavorite size={30} color="lightgray" />
        </div>
        <div>
          <MdFlashOn size={30} color="lightgray" />
        </div>
      </Buttons>
    </Container>
  );
};

export default SwipeButtons;

const Container = styled.div`
  width: 1128px;
`;

const Buttons = styled.div`
  width: 100%;
  position: fixed;
  bottom: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  div {
    cursor: pointer;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    background-color: whitesmoke;
    padding: 10px;
    border-radius: 50%;
    box-shadow: 2px 4px 13px -3px rgba(0, 0, 0, 1);
  }
`;
