import { memo, useRef, useState } from "react";
import { Alert } from "../ui/Modals";
import { fetchAddTodo, fetchTodoList } from "../../http/todo/fetchTodo";
import { useDispatch } from "react-redux";
import { todoAction } from "../../stores/toolkit/slices/todoSlice";

const TodoAppender = memo(() => {
  console.log("TodoAppender");
  const [isFetching, setIsFetcing] = useState(false);
  //component Rendering을 Delay
  // for (let i = 1; i <= 100000; i++) {
  //   console.log(i);
  // }
  const taskRef = useRef();
  const dateRef = useRef();
  const priorityRef = useRef();
  const reactReduxDispatcher = useDispatch();

  const alertRef = useRef();

  const onSaveButtonClickHandler = async () => {
    if (!taskRef.current.value) {
      alertRef.current.showModal("task 입력하세요");
      return;
    }
    if (!dateRef.current.value) {
      alertRef.current.showModal("날짜 입력하세요");
      return;
    }
    if (!priorityRef.current.value) {
      alertRef.current.showModal("우선순위 입력하세요");
      return;
    }

    console.log(taskRef.current.value);

    setIsFetcing(true);
    const addResult = await fetchAddTodo(
      taskRef.current.value,
      dateRef.current.value,
      priorityRef.current.value,
    );
    setIsFetcing(false);

    if (addResult.errors) {
      alert(addResult.errors);
    }

    const fetchResult = await fetchTodoList();

    reactReduxDispatcher(todoAction.refresh(fetchResult.body));

    taskRef.current.value = "";
    dateRef.current.value = "";
    priorityRef.current.value = "";
  };

  return (
    <footer>
      <Alert dialogRef={alertRef} />
      <input type="text" placeholder="Task" ref={taskRef} />
      <input type="date" ref={dateRef} />
      <select ref={priorityRef}>
        <option value="">우선순위</option>
        <option value="1">높음</option>
        <option value="2">보통</option>
        <option value="3">낮음</option>
      </select>
      <button
        type="button"
        disabled={isFetching}
        onClick={onSaveButtonClickHandler}
      >
        {isFetching ? "저장중..." : "저장"}
      </button>
    </footer>
  );
});

export default TodoAppender;
