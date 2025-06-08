import { Routes, Route } from "react-router-dom"
import UserLogin from "./pages/UserLogin"
import Start from "./pages/Start"
import UserRegister from "./pages/UserRegister"
import CaptainLogin from "./pages/CaptainLogin"
import CaptainRegister from "./pages/CaptainRegister"
import Home from "./pages/Home"
import UserProtectedWrapper from "./pages/UserProtectedWrapper"
import UserLogout from "./pages/UserLogout"
import CaptainHome from "./pages/CaptainHome"
import CaptainProtectedWrapper from "./pages/CaptainProtectedWrapper"
import CaptainLogout from "./pages/CaptainLogout"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/cap-login" element={<CaptainLogin />} />
        <Route path="/signup" element={<UserRegister />} />
        <Route path="/cap-signup" element={<CaptainRegister />} />
        <Route path="/home" element={
          <UserProtectedWrapper>
            <Home />
          </UserProtectedWrapper>
        } />
        <Route path="/user/logout" element={
          <UserProtectedWrapper>
            <UserLogout />
          </UserProtectedWrapper>
        } />
        <Route path="/cap-home" element={
            <CaptainProtectedWrapper>
              <CaptainHome />
            </CaptainProtectedWrapper>
        } />
        <Route path="/cap/logout" element={
            <CaptainProtectedWrapper>
              <CaptainLogout />
            </CaptainProtectedWrapper>
        } />
        {/* <Route path="/services" element={<Services />} /> */}
      </Routes>
    </>
  )
}

export default App

