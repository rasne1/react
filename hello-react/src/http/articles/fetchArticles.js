export const fetchArticleById = async (id) => {
  const fetchResult = await fetch(
    `http://192.168.211.23:8080/api/articles/${id}`,
  );
  try {
    const articleResult = await fetchResult.json();
    return articleResult;
  } catch (e) {
    return { error: "서비스가 잠시 중단되었습니다." };
  }
};

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

export const fetchJsonWebToken = async (id, password) => {
  try {
    const loginResponse = await fetch(
      `http://192.168.211.23:8080/api/authoriztion`,
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

export const fetchMyInfo = async (token) => {
  try {
    const loginResponse = await fetch(
      `http://192.168.211.23:8080/api/member/me`,
      {
        method: "GET",
        headers: { Authorization: token },
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

export const fetchAddArticle = async (jwt, subject, content, attachFile) => {
  try {
    const formData = new FormData();
    formData.append("subject", subject);
    formData.append("content", content);
    //attachFile ==> FileList 배열.
    //FileList 내에 존재하는 파일 객체들을 attachFile로 하나씩 할당.
    for (const file of attachFile) {
      formData.append("attachFile", file);
    }
    const articlesResponse = await fetch(
      `http://192.168.211.23:8080/api/articles`,
      {
        method: "POST",
        headers: { Authorization: jwt },
        body: formData,
      },
    );
    const addReuslt = await articlesResponse.json();
    return addReuslt;
  } catch (e) {
    return {
      result: false,
      error: "서비스가 잠시 중단되었습니다. 잠시 후 다시 시도해주세요.",
    };
  }
};
