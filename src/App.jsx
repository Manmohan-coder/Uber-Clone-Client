import { Routes,Route } from "react-router-dom"
import UserLogin from "./pages/UserLogin"
import Home from "./pages/Home"
import UserRegister from "./pages/UserRegister"
import CaptainLogin from "./pages/CaptainLogin"
import CaptainRegister from "./pages/CaptainRegister"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/cap-login" element={<CaptainLogin />} />
        <Route path="/signup" element={<UserRegister />} />
        <Route path="/cap-signup" element={<CaptainRegister />} />
        {/* <Route path="/services" element={<Services />} /> */}
      </Routes>
    </>
  )
}

export default App

