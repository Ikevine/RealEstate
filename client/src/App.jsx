import { BrowserRouter, Routes , Route} from "react-router-dom"
import About from './pages/about';
import Home from './pages/home';
import SignIn from "./pages/signIn";
import Profile from "./pages/profile";
import SignUp from './pages/signUp';
function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/sign-in" element={<SignIn/>}/>
         <Route path="/profile" element={<Profile/>}/>
         <Route path="/sign-up" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
