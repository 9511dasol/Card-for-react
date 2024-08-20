import React, { ChangeEvent, useState } from "react";
import { cardinfo as ci, Card_Info } from "../ingedients";
import styled from "styled-components";
const Img = styled.div`
  display: flex;
  align-items: center;
  img {
    max-width: 250px;
  }
`;
const Back = styled.div`
  min-height: 100vh;
  background-color: #263343;
`;

const Register = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const Mypost = styled.div`
  width: 50%;
  min-width: 410px;
  box-shadow: 0px 0px 3px 0px wheat;
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  justify-content: space-between;
`;
const Buttons = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
`;
const Cardlist = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  padding: 20px;
`;
const Cards = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  border: 2px solid wheat;
  padding: 20px;
`;
const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Cardbutton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Main() {
  const [recommend, setRecommend] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [pdc, setPdc] = useState<string>("");
  const [main_benefit, setMain_benefit] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [picurl, setPicurl] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [month_money, setMonth_money] = useState<string>("");
  const [benefits, setBenefits] = useState<Array<string>>([]);
  const [caution1, setCaution1] = useState<string>();
  const [caution2, setCaution2] = useState<string>();
  const [cautions, setCautions] = useState<Array<string>>([]);
  const [example, setExample] = useState<string>();
  const [mf, setMf] = useState<number>();
  const [innate, setInnate] = useState<string>("");
  const [card_info, setCard_info] = useState<Card_Info[]>(ci);
  const RecommendChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setRecommend(event.target.value);
  };

  const companyChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCompany(event.target.value);
  };

  const pdcChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPdc(event.target.value);
  };

  const main_benefitChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setMain_benefit(event.target.value);
  };

  const urlChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const picurlChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPicurl(event.target.value);
  };

  const nameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const month_moneyChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMonth_money(event.target.value);
  };

  const benefitsChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;
    const benefitsArray = inputValue.split("\n");
    setBenefits(benefitsArray);
  };

  const caution1Change = (event: ChangeEvent<HTMLInputElement>) => {
    setCaution1(event.target.value);
  };

  const caution2Change = (event: ChangeEvent<HTMLInputElement>) => {
    setCaution2(event.target.value);
  };

  const cautionsChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;
    const cautionsArray = inputValue.split("\n");
    setCautions(cautionsArray);
  };

  const exampleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setExample(event.target.value);
  };

  const mfChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMf(+event.target.value);
  };

  const innateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInnate(event.target.value);
  };

  const del_card = () => {
    // setCard_info((prev) => prev.filter(v => v.innate__num !==innate));
    setCard_info((prev) => prev.filter((v) => v.innate__num !== innate));
    setInnate("");
  };

  return (
    <Back>
      <Register>
        <Mypost>
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              개발자 추천
            </label>
            <select
              onChange={RecommendChange}
              value={recommend}
              className="form-select"
              id="company"
            >
              <option value={""}>선택하세요</option>
              <option value="O">O</option>
              <option value="X">X</option>
            </select>
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupSelect02">
              카드사
            </label>
            <select
              onChange={companyChange}
              value={company}
              className="form-select"
              id="company"
            >
              <option value={""}>선택하세요</option>
              <option value="삼성">삼성</option>
              <option value="신한">신한</option>
              <option value="현대">현대</option>
              <option value="우리">우리</option>
            </select>
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              PDC
            </label>
            <select
              onChange={pdcChange}
              value={pdc}
              className="form-select"
              id="PDC"
            >
              <option value={""}>선택하세요</option>
              <option value="Point">Point</option>
              <option value="Discount">Discount</option>
            </select>
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              메인 혜택
            </label>
            <select
              onChange={main_benefitChange}
              value={main_benefit}
              className="form-select"
              id="Main_bene"
            >
              <option value={""}>선택하세요</option>
              <option value="etc">기타</option>
              <option value="coalition">제휴</option>
              <option value="oil">기름</option>
              <option value="Air">Air</option>
            </select>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="url"
              value={url}
              onChange={urlChange}
            />
            <label htmlFor="floatingInput">Card_URL</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              onChange={picurlChange}
              value={picurl}
              id="pic_url"
              placeholder="url"
            />
            <label htmlFor="floatingInput">Pic_URL</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="card_name"
              placeholder="url"
              value={name}
              onChange={nameChange}
            />
            <label htmlFor="floatingInput">카드 이름</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="month_money"
              placeholder="using"
              value={month_money}
              onChange={month_moneyChange}
            />
            <label htmlFor="floatingInput">전월 이용 금액</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="card_name"
              placeholder="url"
              value={caution1}
              onChange={caution1Change}
            />
            <label htmlFor="floatingInput">전월 이용금액 포함</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="card_name"
              placeholder="url"
              value={caution2}
              onChange={caution2Change}
            />
            <label htmlFor="floatingInput">전월 이용금액 포함</label>
          </div>
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              placeholder="Leave Notices here"
              id="Benefit"
              style={{ height: "100px" }}
              value={benefits.join("\n")}
              onChange={benefitsChange}
            />
            <label htmlFor="floatingTextarea2">혜택</label>
          </div>
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              placeholder="Leave Notices here"
              id="Notice"
              style={{ height: "100px" }}
              value={cautions.join("\n")}
              onChange={cautionsChange}
            />
            <label htmlFor="floatingTextarea2">주의사항</label>
          </div>
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              placeholder="Leave EXs here"
              id="use_ex"
              value={example}
              onChange={exampleChange}
              style={{ height: "100px" }}
            />
            <label htmlFor="floatingTextarea2">사용 예시</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Membership_fee"
              id="MF"
              value={mf}
              onChange={mfChange}
            />
            <label htmlFor="MF">연회비</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="innate_number"
              placeholder="url"
              value={innate}
              onChange={innateChange}
            />
            <label htmlFor="floatingInput">카드 고유 번호</label>
          </div>
          <Buttons>
            <button
              type="button"
              onClick={() => alert("백엔드 구현중")}
              className="btn btn-dark"
            >
              URL 조회
            </button>
            <button
              type="button"
              onClick={() => alert("구축중")}
              className="btn btn-dark"
            >
              카드 조회
            </button>
            <button
              type="button"
              onClick={() => alert("데이터 베이스 미연결")}
              className="btn btn-dark"
            >
              카드 등록
            </button>
            <button
              type="button"
              onClick={() => alert("구축중")}
              className="btn btn-dark"
            >
              카드 수정
            </button>
            <button
              type="button"
              onClick={() =>
                innate ? del_card() : alert("고유번호를 확인해주세요")
              }
              className="btn btn-dark"
            >
              카드 삭제
            </button>
            <button
              type="button"
              onClick={() => alert("구축중")}
              className="btn btn-dark"
            >
              불러오기
            </button>
          </Buttons>
        </Mypost>
      </Register>
      <Cardlist>
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
              innate__num,
            },
            idx
          ) => (
            <Cards key={idx}>
              {timg ? (
                <Img style={{ marginLeft: "50px" }}>
                  <img style={{ height: "190px" }} src={img} />
                </Img>
              ) : rotate ? (
                <>
                  <Img>
                    <img
                      style={{ width: "190px", transform: "rotate(90deg)" }}
                      src={img}
                    />
                  </Img>
                </>
              ) : (
                <Img>
                  <img src={img} />
                </Img>
              )}
              <CardInfo>
                <h5>{cardname}</h5>
                <p>
                  해외: {mfee}, 국내: {Kmfee}
                </p>
                {recommend ? <strong>⭐개발자 추천 카드⭐</strong> : <></>}
                <p>{benefits}</p>
                <p>전월 이용금액 포함: {notice1}</p>
                <p>전월 이용금액 미포함: {notice2}</p>
              </CardInfo>
              <Cardbutton>
                <button
                  type="button"
                  onClick={() => {
                    setInnate(innate__num ?? "");
                  }}
                  className="btn btn-dark"
                >
                  불러오기
                </button>
              </Cardbutton>
            </Cards>
          )
        )}
      </Cardlist>
    </Back>
  );
}

export default Main;
