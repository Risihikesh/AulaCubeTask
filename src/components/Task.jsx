import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import './Task.css'
import { useNavigate } from "react-router-dom";

export default function Task({task, tasks, setTasks, toEdit, setToEdit}) {
    const [strike, setStrike] = useState(false);
    const navigate = useNavigate();

    const handleDelete = () => {
        const id = task.id;
        let temp = tasks.filter(t => t.id !== id);
        setTasks(temp);
    }

    const handleEdit = () => {
        const id = task.id;
        setToEdit(id);
        navigate('/edit-task');
    }

    return (
        <div className="w-100" style={{textDecoration: strike ? "line-through" : "none"}}>
            <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                    <input type="checkbox" onClick={() => setStrike(!strike)}/>
                    <h5 className="ms-3">{task.name}</h5>
                </div>
                <div className="buttons">
                    <CiEdit size={25} className="me-3" onClick={handleEdit}/>
                    <MdDelete color="#D22B2B" size={25} onClick={handleDelete}/>
                </div> 
            </div>
            <div className="ms-4">
                <p  >Due Date: {task.date.toString()}</p>
                <p>{task.desc}</p>
                <p>Priority: {task.priority}</p>
            </div>
            <hr/>
        </div>
    )
}