import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    
    const handleHome = () => navigate('/');
    const handleAddTask = () => navigate('/add-task');

    return (
        <Navbar expand="lg" className="bg-body-tertiary" style={{background:  'linear-gradient(to right, rgb(0, 0, 0), rgb(0, 0, 0))'}}>
            <Container>
                <Navbar.Brand style={{color: 'white'}}>Task Management</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto d-flex justify-content-end align-items-center w-100">
                    <Nav.Link style={{color: 'white'}} onClick={handleHome}>Task List</Nav.Link>
                    <Nav.Link style={{color: 'white'}} onClick={handleAddTask}><Button className='btn-success'>Add Task</Button></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    )
}