import {Component} from 'react'

import './index.css'

import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {usingTodoList: initialTodosList}

  onDelete = id => {
    const {usingTodoList} = this.state
    const filteredTodoList = usingTodoList.filter(each => each.id !== id)
    this.setState({usingTodoList: filteredTodoList})
  }

  render() {
    const {usingTodoList} = this.state
    return (
      <div className="main-container">
        <div className="second-container">
          <h1>Simple Todos</h1>
          <ul>
            {usingTodoList.map(each => (
              <TodoItem todo={each} key={each.id} deleteTodo={this.onDelete} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
