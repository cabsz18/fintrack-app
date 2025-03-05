import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '@pages/auth/login/Login'
import { Register } from '@pages/auth/register/Register'
import { ForgotPassword } from '@pages/auth/forgot/ForgotPassword'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App