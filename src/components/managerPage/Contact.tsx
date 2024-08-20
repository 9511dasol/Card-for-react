import React, { useState } from "react";
import styled from "styled-components";

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  min-height: 90vh;
`;
const Card = styled.div`
  margin-top: 20px;
`;

const Card_info = styled.div`
  background: #263343;
  color: white;
  padding: 25px;
`;

interface Contact {
  content: string;
  name: string;
  email: string;
  num: number;
}

const contacts: Contact[] = [
  {
    content: "카드는 어디서 만들죠 ?",
    name: "홍길동",
    email: "www@naver.com",
    num: 0,
  },
  {
    content: "카드 이벤트는 없나요 ?",
    name: "김아무개",
    email: "k@gmail.com",
    num: 1,
  },
  
  { content: "카드는 연회비 캐시백 이벤트는 언제 진행하나요 ?", name: "안아무개", email: "ahn@daum.net", num: 2 },
];

function Contact() {
  const [contents, setContents] = useState<Contact[]>(contacts);

  const del = (n:number) => setContents((prev) => [...prev].filter(v => v.num !== n));

  return (
    <Cards>
      {contents.map(({ content, name, email, num }) => (
        <Card className="card" key={num}>
          <Card_info>
            <div className="blockquote mb-0">
              <p style={{ marginBottom: "30px" }}>{content}</p>
              <footer className="blockquote-footer">{name}</footer>
              <footer className="blockquote-footer">{email}</footer>
              <button onClick={() => del(num)} type="button" className="btn btn-dark">
                삭제
              </button>
            </div>
          </Card_info>
        </Card>
      ))}
    </Cards>
  );
}

export default Contact;
