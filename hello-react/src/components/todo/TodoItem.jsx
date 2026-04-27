import { useRef } from "react";
import { Confirm } from "../ui/Modals";

const TodoItem = ({ todo, priorities, onDoneChange }) => {
  // props todo의 이름과 todo.todo의 이름이 같아 객체구조 분해 불가
  // toto.todo의 이름을 todoTask로 변경해 할당
  const { id, todo: todoTask, dueDate, priority } = todo;

  const doneClass = todo.isDone ? "done" : "";

  const checkBoxRef = useRef();
  const conFirmRef = useRef();
  const onDoneChangeHandler = () => {
    const checked = checkBoxRef.current.checked;
    let message = "";
    if (checked) {
      message = todo.todo + "완료하시겠습니까?";
    } else {
      message = todo.todo + "취소하시겠습니까?";
    }
    conFirmRef.current.showModal(message);
  };

  const onConfirmOkClickHandler = () => {
    onDoneChange(todo.id, !todo.isDone);
  };
  const onConfirmCloseClickHandler = () => {};

  return (
    <li className="task-item">
      <Confirm
        dialogRef={conFirmRef}
        onOkClick={onConfirmOkClickHandler}
        onCloseClick={onConfirmCloseClickHandler}
      />
      <input
        id={id}
        type="checkbox"
        checked={todo.isDone}
        onChange={onDoneChangeHandler}
        ref={checkBoxRef}
      />
      <label className={doneClass} htmlFor={id}>
        {todoTask}
      </label>
      <span className={`due-date ${doneClass}`}>{dueDate}</span>
      <span className={`priority ${doneClass}`}>{priorities[priority]}</span>
    </li>
  );
};
export default TodoItem;

export const TodoItemForChildren = ({ children }) => {
  return <li classname="tasks-item">{children}</li>;
};
