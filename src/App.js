import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Layout from './pages/Layout'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import Projects from './pages/projects/Projects'

function App() {
  
  return (
    
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/users/:id/projects" element={<Projects />}/>
      </Route>
    </Routes>
      
   
  );
}

export default App;
