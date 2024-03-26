import { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';


function App() {
  const [data, setData] = useState([])
  const [newTask, setNewTask] = useState('')

  useEffect(() => {
    axios.get('http://localhost:5000/todo')
      .then(response => setData(response.data.todo));
          
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = confirm('Are you sure?');
    if (confirmDelete) {
      axios.delete(`http://localhost:5000/todo/${id}`)
          .then(() => {
            window.location.reload()
          })
    }
  }

  const handleNewTaskChange = (event) => {
    setNewTask(event.target.value);
  }
  const handleNewTaskSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/todo', { task: newTask })
        .then(() => {
          window.location.reload()
        })
  }

  const handleEdit = (item) => {
    const task = item.task;
    const newTask = prompt('Enter new task name', task);
    const completed = confirm('Is the task completed?');
    axios.put(`http://localhost:5000/todo/${item.id}`, { task: newTask, completed: completed })
        .then(() => {
          window.location.reload()
        })
  }

  return (
      <div>
        <h1>Tasks</h1>
        <table className="table">
          <thead>
          <tr>
            <th>ID</th>
            <th>Task</th>
            <th>Completion Status</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          {data.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.task}</td>
                <td>{item.completed ? 'Completed' : 'Not Completed'}</td>
                <td>
                  <button className="button" onClick={() => handleEdit(item)}>Edit</button>
                  <button className="button" onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
          ))}
          </tbody>
        </table>
        <div className="sec">
          <h2>Add Tasks</h2>
          <form className="form-container" onSubmit={handleNewTaskSubmit}>
            <input className="task-input" type="text" value={newTask} onChange={handleNewTaskChange} placeholder="Task name" required />
            <button className="task-button" type="submit">Submit</button>
          </form>
        </div>
      </div>
  );
}

export default App;