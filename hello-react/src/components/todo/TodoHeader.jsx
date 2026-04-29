import { useRef } from "react";
import { Confirm } from "../ui/Modals";
import { useContext } from "react";
import TodoContext from "./contexts/TodoContext";

const TodoHeader = ({ onAllDoneChange, count }) => {
  console.log("TodoHeader");
  const conFirmRef = useRef();
  const checkBoxRef = useRef();
  const { componentName } = useContext(TodoContext);
  if (!componentName || componentName !== "TodoGrid") {
    return <></>;
  }
  const onAllDoneChangeHandler = () => {
    const checked = checkBoxRef.current.checked;
    let message = "";
    if (checked) {
      message = "완료 하시겠습니까?";
    } else {
      message = "미완료 하시겠습니까?";
    }
    conFirmRef.current.showModal(message);
  };

  const onConfirmOkClickHandler = () => {
    onAllDoneChange(checkBoxRef.current.checked);
  };
  const onConfirmCloseClickHandler = () => {
    checkBoxRef.current.checked = !checkBoxRef.current.checked;
  };

  return (
    <>
      <li className="tasks-counter">
        <div>전체:{count.all}</div>
        <div>진행중:{count.process}</div>
        <div>완료:{count.done}</div>
      </li>
      <li className="tasks-header">
        <Confirm
          dialogRef={conFirmRef}
          onOkClick={onConfirmOkClickHandler}
          onCloseClick={onConfirmCloseClickHandler}
        />
        <input
          id="checkall"
          type="checkbox"
          onChange={onAllDoneChangeHandler}
          ref={checkBoxRef}
        />
        <label>Task</label>
        <span className="due-date">Due date</span>
        <span className="priority">Priority</span>
      </li>
    </>
  );
};
export default TodoHeader;
