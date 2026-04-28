/** @format */

import { useRef, useState } from "react";
import { Alert } from "../ui/Modals";

const Input = ({ id, title, type = "text", ...props }) => {
  console.log("Input");
  return (
    <div className="input-field">
      <label htmlFor={id}>{title}</label>
      <input type={type} id={id} {...props} />
    </div>
  );
};

const Textarea = ({ id, title, value = "", onChange = () => {} }) => {
  console.log("Textarea");
  return (
    <div className="input-field">
      <label htmlFor={id}>{title}</label>
      <textarea id={id} onChange={onChange} value={value}></textarea>
    </div>
  );
};

const ArticleWriter2 = ({ onAddArticleClick }) => {
  console.log("ArticleWriter2");

  const subjectRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const contentRef = useRef();

  const alertRef = useRef();

  const [viewMode, setViewMode] = useState("button");

  //저장을 클릭하면 입력했던 값을 가져와 출력한다.
  const onSaveButtonClickHandler = () => {
    console.log("subjectRef", subjectRef.current.value);
    console.log("nameRef", nameRef.current.value);
    console.log("emailRef", emailRef.current.value);
    console.log("contentRef", contentRef.current.value);

    console.log("alert", alertRef);

    if (!subjectRef.current.value) {
      alertRef.current.showModal("제목을 입력해주세요");
      return;
    }
    if (!nameRef.current.value) {
      alertRef.current.showModal("이름을 입력해주세요");
      return;
    }
    if (!emailRef.current.value) {
      alertRef.current.showModal("이메일을 입력해주세요");
      return;
    }
    if (!contentRef.current.value) {
      alertRef.current.showModal("내용을 입력해주세요");
      return;
    }

    onAddArticleClick(
      subjectRef.current.value,
      nameRef.current.value,
      emailRef.current.value,
      contentRef.current.value,
    );
    subjectRef.current.value = "";
    nameRef.current.value = "";
    emailRef.current.value = "";
    contentRef.current.value = "";
  };

  const onViewChangeButtonClickHandler = (viewName) => {
    setViewMode(viewName);
    // if (viewName === "button") {
    // }
  };

  return (
    <div className="article-writer">
      {viewMode === "button" && (
        <button
          type="button"
          onClick={onViewChangeButtonClickHandler.bind(this, "form")}
        >
          글쓰기
        </button>
      )}
      {viewMode === "form" && (
        <>
          <Alert dialogRef={alertRef} />

          <Input id="subject" title="제목" ref={subjectRef} />
          <Input id="name" title="이름" ref={nameRef} />
          <Input id="email" title="이메일" ref={emailRef} />
          <Input id="content" title="내용" ref={contentRef} />

          <button
            type="button"
            className="positive-button"
            onClick={onSaveButtonClickHandler}
          >
            저장
          </button>
          <button
            type="button"
            className="negative-button"
            onClick={onViewChangeButtonClickHandler.bind(this, "button")}
          >
            취소
          </button>
        </>
      )}
    </div>
  );
};
export default ArticleWriter2;
