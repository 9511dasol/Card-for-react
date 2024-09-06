import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Unavbar from "./userPage/Unavbar";
import Usermain from "./userPage/Usermain";
import Main from "./managerPage/Main";
import Navbar from "./managerPage/Navbar";
import Findcard from "./userPage/Findcard";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Modal from "react-modal";

const Home = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Navbars = styled.div``;

const Content = styled.div`
  min-height: 90vh;
  background-color: #263343;
`;

const Footer = styled.div`
  width: 100%;
  height: 21vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #263343;
  color: #fff;
  padding: 25px 0 0 0;
  @media screen and (max-width: 690px) {
    justify-content: space-between;
  }
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
    padding: 0 0 0 2px;
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

const Unav__menu = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    li {
      margin: 0 10px;
      cursor: pointer;
    }
  }
`;

const Mage__menu = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    li {
      margin: 0 10px;
      cursor: pointer;
    }
  }
`;

function Homepage() {
  const [state, setState] = useState<boolean>(true);
  const [menu, setMenu] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 690) {
        setMenu(false);
      }
    };

    // 처음 로드 시 한 번 실행
    handleResize();

    // 윈도우 리사이즈 이벤트에 핸들러를 추가
    window.addEventListener('resize', handleResize);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Home>
      <Navbars>
        {state ? (
          <Unavbar onclick={setState} setMenu={setMenu} />
        ) : (
          <Navbar onclick={setState} setMenu={setMenu} />
        )}
      </Navbars>
      <Content >
        {menu? <></>:<Outlet />}
      </Content>
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
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/famouscard"}>인기 카드</Link>
              </li>
              <li>
                <Link to={"/findcard"}>카드 찾기</Link>
              </li>
              <li>
                {/* <Link to={"/findcard"}>개발자 카드 추천</Link> */}
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => alert("준비중")}
                >
                  {" "}
                  개발자 카드 추천
                </a>
              </li>
              <li>
                <Link to={"/faq"}>FAQ</Link>
              </li>
            </ul>
          </Footer_menu>
        </Footer__ma>
        <Footer__ma>
          <Address_text>Information</Address_text>
          <Footer_menu>
            <ul>
              <li>E-mail: 9511dasole@gmail.com</li>
              <li>Number: 02-1234-5678</li>
            </ul>
          </Footer_menu>
        </Footer__ma>
      </Footer>
      <Modal isOpen={menu} onRequestClose={() => setMenu(false)}>
        {state ? (
          <Unav__menu>
            <ul>
              <li>
                <Link onClick={() => setMenu(false)} to={"/famouscard"}>인기카드</Link>
              </li>
              <li>
                <Link onClick={() => setMenu(false)} to={"/Findcard"}>카드 찾기</Link>
              </li>
              <li onClick={() => alert("개발중")}>개발자 카드 추천</li>
              <li>
                <Link onClick={() => setMenu(false)} to={"/faq"}>FAQ</Link>
              </li>
            </ul>
          </Unav__menu>
        ) : (
          <Mage__menu>
            <ul>
              <li>
                <Link onClick={() => setMenu(false)} to={"/manager/main"}>카드 등록</Link>
              </li>
              <li>
                <Link onClick={() => setMenu(false)} to={"/manager/contact"}>1:1 문의</Link>
              </li>
              <li>
                <Link onClick={() => setMenu(false)} to={"/manager/faq"}>FAQ</Link>
              </li>
            </ul>
          </Mage__menu>
        )}
      </Modal>
    </Home>
  );
}

export default Homepage;
