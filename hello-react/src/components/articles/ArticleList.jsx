const ArticleList = ({ articleData }) => {
  return (
    <>
      {articleData.articles.map((articles) => (
        <tr>
          <td>{articles.id}</td>
          <td>{articles.subject}</td>
          <td>{articles.email}</td>
          <td>{articles.crtDt}</td>
          <td>{articles.mdfyDt}</td>
        </tr>
      ))}
    </>
  );
};
export default ArticleList;
