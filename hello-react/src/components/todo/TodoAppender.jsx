import { memo, useRef } from "react";
import { Alert } from "../ui/Modals";

const TodoAppender = memo(({ onAddClick }) => {
  console.log("TodoAppender");

  //component Rendering을 Delay
  // for (let i = 1; i <= 100000; i++) {
  //   console.log(i);
  // }
  const taskRef = useRef();
  const dateRef = useRef();
  const priorityRef = useRef();

  const alertRef = useRef();
  const onSaveButtonClickHandler = () => {
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

    onAddClick(
      taskRef.current.value,
      dateRef.current.value,
      priorityRef.current.value,
    );
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
      <button type="button" onClick={onSaveButtonClickHandler}>
        Save
      </button>
    </footer>
  );
});

export default TodoAppender;
