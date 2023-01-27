import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Login from './components/Login'
import {ResetCSS} from './ResetCss'



function App() {

  return (
    <>
    <ResetCSS/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
