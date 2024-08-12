import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import "./Faq.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import UserContact from "./UserContact";

interface category {
  name: string;
  value: string;
}

interface qnaList {
  show: boolean;
  category: string;
  question: string;
  answer: string;
}

const categories: category[] = [
  {
    name: "자주 묻는 질문",
    value: "all",
  },
  {
    name: "카드 추천 기준",
    value: "Recommend",
  },
  {
    name: "카테고리 2",
    value: "category2",
  },
  {
    name: "카테고리 3",
    value: "category3",
  },
];

const qnaLists: qnaList[] = [
  {
    show: false,
    category: "Recommend",
    question: "카드 추천에 대한 출처가 어디인가요 ?",
    answer: "특정 커뮤니티입니다.",
  },
  {
    show: false,
    category: "category2",
    question: "what is that ? 2!",
    answer: "this is react. 2!",
  },
  {
    show: false,
    category: "category3",
    question: "what is that ? 3!",
    answer: "this is react. 3!",
  },
  {
    show: false,
    category: "Recommend",
    question: "what is that ? 4!",
    answer: "this is react. 4!",
  },
  {
    show: false,
    category: "category2",
    question: "what is that ? 5!",
    answer: "this is react. 5!",
  },
  {
    show: false,
    category: "category3",
    question: "what is that ? 6",
    answer: "this is react. 6",
  },
];

interface props {
  categories: category[];
  category: string;
  setCatecory: Dispatch<SetStateAction<string>>;
}

const LS_KEY_CATEGORY = "LS_KEY_CATEGORY";

const Faqq = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 90vh;
`;

const Q = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 33.9vh;
  width: 100%;
`;

const MinFaq = styled.div`
  min-height: 57vh;
`;

function CategoryFilter({ categories, category, setCatecory }: props) {
  const makeCategories = () => {
    return categories.map((item, idx) => (
      <div
        key={idx}
        className={
          item.value === category ? "category-child selected" : "category-child"
        }
        onClick={() => setCatecory(item.value)}
      >
        {item.name}
      </div>
    ));
  };

  const init = () => {
    let data = localStorage.getItem(LS_KEY_CATEGORY);
    if (data !== null) setCatecory(data);
  };

  useEffect(init, []);

  return (
    <div>
      <div className="category-set">{makeCategories()}</div>
    </div>
  );
}

function Faq() {
  const [category, setCatecory] = useState<string>("all");
  const [list, SetList] = useState<qnaList[]>(qnaLists);
  const [contact, SetContact] = useState<boolean>(true);
  const [confaq, Setconfaq] = useState<string>("1:1 문의하기");

  const click = () => {
    SetContact(!contact);
    Setconfaq(() => (contact ? "1:1 문의하기" : "FAQ"));
  };
  useEffect(() => {
    SetList(
      qnaLists.filter((item) => {
        if (category === "all") return true;
        if (category === item.category) return true;
        return false;
      })
    );
  }, [category]);

  const getQnACard = (item: qnaList, index: number) => {
    return (
      <div className="faq-card" key={index}>
        <div
          className="faq-card-title"
          onClick={() => {
            let temp = [...list];
            temp[index].show = !temp[index].show;
            SetList([...temp]);
          }}
        >
          <span className="question-mark">Q.</span>
          <span>{item.question}</span>
        </div>
        <div
          className={
            list[index].show
              ? "faq-card-answer"
              : "faq-card-answer faq-card-none"
          }
        >
          <span className="answer-mark">A.</span>
          <span className="FAQ-card-answer">{item.answer}</span>
        </div>
      </div>
    );
  };

  return (
    <Faqq>
      {contact ? (
        <MinFaq>
          <CategoryFilter
            categories={categories}
            category={category}
            setCatecory={setCatecory}
          />
          {/* 카테고리 만들기 */}
          <div className="fqa-parent">
            <div className="faq-list">
              {list.map((item, index) => getQnACard(item, index))}
            </div>
          </div>
          {/* 질문 리스트 만듥 */}
        </MinFaq>
      ) : (
        <UserContact />
      )}

      <Q>
        <button onClick={click} className="btn btn-outline-dark">
          {confaq}
        </button>
      </Q>
    </Faqq>
  );
}

export default Faq;

// contact ? (

// ) : (
//   <UserContact/>
// );
