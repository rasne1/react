// articles.json 파일 불러오기
import ArticleHeader from "./ArticleHeader";
import ArticleList from "./ArticleList";
import articleData from "./articles.json";
import ArticleWriter from "./ArticleWriter";

const ArticleMain = () => {
  console.log(articleData);
  return (
    <div className="wrapper">
      <table>
        <thead>
          <ArticleHeader />
        </thead>
        <tbody>
          <ArticleList articleData={articleData} />
        </tbody>
      </table>
      <ArticleWriter />
    </div>
  );
};
export default ArticleMain;
