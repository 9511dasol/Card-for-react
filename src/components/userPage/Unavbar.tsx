import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import "boxicons/css/boxicons.min.css";
import { Link } from "react-router-dom";

interface Props {
  onclick: Dispatch<SetStateAction<boolean>>;
  setMenu: Dispatch<SetStateAction<boolean>>;
}

const Unav = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  padding: 15px 15px 0 15px;
  color: white;
  background-color: #263343;
  a {
    color: white;
    text-decoration: none;
  }
  @media screen and (max-width: 690px) {
    justify-content: space-between;
  }
`;
const Unav__Hambergur = styled.div`
  display: none;
  @media screen and (max-width: 690px) {
    display: flex;
  }
`;
const Unav__logo = styled.div`
  display: flex;
  a {
    display: flex;
  }
  span {
    margin: 0 0 0px 5px;
  }
  @media screen and (max-width: 690px) {
    display: none;
  }
`;

const Unav__menu = styled.div`
  ul {
    display: flex;
    align-items: center;

    li {
      margin: 0 10px;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 690px) {
    display: none;
  }
`;
const Unav__contact = styled.div`
  ul {
    display: flex;
    li {
      margin: 0 5px;
      a {
        color: white;
      }
    }
  }
`;

const Button = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  background: transparent;
  color: white;
  display: flex;
`;

function Unavbar({ onclick, setMenu }: Props) {
  return (
    <Unav>
      <Unav__Hambergur>
        <Button onClick={() =>setMenu(prev => true)}>
          <i className="bx bx-menu bx-sm" />
        </Button>
      </Unav__Hambergur>
      <Unav__logo>
        <Link to={"/"}>
          <i className="bx bxs-credit-card bx-sm bx-tada-hover" />
          <span style={{ fontSize: "18px" }}>Card</span>
        </Link>
      </Unav__logo>
      <Unav__menu>
        <ul>
          <li>
            <Link to={"/famouscard"}>인기카드</Link>
          </li>
          <li>
            <Link to={"/Findcard"}>카드 찾기</Link>
          </li>
          <li onClick={() => alert("개발중")}>개발자 카드 추천</li>
          <li>
            <Link to={"/faq"}>FAQ</Link>
          </li>
        </ul>
      </Unav__menu>
      <Unav__contact>
        <ul>
          <li>
            <Button onClick={() => onclick(false)}>
              <i className="bx bxs-key bx-sm" />
            </Button>
          </li>
          <li>
            <a href="https://github.com/9511dasol">
              <i className="bx bxl-github bx-sm" />
            </a>
          </li>
          <li>
            <a href="https://velog.io/@9511dasol/posts">
              <i className="bx bx-bold bx-sm" />
            </a>
          </li>
          <li>
            <a href="https://9511dasol.github.io/portfolio/">
              <i className="bx bxs-user bx-sm" />
            </a>
          </li>
        </ul>
      </Unav__contact>
    </Unav>
  );
}

export default Unavbar;
