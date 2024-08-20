import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import "boxicons/css/boxicons.min.css";
import { Link } from "react-router-dom";
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
`;
function Navbar({ onclick }: { onclick: Dispatch<SetStateAction<boolean>> }) {
  return (
    <Unav>
      <Unav__logo>
        <Link to={"/"}>
          <i className="bx bxs-credit-card bx-sm bx-tada-hover" />
          <span style={{ fontSize: "18px" }}>Manager</span>
        </Link>
      </Unav__logo>
      <Unav__menu>
        <ul>
          <li>
            <Link to={"/managermain"}>카드 등록</Link>
          </li>
          <li>
            <Link to={"/managercontact"}>1:1 문의</Link>
          </li>
          <li>
            <Link to={"/managerfaq"}>FAQ</Link>
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
