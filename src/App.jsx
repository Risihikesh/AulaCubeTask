import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import TaskList from './components/TaskList'
import AddTask from './components/AddTask';
import EditTask from './components/EditTask';

function App() {
  const [tasks, setTasks] = useState(localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []);
  const [toEdit, setToEdit] = useState('');

  // const persistTasks = () => {
  //   localStorage.setItem('tasks', JSON.stringify(tasks));
  // }

  useEffect( () => localStorage.setItem('tasks', JSON.stringify(tasks)), [tasks]);

  return (
    <Routes>
      <Route path='/edit-task' element={<EditTask tasks={tasks} setTasks={setTasks} toEdit={toEdit} setToEdit={setToEdit}/>}></Route>
      <Route path='/add-task' element={<AddTask tasks={tasks} setTasks={setTasks}/>}></Route>
      <Route path='/' element={<TaskList tasks={tasks} setTasks={setTasks} toEdit={toEdit} setToEdit={setToEdit}/>}></Route>
    </Routes>
  );
}

export default App;
