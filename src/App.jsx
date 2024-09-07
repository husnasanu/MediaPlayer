import { Routes,Route } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
import History from './pages/History'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      {/*http://localhost:5173/*/}
      <Route path='/' element={<Landing/>} />
       {/*http://localhost:5173/home*/}
       <Route path='/Home' element={<Home/>} />
       {/*http://localhost:5173/history*/}
       <Route path='/History' element={<History/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
