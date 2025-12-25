import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './Compmnents/Header'
import About from './Pages/About'
import Home from './Pages/Home'
import Services from './Pages/Services'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import ForgotPassword from './Pages/ForgotPassword'
import Features from './Pages/Features'
import Developer from './Pages/Developer'

const App = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/features' element={<Features />} />
        <Route path='/developer' element={<Developer />} />
      </Routes>
    </div>
  )
}

export default App;
