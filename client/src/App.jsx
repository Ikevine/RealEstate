import { BrowserRouter, Routes , Route} from "react-router-dom"
import About from './pages/about';
import Home from './pages/home';
import Profile from "./pages/profile";
import Login from './pages/login';
import Register from './pages/register'

import HeaderComp from "./components/HeaderComp";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  return (
    <BrowserRouter>
      <HeaderComp/>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route element={<PrivateRoute/>}>
           <Route path="/profile" element={<Profile/>}/>
         </Route>
         <Route path="/login" element={<Login/>}/>
         <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
