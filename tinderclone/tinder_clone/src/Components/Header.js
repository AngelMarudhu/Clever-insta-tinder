import React from "react";
import styled from "styled-components";
import { FaUserTie } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";

const Header = () => {
  return (
    <Container>
      <Content>
        <Icons>
          <FaUserTie
            size={25}
            color="darkgrey"
            onMouseOver={({ target }) => (target.style.color = "black")}
            onMouseOut={({ target }) => (target.style.color = "darkgrey")}
          />
        </Icons>
        <Logo>
          <img src="./images/tinder.svg" />
        </Logo>
        <MessageIcon>
          <SiGooglemessages
            size={25}
            color="darkgrey"
            onMouseOver={({ target }) => (target.style.color = "black")}
            onMouseOut={({ target }) => (target.style.color = "darkgrey")}
          />
        </MessageIcon>
      </Content>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  max-width: 100%;
  margin: auto;
  scroll-behavior: smooth;
  border-bottom: 2px solid green;
  padding-top: 2rem;
  box-shadow: 1px 3px 7px -3px rgba(0, 0, 0, 1);
`;

const Content = styled.div`
  width: 1128px;
  display: flex;
  margin: auto;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 100%;
  position: sticky;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Icons = styled.div`
  margin-left: 20px;
  cursor: pointer;
`;

const MessageIcon = styled.div`
  margin-right: 20px;
  cursor: pointer;
`;

const Logo = styled.div`
  width: 40px;
  img {
    width: 100%;
    object-fit: contain;
  }
`;
