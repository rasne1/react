const ArticleHeader = () => {
  return (
    <tr>
      <th className="articleNo">게시글 번호</th>
      <th className="subject">제목</th>
      <th className="email">작성자</th>
      <th className="crtDt">작성일</th>
      <th className="mdfyDt">수정일</th>
    </tr>
  );
};
export default ArticleHeader;
