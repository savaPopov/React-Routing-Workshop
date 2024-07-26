import Header from "./components/header/Header"

import { Routes, Route } from "react-router-dom"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import Create from "./components/create/Create"
import Catalog from "./components/catalog/Catalog"



function App() {


  return (
    <>
      <div id="box">
        <Header />

        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create" element={<Create />} />
            <Route path="/catalog" element={<Catalog />} />
          </Routes>
        </main>
      </div>

    </>
  )
}

export default App
