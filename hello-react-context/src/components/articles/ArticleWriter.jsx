const ArticleWriter = ({
  inputData: { subject, name, content, email },
  onSaveButtonClick,
  onsubjectChange,
  onNameChange,
  onEmailChange,
  onContentChange,
  setState,
}) => {
  return (
    <>
      <li>
        <div>제목</div>
        <input type="text" onChange={onsubjectChange} value={subject} />
        <div>이름</div>
        <input type="text" onChange={onNameChange} value={name} />
        <div>이메일</div>
        <input type="text" onChange={onEmailChange} value={email} />
        <div>내용</div>
        <input type="text" onChange={onContentChange} value={content} />
      </li>
      <button onClick={onSaveButtonClick}>저장</button>
      <button onClick={() => setState(false)}>취소</button>
    </>
  );
};
export default ArticleWriter;
