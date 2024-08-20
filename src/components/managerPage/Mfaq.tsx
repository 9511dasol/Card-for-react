import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { category, qnaList, categories, qnaLists } from "../ingedients";
import "./Mfaq.css";

interface props {
  categories: category[];
  category: string;
  setCatecory: Dispatch<SetStateAction<string>>;
  SetList: Dispatch<SetStateAction<qnaList[]>>;
}

const LS_KEY_CATEGORY = "LS_KEY_CATEGORY";

const Faqq = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  user-select: none;
`;

const MinFaq = styled.div`
  min-height: 57vh;
`;

const CategorySet = styled.div`
  margin-top: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const FaqCard = styled.div`
  display: flex;
  margin-top: 10px;
  width: 100%;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  border: 1px solid black;
  border-radius: 20px;
  flex-direction: column;
  color: white;
`;

const FaqCardTitle = styled.div`
  display: flex;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  align-items: center;
  cursor: pointer;
`;
const QuestionMark = styled.span`
  color: rgb(12, 77, 162);
  font-size: 20px;
  margin-right: 10px;
`;

const AnswerMark = styled.span`
  color: skyblue;
  font-size: 20px;
  margin-right: 10px;
`;

const FaqParent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FaqList = styled.div`
  width: 80%;
`;

const Create = styled.div`
  position: absolute;
  top: 0;
  right: 200px;
  button{
    font-size: 20px;
    background: transparent;
    color: white;
    outline: none;
    cursor: pointer;
    border: 0;
  }
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
    <CategorySet>
      {makeCategories()}
      <Create>
        <button onClick={() => alert("공사중")}>+</button>
      </Create>
    </CategorySet>
  );
}

function Mfaq() {
  const [category, setCatecory] = useState<string>("all");
  const [list, SetList] = useState<qnaList[]>(qnaLists);

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
      <FaqCard key={index}>
        <FaqCardTitle
          onClick={() => {
            let temp = [...list];
            temp[index].show = !temp[index].show;
            SetList([...temp]);
          }}
        >
          <QuestionMark>Q.</QuestionMark>
          <span>{item.question}</span>
        </FaqCardTitle>
        <div
          className={
            list[index].show
              ? "faq-card-answer"
              : "faq-card-answer faq-card-none"
          }
        >
          <AnswerMark>A.</AnswerMark>
          <span className="FAQ-card-answer">{item.answer}</span>
        </div>
      </FaqCard>
    );
  };

  return (
    <Faqq>
      <MinFaq>
        <CategoryFilter
          categories={categories}
          category={category}
          setCatecory={setCatecory}
          SetList={SetList}
        />
        {/* 카테고리 만들기 */}
        <FaqParent>
          <FaqList>
            {list.map((item, index) => getQnACard(item, index))}
          </FaqList>
        </FaqParent>
        {/* 질문 리스트 만듥 */}
      </MinFaq>
    </Faqq>
  );
}

export default Mfaq;
