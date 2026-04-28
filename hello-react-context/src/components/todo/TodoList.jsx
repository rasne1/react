import { useContext } from "react";
import { Confirm } from "../ui/Modals";
import TodoItem, { TodoItemForChildren } from "./TodoItem";
import { TodoContext } from "./context/Todocontext";

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  const priorities = ["없음", "높음", "보통", "낮음"];
  return (
    <>
      <Confirm />
      {todos.map(({ id }) => (
        <TodoItem key={id} id={id} priorities={priorities} />

        // <TodoItemForChildren>
        //   <input id={todo.id} type="checkbox" />
        //   <label htmlFor={todo.id}>{todo.todo}</label>
        //   <span className="due-date">{todo.dueDate}</span>
        //   <span className="priority">{priorities[todo.priority]}</span>
        // </TodoItemForChildren>
      ))}
    </>
  );
};

export default TodoList;
