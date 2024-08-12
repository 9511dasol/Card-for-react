import { send } from "process";
import { useState } from "react";
import styled from "styled-components";

const Contact = styled.div`
  min-height: 57vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Mypost = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0px 0px 3px 0px black;
  padding: 50px;
`;

const Mybtns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

function UserContact() {
  const [email, setEmail] = useState<string>("");
  const [name, setNmae] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const Reset = () => {
    setEmail("");
    setNmae("");
    setContent("");
  };

  const Send = () => {
    console.log(email, name, content);
    Reset();
  };

  return (
    <Contact>
      <Mypost>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>E-Mail</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="name"
            value={name}
            onChange={(e) => setNmae(e.target.value)}
          />
          <label htmlFor="floatingInput">이름</label>
        </div>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            id="comment"
            style={{ height: "200px" }}
          ></textarea>
          <label htmlFor="floatingTextarea2">문의내용</label>
        </div>
        <Mybtns>
          <button type="button" onClick={Send} className="btn btn-dark">
            보내기
          </button>
          <button type="button" onClick={Reset} className="btn btn-outline-dark">
            초기화
          </button>
        </Mybtns>
      </Mypost>
    </Contact>
  );
}

export default UserContact;
