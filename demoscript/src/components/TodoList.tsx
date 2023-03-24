import classes from "./TodoList.module.css";

const TodoList: React.FC<{
  list: string;
  onRemoveTodo: (event: React.MouseEvent) => void;
}> = (props) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.list}
    </li>
  );
};

export default TodoList;
