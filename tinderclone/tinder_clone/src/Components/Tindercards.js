import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TinderCard from "react-tinder-card";
import axios from "./axios";

const Tindercards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/tinder/cards");
      console.log(req.data);
    }
    fetchData();
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log("removing" + nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log(name + "left The Screen");
  };

  return (
    <Container>
      <Content>
        <CardsNames>
          {cards.map((items, index) => (
            <TinderCard
              className="swipe"
              key={items.name}
              onSwipe={(dir) => swiped(dir, items.name)}
              preventSwipe={["up", "down"]}
              onCardLeftScreen={() => outOfFrame(items.name)}
            >
              <ArtBoards image={items.imgUrl}>
                <Names>
                  <h1>{items.name}</h1>
                </Names>
              </ArtBoards>
            </TinderCard>
          ))}
        </CardsNames>
      </Content>
    </Container>
  );
};

export default Tindercards;

const Container = styled.div`
  max-width: 100%;
`;

const Content = styled.div`
  width: 1128px;
  margin: auto;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CardsNames = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10vh;

  .swipe {
    position: absolute;
  }
`;

const ArtBoards = styled.div`
  background-image: url(${({ image }) => image});
  position: relative;
  width: 550px;
  height: 45vh;
  max-width: 85vw;
  padding: 15px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 30px;

  @media (max-width: 768px) {
  }
`;

const Names = styled.div`
  position: absolute;
  bottom: 0;
  margin: 20px;
  color: darkgoldenrod;
`;
