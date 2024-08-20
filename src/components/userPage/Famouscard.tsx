import React from "react";
import styled from "styled-components";
import { Card_Info, cardinfo } from "../ingedients";

interface Company {
  name?: string;
  background?: string;
  color?: string;
  url?: string;
}
const Companies: Company[] = [
  { name: "신한카드", background: "blue", url: "sh" },
  { name: "현대카드", background: "black", url: "hd" },
  { name: "롯데카드", background: "wheat", url: "lt", color: "black" },
  { name: "우리카드", background: "darkblue", url: "wr" },
  { name: "국민카드", background: "brown", url: "kb" },
  { name: "하나카드", background: "green", url: "hn" },
  { name: "삼성카드", background: "blue", url: "ss" },
  { name: "BC카드", background: "red", url: "bc" },
];

const Background = styled.div`
  background-color: #263343;
  min-height: 90vh;
`;

const Back = styled.div`
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card_list = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 150px);
  grid-template-rows: repeat(2, 190px);
  gap: 25px;
  width: 640px;
  height: 380px;
  margin: 10px 0;
`;

const Companyy = styled.div<Company>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.background};
  color: ${(props) => (props.color ? props.color : "white")};
  cursor: pointer;
  &:hover {
    outline-color: transparent;
    outline-style: solid;
    box-shadow: 0 0 0 4px wheat;
    transform: scale(1.15);
  }
`;

const FamousCard = styled.div`
  margin-top: 20px;
  min-height: 90vh;
  h2 {
    color: white;
  }
  padding: 15px;
`;

const Famous = styled.div`
  display: flex;
  flex-direction: row;
`;
const Card = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 160px;
  height: 220px;
  padding: 5px;
  color: white;
  border: 1px solid white;
  img {
    width: 100px;
  }
  #xx {
    text-align: center;
    width: 100px;
    color: white;
    border: 0.9px solid white;
    cursor: pointer;
    text-decoration: none;
  }
  #xx:hover {
    background: black;
  }
`;

function Famouscard() {
  return (
    <Background>
      <Back>
        <Card_list>
          {Companies.map((v) => (
            <Companyy
              background={v.background}
              color={v.color}
              onClick={() => alert("개발중")}
            >
              <span>{v.name}</span>
            </Companyy>
          ))}
        </Card_list>
      </Back>
      <FamousCard>
        <h2>인기 카드 추천 리스트</h2>
        <Famous>
          {cardinfo.map((v, i) =>
            i >= 0 ? (
              <Card>
                <img src={v.img} alt="" />
                <span>{v.cardname}</span>
                <a href={v.more} target="_blank" id="xx">
                  바로가기
                </a>
              </Card>
            ) : (
              <></>
            )
          )}
        </Famous>
      </FamousCard>
    </Background>
  );
}

export default Famouscard;
