// articles.json 파일 불러오기
import { useEffect, useRef, useState } from "react";
import ArticleHeader from "./ArticleHeader.jsx";
import ArticleList from "./ArticleList.jsx";
import ArticleWriter2 from "./ArticleWriter2.jsx";
import {
  fetchArticleList,
  fetchJsonWebToken,
} from "../../http/articles/fetchArticles.js";

const ArticleMain = () => {
  // state를 변경했다!
  // 컴포넌트가 재실행된다. (props의 전달 여부 관계 없이.)
  console.log("ArticleMain");

  const [viewPageNO, setViewPageNO] = useState(0);

  const [token, setToken] = useState(null);

  const onPaginationButtonClickHandler = (nextPageNo) => {
    setViewPageNO(nextPageNo);
  };

  const [
    {
      count,
      result: articles,
      pagination: { pageNo = 0, pageCount = 0 },
    },
    setArticles,
  ] = useState({
    count: 0,
    result: [],
    pagination: {},
  });

  const refreshArticleList = async () => {
    const articleList = await fetchArticleList(viewPageNO);
    const {
      result: { count, result },
      pagination,
    } = articleList;

    setArticles({ count, result, pagination });

    if (articleList.error) {
      alert(articleList.error);
    }
  };
  useEffect(() => {
    refreshArticleList();
  }, [viewPageNO]);

  const onAddArticleClickHandler = (subject, name, email, content) => {
    setArticles((prevData) => [
      ...prevData,
      {
        id: prevData.length + 1,
        subject,
        content,
        email,
        viewCnt: parseInt(Math.random() * 10000),
        crtDt: "2026-04-29",
        mdfyDt: null,
        fileGroupId: null,
        membersVO: { email, name },
        files: [],
      },
    ]);
  };

  const idRef = useRef();
  const passwordRef = useRef();

  const onLoginClickHandler = async () => {
    const id = idRef.current.value;
    const password = passwordRef.current.value;
    const articleLogin = await fetchJsonWebToken(id, password);
    console.log(id, password);

    if (articleLogin.error) {
      return alert(articleLogin.error);
    }
    setToken(articleLogin.token);
  };

  return (
    <div className="wrapper">
      <div>{count}개의 게시글이 검색되었습니다.</div>
      {token === null && (
        <div>
          <div>아이디</div>
          <input type="text" ref={idRef} />
          <div>패스워드</div>
          <input type="password" ref={passwordRef} />
          <button onClick={onLoginClickHandler}>login</button>
        </div>
      )}

      <table>
        <ArticleHeader />
        <ArticleList contents={articles} />
      </table>
      <div>
        {pageNo > 0 && (
          <button
            onClick={onPaginationButtonClickHandler.bind(this, pageNo - 1)}
          >
            이전
          </button>
        )}
        {pageNo === 0 && pageCount - 1 > pageNo && (
          <button
            onClick={onPaginationButtonClickHandler.bind(this, pageNo + 1)}
          >
            다음
          </button>
        )}
      </div>
      <ArticleWriter2 onAddArticleClick={onAddArticleClickHandler} />
    </div>
  );
};
export default ArticleMain;
