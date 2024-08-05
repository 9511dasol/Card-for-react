import React, { useState } from "react";
import styled from "styled-components";
import Unavbar from "./userPage/Unavbar";
import Usermain from "./userPage/Usermain";
import Main from "./managerPage/Main";
import Navbar from "./managerPage/Navbar";

const Home = styled.div`
  display: flex;
  flex-direction: column;
`;

const Navbars = styled.div``;

const Content = styled.div``;

const Footer = styled.div`
  width: 100%;
  height: 21vh;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  background-color: #263343;
  color: #fff;
  padding: 50px 0px 50px 0px;
`;

const Footer__ma = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Address_text = styled.h4`
  margin-bottom: 5px;
`;

const Footer_menu = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    li {
      margin-top: 2px;
      a {
        color: white;
        text-decoration: none;
      }
      a:hover {
        transform: scale(1.1);
        background-color: rgba(255, 255, 255, 0.122);
        text-decoration: none;
      }
    }
  }
`;

function Homepage() {
  const [state, setState] = useState<boolean>(true);
  return (
    <Home>
      <Navbars>{state ? <Unavbar /> : <Navbar />}</Navbars>
      <Content>{state ? <Usermain /> : <Main />}</Content>
      <Footer>
        <Footer__ma>
          <Address_text>Made by</Address_text>
          <Footer_menu>
            <ul>
              <li>한다솔</li>
            </ul>
          </Footer_menu>
        </Footer__ma>
        <Footer__ma>
          <Address_text>QUICK LINKS</Address_text>
          <Footer_menu>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">인기카드</a>
              </li>
              <li>
                <a href="#">카드 찾기</a>
              </li>
              <li>
                <a href="#">개발자 카드 추천</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </Footer_menu>
        </Footer__ma>
        <Footer__ma>
          <Address_text>Impormation</Address_text>
          <Footer_menu>
            <ul>
              <li>E-mail: 9511dasole@gmail.com</li>
              <li>Number: 02-1234-5678</li>
            </ul>
          </Footer_menu>
        </Footer__ma>
      </Footer>
    </Home>
  );
}

export default Homepage;