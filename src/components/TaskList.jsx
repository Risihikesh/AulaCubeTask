import Container from "react-bootstrap/Container";
import Header from "./Header";
import Task from "./Task";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function TaskList({tasks, setTasks, toEdit, setToEdit}) {
    const navigate = useNavigate();

    const sortByPriority = () => {
        let temp = [];
        tasks.forEach(t => {
            if (t.priority === 'High') temp.push(t);
        });
        tasks.forEach(t => {
            if (t.priority === 'Medium') temp.push(t);
        });
        tasks.forEach(t => {
            if (t.priority === 'Low') temp.push(t);
        });
        setTasks(temp);
    }

    return (
        <>
        <Header/>
        <Container className="mt-3 w-100 d-flex justify-content-center">
            {tasks.length !==0 && <Button className="me-3 btn-secondary" onClick={sortByPriority}>Sort by Priorities</Button>}
        </Container>
        <Container className="mt-5" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            {tasks.length !==0 && tasks.map(task => <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} toEdit={toEdit} setToEdit={setToEdit}/>)}
            {tasks.length===0 && <Button className="btn-success" onClick={() => navigate('/add-task')}>Add Task</Button>}
        </Container>
        </>
    )
}