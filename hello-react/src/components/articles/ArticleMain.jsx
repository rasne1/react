// articles.json 파일 불러오기
import { useState } from "react";
import ArticleHeader from "./ArticleHeader";
import ArticleList from "./ArticleList";
import articleData from "./articles.json";
import ArticleWriter from "./ArticleWriter";

const ArticleMain = () => {
  const [articles, setArticles] = useState(articleData.articles);
  const [{ subject, name, content, email }, setnewAriticle] = useState({
    subject: "",
    name: "",
    content: "",
    email: "",
    crtDt: "",
  });
  const [state, setState] = useState(false); // 화면

  const onSaveButtonClickHandler = () => {
    setArticles((prevData) => [
      ...prevData,
      {
        id: prevData.length + 1,
        subject,
        name,
        content,
        email,
        crtDt: "2026-04-24",
        mdfyDt: "2026-04-24",
      },
    ]);
    setnewAriticle({ subject: "", name: "", email: "", content: "" });
  };
  const onSubjectChangeHandler = (event) => {
    setnewAriticle((prevData) => ({
      ...prevData,
      subject: event.target.value,
    }));
  };
  const onNameChangeHandler = (event) => {
    setnewAriticle((prevData) => ({ ...prevData, name: event.target.value }));
  };
  const onEmailChangeHandler = (event) => {
    setnewAriticle((prevData) => ({ ...prevData, email: event.target.value }));
  };
  const onContentChangeHandler = (event) => {
    setnewAriticle((prevData) => ({
      ...prevData,
      content: event.target.value,
    }));
  };

  return (
    <div className="wrapper">
      <table>
        <thead>
          <ArticleHeader />
        </thead>
        <tbody>
          <ArticleList articleData={articles} />
        </tbody>
      </table>
      <div>
        {state ? (
          <button onClick={() => setState(false)}>글쓰기</button>
        ) : (
          <ArticleWriter
            inputData={{
              subject,
              name,
              content,
              email,
            }}
            setState={setState}
            onSaveButtonClick={onSaveButtonClickHandler}
            onsubjectChange={onSubjectChangeHandler}
            onNameChange={onNameChangeHandler}
            onEmailChange={onEmailChangeHandler}
            onContentChange={onContentChangeHandler}
          />
        )}
      </div>
    </div>
  );
};
export default ArticleMain;
