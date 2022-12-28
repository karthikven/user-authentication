import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Layout from './pages/Layout'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import Projects from './pages/projects/Projects'
import AllTasks from './pages/tasks/AllTasks'
import CreateTask from './pages/create-task/CreateTask'

function App() {
  
  return (
    
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/users/:id/projects" element={<Projects />}/>
        {/* <Route path="/projects/:projectId/users/:userId/tasks" element={<AllTasks />}/> */}
        <Route path="/users/:userId/projects/:projectId/tasks" element={<AllTasks />}/>
        <Route path="/users/:userId/projects/:projectId/createtask" element={<CreateTask />}/>
      </Route>
    </Routes>
      
   
  );
}

export default App;
