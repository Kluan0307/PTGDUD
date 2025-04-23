// src/features/todo/TodoList.jsx
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, toggleTodo, removeTodo } from '../slice/todoSlice'
import { useState } from 'react'

export default function TodoList() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  const [text, setText] = useState("")

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text))
      setText("")
    }
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">📝 To-do List</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          className="flex-grow border rounded px-2 py-1"
          placeholder="Nhập công việc..."
        />
        <button onClick={handleAdd} className="bg- text-black px-4 py-1 rounded">
          Thêm
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map(todo => (
          <li key={todo.id} className="flex items-center justify-between border-b pb-1">
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              className={`cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-red-500 hover:underline text-sm"
            >
              Xoá
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
