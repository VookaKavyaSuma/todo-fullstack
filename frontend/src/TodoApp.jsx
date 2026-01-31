import { useState } from 'react';
import todoLogo from './assets/todoList.jpg';
import './TodoApp.css';
import { v4 as uuidv4 } from 'uuid';

export default function TodoApp() {
    
    let [todos , setTodos] = useState([]);
    let [newTask, setNewTask] = useState("");

    let addNewTask = () => {
        setTodos(
            (prevTodos) => {
                return [...prevTodos, {newTask , id : uuidv4()}]
            }
        );
        setNewTask("");
    }

    let updateTodoValue = (event) => {
        setNewTask(event.target.value);
    }

    let deleteAllTodoValue = () => {
        setTodos([]);
        setCount(0);
    }

    let removeTodoValue = (id) => {
        setTodos(() => todos.filter((prevTodos) => prevTodos.id != id));
    }

    return (
        <div className='todo-list-component'>
            <div className='todo-list-header'>
                <img src={todoLogo} alt="Todo List Logo" className="todo-list-logo"/>
                <h2 className='todo-list-heading'>Your Todo Task List</h2>
            </div>
            <div className='todo-options'>
                <label htmlFor='todo-task' className='todo-options-label'><b>Task : </b></label>
                <input type="text" placeholder="Enter your todo task" value={newTask} onChange={updateTodoValue} className='todo-task'/>
                &nbsp;&nbsp;
                <button onClick={addNewTask}>Add</button>
                &nbsp;&nbsp;
                <button onClick={deleteAllTodoValue}>Delete All</button>
                &nbsp;&nbsp;
                <button>Total = {todos.length}</button>
            </div>
            <div className='todo-options-small'>
                <label htmlFor='todo-task' className='todo-options-label'><b>Task : </b></label>
                <input type="text" placeholder=" Your task.." value={newTask} onChange={updateTodoValue} className='todo-task'/>
                &nbsp;&nbsp;
                <button onClick={addNewTask}>➕</button>
                &nbsp;&nbsp;
                <button onClick={deleteAllTodoValue}>❌</button>
                &nbsp;&nbsp;
            </div>
            <ol className='todo-list-elements'> {
                todos.map((todo) => {
                    return (
                        <div className='todo-list-items'  key={todo.id}>
                            <li>{todo.newTask}</li>
                            <input type="checkbox" className='todo-list-items-checkbox'/>
                            <button onClick={() => removeTodoValue(todo.id)}>Delete</button>
                        </div>
                        )
                    }
                ) 
            }
            </ol>
        </div>
    );
}