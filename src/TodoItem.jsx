const TodoItem = ({ completed, id, title, toggleTodo, deleteTodo }) => {
    return ( 
        <li key={id}>
        <label>
            <input type="checkbox" 
          onChange={e => toggleTodo(id, e.target.changed)} checked={completed} 
            />
            {title}
        </label>
        <button 
        onClick={ () => deleteTodo(id) } 
        className="btn btn-danger">Delete</button>
        </li>
    );
}
 
export default TodoItem;