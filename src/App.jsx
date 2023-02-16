import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import { ResetCSS } from './ResetCss'



function App() {

  return (
    <>
      <ResetCSS />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/signUp' element={<SignUp />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
