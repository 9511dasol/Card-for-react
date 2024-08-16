import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card_Info, cardinfo, Selector } from "./ingedients";



const Findcards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Selects = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  box-shadow: 0px 0px 3px 0px black;
  width: 100%;
  max-width: 500px;
  justify-content: center;
  padding: 40px;
`;

const Select = styled.div`
  display: flex;
  margin: 5px;
`;

const Card__box = styled.div`
  margin: 50px 0;
  width: 99%;
  max-width: 1150px;
  block-size: fit-content;
  border: solid 1px black;
  box-shadow: 0px 0px 3px 0px black;
`;

const Car__list = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: solid 1px black;
  padding: 20px 0;
  margin: 10px;
  height: 100%;
`;

const Img = styled.div`
  display: flex;
  align-items: center;

  img {
    max-width: 250px;
  }
`;

const Information = styled.div<Card_Info>`
  display: flex;
  flex-direction: column;
  width: 390px;
  height: 100%;
  ${({timg}) => (timg ? "margin: 10px 0 0 70px;" : null)}
  strong {
    margin-bottom: 5px;
    text-align: center;
  }
  p {
    margin-bottom: 6px;
  }
`;

const More = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  right: 0;
`;

const Mfee = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 5px;
`;

const companies: Selector[] = [
  { label: "삼성", value: "Samsung" },
  { label: "신한", value: "Shinhan" },
  { label: "현대", value: "Hyundae" },
  { label: "우리", value: "Woori" },
  { label: "국민", value: "KB" },
  { label: "롯데", value: "Lotte" },
  { label: "농협", value: "NH" },
  { label: "BC", value: "BC" },
  { label: "IBK", value: "IBK" },
];
const benefits: Selector[] = [
  { label: "여행", value: "여행" },
  { label: "OTT", value: "OTT" },
  { label: "간편결제", value: "간편결제" },
  { label: "무지성", value: "무지성" },
];
const PD: Selector[] = [
  { value: "Point", label: "Point" },
  { value: "Discount", label: "Discount" },
];

function Findcard() {
  const [company, setCompany] = useState<string>("");
  const [pdc, setPdc] = useState<Array<string>>([]);
  const [benefit, setbenefit] = useState<string>("");
  const [card_info, setCard_info] = useState<Card_Info[]>(cardinfo);
  // setCard_info는 비동기, useEffect async 등 사용할 때를 대비에 useState을 사용함.
  const companyChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCompany(event.target.value);
  };
  const benefitChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setbenefit(event.target.value);
  };
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    // 체크된 상태에서 배열에 값을 추가하거나 제거
    if (checked) {
      setPdc((prev) => [...prev, value]);
    } else {
      setPdc((prev) => prev.filter((item) => item !== value));
    }
  };
  return (
    <Findcards>
      <Selects>
        <Select>
          <label className="input-group-text">카드 사</label>
          <select
            className="form-select"
            onChange={companyChange}
            value={company}
          >
            <option value={""}>
              전체
            </option>
            {companies.map((v, idx) => (
              <option key={idx} value={v.value}>{v.label}</option>
            ))}
          </select>
        </Select>
        <Select>
          <label className="input-group-text">혜택 세부사항</label>
          <select
            className="form-select"
            onChange={benefitChange}
            value={benefit}
          >
            <option value={""}>
              전체
            </option>
            {benefits.map((v, idx) => (
              <option key={idx} value={v.value}>{v.label}</option>
            ))}
          </select>
        </Select>
        <Select style={{ justifyContent: "space-around" }}>
          {PD.map((v, idx) => (
            <label key={idx} >
              <input
                type="checkbox"
                value={v.value}
                checked={pdc.includes(v.value)}
                onChange={handleCheckboxChange}
              />
              {v.label}
            </label>
          ))}
          {/* <div>
        <h3>선택된 항목들:</h3>
        <ul>
          {pdc.map((option) => (
            <li key={option}>{option}</li>
          ))}
        </ul>
      </div> */}
        </Select>
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => alert("데이터 베이스 구축중")}
        >
          카드 조회
        </button>
      </Selects>
      <Card__box>
        <Car__list>
          {card_info.map(
            (
              {
                img,
                timg,
                rotate,
                recommend,
                cardname,
                mfee,
                Kmfee,
                benefits,
                more,
                notice1,
                notice2,
              },
              i
            ) => (
              <Card key={i}>
                {timg ? (
                  <Img style={{ marginLeft: "50px" }}>
                    <img style={{ height: "190px" }} src={img} />
                  </Img>
                ) : rotate ? (
                  <>
                    <Img>
                      <img style={{width: "190px", transform: "rotate(90deg)"}} src={img} />
                    </Img>
                  </>
                ) : (
                  <Img>
                    <img src={img} />
                  </Img>
                )}

                <Information timg={timg}>
                  {recommend ? (
                    <>
                      <strong>⭐개발자 추천 카드⭐</strong>
                    </>
                  ) : (
                    <></>
                  )}
                  <h3>{cardname}</h3>
                  <p>{benefits}</p>
                  {notice1 ? (
                    <div>
                      <p>전월 이용금액 포함:</p>
                      <p>{notice1}</p>
                    </div>
                  ) : null}
                  {notice2 ? (
                    <div>
                      <p>전월 이용금액 미포함:</p>
                      <p>{notice2}</p>
                    </div>
                  ) : null}
                  <Mfee>
                    <p>해외: {mfee}</p>
                    <p>국내: {Kmfee}</p>
                  </Mfee>
                </Information>
                <More>
                  <a href={more}>
                    <strong>자세히 보기</strong>
                  </a>
                </More>
              </Card>
            )
          )}
        </Car__list>
      </Card__box>
    </Findcards>
  );
}

export default Findcard;
