export const fetchArticleList = async (pageNo = 0, listSize = 10) => {
  try {
    const articlesResponse = await fetch(
      `http://220.76.62.226:8080/api/articles?pageNo=${pageNo}&listSize=${listSize}`,
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

export const fetchJsonWebToken = async (id, password) => {
  try {
    const loginResponse = await fetch(
      `http://220.76.62.226:8080/api/authoriztion`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: id, password: password }),
      },
    );

    const loginResult = await loginResponse.json();
    console.log("서버응답:", loginResult);
    return loginResult;
  } catch (e) {
    return {
      error: "아이디 또는 비밀번호가 일치하지 않습니다.",
      status: 400,
    };
  }
};

export const fetchAddArticle = () => {};
