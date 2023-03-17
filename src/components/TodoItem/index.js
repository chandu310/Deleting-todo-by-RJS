// Write your code here
import './index.css'

const TodoItem = props => {
  const {todo, deleteTodo} = props
  const {id, title} = todo

  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="todo-line">
      <p className="para">{title}</p>
      <button onClick={onDelete} type="button">
        Delete
      </button>
    </li>
  )
}
export default TodoItem
