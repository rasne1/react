// articles.json 파일 불러오기
import { useEffect, useRef, useState } from "react";
import ArticleHeader from "./ArticleHeader.jsx";
import ArticleList from "./ArticleList.jsx";
import ArticleWriter2 from "./ArticleWriter2.jsx";
import {
  fetchAddArticle,
  fetchArticleList,
  fetchJsonWebToken,
} from "../../http/articles/fetchArticles.js";
import { getValidationReuslt } from "../../utils/errorHandler.js";
import { isString } from "../../utils/type.js";

const ArticleMain = () => {
  // state를 변경했다!
  // 컴포넌트가 재실행된다. (props의 전달 여부 관계 없이.)
  console.log("ArticleMain");

  const [viewPageNO, setViewPageNO] = useState(0);

  const [token, setToken] = useState();
  const [loginErrors, setLoginErrors] = useState();

  const writerRef = useRef();

  const idRef = useRef();
  const passwordRef = useRef();

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

  const onAddArticleClickHandler = async (subject, content, attachFile) => {
    const fetchAddResult = await fetchAddArticle(
      token,
      subject,
      content,
      attachFile,
    );

    if (fetchAddResult.error) {
      writerRef.current.setResponseError(fetchAddResult.error);
    } else {
      refreshArticleList();
    }
  };

  const onLoginClickHandler = async () => {
    const id = idRef.current.value;
    const password = passwordRef.current.value;
    const articleLogin = await fetchJsonWebToken(id, password);
    console.log(id, password);

    if (articleLogin.error) {
      if (isString(articleLogin.error)) {
        setLoginErrors(articleLogin.error);
      } else {
        setLoginErrors(getValidationReuslt(articleLogin.error));
      }
    }
    setToken(articleLogin.token);
  };

  return (
    <div className="wrapper">
      <div>{count}개의 게시글이 검색되었습니다.</div>
      {!token && (
        <div>
          {isString(loginErrors) && <div>{loginErrors}</div>}
          <div>
            <div>아이디</div>
            <input type="text" ref={idRef} />
            {loginErrors?.email && <div>{loginErrors.email}</div>}
            <div>패스워드</div>
            <input type="password" ref={passwordRef} />
            {loginErrors?.password && <div>{loginErrors.password}</div>}
          </div>
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
      <ArticleWriter2
        errorHandlerRef={writerRef}
        onAddArticleClick={onAddArticleClickHandler}
      />
    </div>
  );
};
export default ArticleMain;
