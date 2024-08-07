import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import "boxicons/css/boxicons.min.css";



interface Cardinfo {
  img?: string;
  cardname?: string;
  benefits?: string;
  wl?: boolean;
}

const Sliderbox = styled.div`
  width: 100%;
  background-color: gray;
  padding: 50px 0;
`;

const Box = styled.div`
  width: 100%;
  height: 25vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Imgbox = styled.div<Cardinfo>`
  margin-right: 10px;
  img {
    width: ${(props) => (props.wl ? "240px" : "250px")};
    transform: ${(props) => (props.wl ? "rotate(90deg)" : "rotate(0deg)")};
  }
`;

const Card__info = styled.div`
  margin-left: 10px;
  color: white;
`;

const News = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 60vh;
  width: 100%;
  background-color: #263343;
`;

function Usermain() {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    arrows: false,
  };
  const CI: Cardinfo[] = [
    {
      img: "https://www.shinhancard.com/pconts/images/contents/card/plate/cdCreditAXFBZE.png",
      cardname: "카카오뱅크 신한카드",
      benefits: "결제당 캐시백, 배달, 택시",
    },
    {
      img: "https://www.shinhancard.com/pconts/images/contents/card/plate/cdCreditAOBCB6.png",
      cardname: "신한카드 The More(더모아)",
      benefits:
        "1천원 미만 금액 포인트 적립, 더블 포인트 적립, 적립 포인트 재투자",
      wl: true,
    },
    {
      img: "https://www.shinhancard.com/pconts/images/contents/card/plate/cdCreaditAJCBZU.png",
      cardname: "카카오뱅크 신한카드",
      benefits: "ECO 기부포인트, 교통 온라인 Recycling , Health Care",
      wl: true,
    },
  ];
  return (
    <div>
      <Slider {...settings}>
        {CI.map((v, idx) => (
          <Sliderbox key={idx}>
            <Box>
              <Imgbox wl={v.wl}>
                <img src={v.img} />
              </Imgbox>
              <Card__info>
                <h2>{v.cardname}</h2>
                <p>{v.benefits}</p>
              </Card__info>
            </Box>
          </Sliderbox>
        ))}
      </Slider>
      <News><span>News (공사중)</span></News>
    </div>
  );
}

export default Usermain;

{
  /* <Box>
  <Imgbox>
    <img src="https://www.shinhancard.com/pconts/images/contents/card/plate/cdCreditAXFBZE.png" />
  </Imgbox>
  <Card__info>
    <h2>카카오뱅크 신한카드</h2>
    <p> 결제당 캐시백, 배달, 택시</p>
  </Card__info>
</Box>; */
}
