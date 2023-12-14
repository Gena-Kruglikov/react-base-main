import styles  from './Todo.module.css';
import { RiDeleteBack2Line, RiTodoFill } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';

function Todo({ todo, deleteTodo }) {
    return (
        <div className={styles.todo} onDoubleClick={() => deleteTodo(todo.id)}>
            <RiTodoFill className={styles.todoIcon} />
            <div className={styles.todoText}>{todo.text}</div>
            <RiDeleteBack2Line className={styles.checkIcon}
            onClick={() => deleteTodo(todo.id)} 
            />
            <FaCheck className={styles.deleteTodo} />
        </div>
    ); 
}

export default Todo;