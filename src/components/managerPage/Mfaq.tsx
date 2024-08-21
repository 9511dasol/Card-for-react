import React, {
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
  ChangeEvent,
} from "react";
import styled from "styled-components";
import { category, qnaList, categories, qnaLists } from "../ingedients";
import "./Mfaq.css";
import Modal from "react-modal";
interface props {
  categories: category[];
  category: string;
  setCatecory: Dispatch<SetStateAction<string>>;
  setTempp: Dispatch<SetStateAction<qnaList[]>>;
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
  button {
    font-size: 20px;
    background: transparent;
    color: white;
    outline: none;
    cursor: pointer;
    border: 0;
  }
`;

const ModalBtn = styled.div`
  display: flex;
  justify-content: space-evenly;

  button {
    outline: none;
    border: none;
    background: transparent;
  }
  button:hover {
    background: rgba(255, 255, 255, 0.152);
  }
`;

const Modalclose = styled.button`
  outline: none;
  border: none;
  position: absolute;
  right: 15px;
  background: transparent;
  top: 7px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-item: center;
  justify-content: center;
  height: 100%;
`;

const Select = styled.div`
  display: flex;
  width: 100%;
  margin: 5px 0;
`;

function CategoryFilter({
  categories,
  category,
  setCatecory,
  setTempp,
}: props) {
  const [modalIsOpen, setModalIs] = useState<boolean>(false);
  const [cate, Setcate] = useState<string>();
  const [q, setQ] = useState<string>();
  const [a, setA] = useState<string>();

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

  const addFaq = () => {
    if (cate && q && a) {
      setTempp((prev) => {
        Setcate("");
        setA("");
        setQ("");
        setModalIs((prev) => !prev);
        return [
          ...prev,
          {
            show: false,
            category: cate as string,
            question: q as string,
            answer: a as string,
          },
        ];
      });
    } else {
      alert("입력란을 확인해세요");
    }
  };
  const refresh = () => {
    Setcate("");
    setA("");
    setQ("");
  };
  const categoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    Setcate(event.target.value);
  };

  return (
    <CategorySet>
      {makeCategories()}
      <Create>
        <button onClick={() => setModalIs(true)}>+</button>
      </Create>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIs(false)}
        contentLabel="Example Modal"
        style={{
          content: {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            background: "darkgray",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
        }}
      >
        <Modalclose onClick={() => setModalIs((prev) => !prev)}>x</Modalclose>
        <h2 style={{textAlign: "center", marginTop: "1px"}}>FAQ 등록하기</h2>
        <Form>
          <Select>
            <label className="input-group-text">카테고리</label>
            <select
              className="form-select"
              onChange={categoryChange}
              value={cate}
            >
              <option value={""}>전체</option>
              {categories.map(({ name, value }, idx) =>
                value !== "all" ? (
                  <option key={idx} value={value}>
                    {name}
                  </option>
                ) : null
              )}
            </select>
          </Select>

          <Select className="form-floating">
            <input
              type="text"
              className="form-control"
              id="card_name"
              placeholder="url"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <label htmlFor="floatingInput">Question</label>
          </Select>
          <Select className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave Notices here"
              id="Notice"
              style={{ height: "100px" }}
              value={a}
              onChange={(e) => setA(e.target.value)}
            />
            <label htmlFor="floatingTextarea2">Answer</label>
          </Select>
        </Form>
        <ModalBtn>
          <button onClick={addFaq}>새로 만들기</button>
          <button onClick={refresh}>초기화</button>
        </ModalBtn>
      </Modal>
    </CategorySet>
  );
}

Modal.setAppElement("#root");

function Mfaq() {
  const [category, setCatecory] = useState<string>("all");
  const [list, setList] = useState<qnaList[]>(qnaLists); // 보여주기
  const [tempp, setTempp] = useState<qnaList[]>(list); // 초기 설정, 데이터베이스 설정, 가변 가능
  useEffect(() => {
    // 보여주기
    setList(
      tempp.filter((item) => {
        if (category === "all") {
          return true;
        } else if (category === item.category) {
          return true;
        } else {
          return false;
        }
      })
    );
  }, [category, tempp]);

  const getQnACard = (item: qnaList, index: number) => {
    return (
      <FaqCard key={index}>
        <FaqCardTitle
          onClick={() => {
            let temp = [...list];
            temp[index].show = !temp[index].show;
            setList([...temp]);
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
          setTempp={setTempp}
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
