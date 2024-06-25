import React,{lazy} from 'react';
import { BrowserRouter , Routes , Route } from "react-router-dom";

const Home = lazy(()=> import("./pages/Home"))
const login = lazy(()=> import("./pages/login"))
const chat = lazy(()=> import("./pages/chat"))
const group = lazy(()=> import("./pages/group"))

const App = () => {
  return <BrowserRouter>

  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/login" element={<login />}></Route>
    <Route path="/chat/:chatId" element={<chat />}></Route>
    <Route path="/group" element={<group />}></Route>
  </Routes>
  </BrowserRouter>
}

export default App