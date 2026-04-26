const ArticleList = ({ articleData }) => {
  return (
    <>
      {articleData.map((articles) => (
        <tr key={articles.id}>
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
