
import './App.css'
import Dashboard from './Screens/Dashboard'
import Login from './Screens/Login'
import Signup from './Screens/Signup'
import{BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
 

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Signup/>} />
    <Route path='/dashboard' element={<Dashboard/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
