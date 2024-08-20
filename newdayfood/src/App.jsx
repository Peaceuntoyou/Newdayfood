
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Contact from './pages/Contact'
import Testimony from './pages/Testimony'


function App() {
  

  return ( 
    <>
    <BrowserRouter>
    <Routes>
      <Route index element= {<Home/>}/>
      <Route path='/' element= {<Home/>}/>
      <Route path='/Menu' element= {<Menu/>}/>
      <Route path='/Contact' element= {<Contact/>}/>
      <Route path='/Testimony' element= {<Testimony/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
