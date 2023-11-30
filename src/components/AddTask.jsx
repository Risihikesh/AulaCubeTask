import Header from "./Header";
import Container from 'react-bootstrap/Container'
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function AddTask({tasks, setTasks}) {
    const [taskName, setTaskName] = useState('');
    const [desc, setDesc] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [date, setDate] = useState('');

    const navigate = useNavigate();

    const handleDate = (e) => setDate(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskName===''){
            alert('Task Name is a required field');
            return;
        }
        if (date===''){
            alert('Add due date');
            return;
        }
        let task = {
            id: crypto.randomUUID(),
            name: taskName,
            desc: desc,
            priority: priority,
            date: date,
            done: false
        }
        let temp = [...tasks, task];
        setTasks(temp);
        navigate('/');
    }

    return (
        <>
        <Header/>
        <Container style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '80vh', overflow: 'auto'}}>
            <Form className="w-75">
                <Form.Group className="mb-3">
                    <Form.Label>Task</Form.Label>
                    <Form.Control placeholder="What needs to be done?" value={taskName} onChange={(e) => setTaskName(e.target.value)} required/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" placeholder="Include important information" value={desc} onChange={(e) => setDesc(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Priority</Form.Label>
                    <Form.Select onChange={(e) => setPriority(e.target.value)} value={priority}>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-5">
                    <Form.Label>Due Date</Form.Label>
                    <Form.Control type="date" value={date} onChange={handleDate}/>
                </Form.Group>
                
                <Button variant="primary" type="submit" onClick={handleSubmit}>Add Task</Button>
                </Form>
        </Container>
        </>
    )
}