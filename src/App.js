import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Forgot from './components/Auth/Forgot';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ResetPassword from './components/Auth/ResetPassword';
import Contact from './components/Cotact/Contact';
import CoursePage from './components/Course/CoursePage';
import Courses from './components/Courses/Courses';
import Home from './components/Home/Home';
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';
import NotFound from './components/layout/Notfound/NotFound';
import PaymentFail from './components/Payment/PaymentFail';
import PaymentSuccess from './components/Payment/PaymentSuccess';
import Subscribe from './components/Payment/Subscribe';
import ChangePassword from './components/Profile/ChangePassword';
import Profile from './components/Profile/Profile';
import UpdateProfile from './components/Profile/UpdateProfile';
import Request from './components/Request/Request';
function App() {
  // window.addEventListener('contextmenu', e => {
  //   e.preventDefault();
  // });
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CoursePage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/updateprofile" element={<UpdateProfile />} />

        <Route path="/register" element={<Register />} />
        <Route path="/forgetpassword" element={<Forgot />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request" element={<Request />} />
        <Route path="/about" element={<About />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/paymentfail" element={<PaymentFail />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
