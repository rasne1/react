export const fetchArticleList = async (pageNo = 0, listSize = 10) => {
  try {
    const articlesResponse = await fetch(
      `http://192.168.211.23:8080/api/articles?pageNo=${pageNo}&listSize=${listSize}`,
    );
    const articleList = await articlesResponse.json();
    return articleList;
  } catch (e) {
    return {
      result: { count: 0, result: [] },
      pagination: {},
      error: "서비스가 잠시 중단되었습니다. 잠시 후 다시 시도해주세요.",
    };
  }
};

export const fetchJsonWebToken = (id, password) => {};

export const fetchAddArticle = () => {};
