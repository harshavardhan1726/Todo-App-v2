import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems }) => {
  return (
    <div className="items-container">
      <TodoItem todoDate={todoItems.name} todoName="Buy Milk"></TodoItem>
      <TodoItem todoDate="09/10/2023" todoName="Buy Milk"></TodoItem>
    </div>
  );
};

export default TodoItems;
