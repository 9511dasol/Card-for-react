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
  justify-content: space-between;
  padding: 15px 15px 0 15px;
  color: white;
  background-color: #263343;
  a {
    color: white;
    text-decoration: none;
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
  padding: 0;
  margin: 0;
  display: flex;
`;

const Unav__Hambergur = styled.div`
  display: none;
  @media screen and (max-width: 690px) {
    display: flex;
    span {
      display: flex;
      margin: 0 0 0px 5px;
    }
  }
`;

function Navbar({ onclick, setMenu }: Props) {
  return (
    <Unav>
      <Unav__Hambergur>
        <Button onClick={() => setMenu((prev) => true)}>
          <i className="bx bx-menu bx-sm" />
        </Button>
        <span style={{ fontSize: "18px" }}>Manager</span>
      </Unav__Hambergur>
      <Unav__logo>
        <Button onClick={() => setMenu((prev) => true)}>
          <i className="bx bxs-credit-card bx-sm bx-tada-hover" />
        </Button>
        <Link to={"/"}>
          <span style={{ fontSize: "18px" }}>Manager</span>
        </Link>
      </Unav__logo>
      <Unav__menu>
        <ul>
          <li>
            <Link to={"/manager/main"}>카드 등록</Link>
          </li>
          <li>
            <Link to={"/manager/contact"}>1:1 문의</Link>
          </li>
          <li>
            <Link to={"/manager/faq"}>FAQ</Link>
          </li>
        </ul>
      </Unav__menu>
      <Unav__contact>
        <ul>
          <li>
            <Button onClick={() => onclick(true)}>
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
export default Navbar;
