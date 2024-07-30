import { Routes, Route } from "react-router-dom"

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import Create from "./components/create/Create"
import Catalog from "./components/catalog/Catalog"
import Details from "./components/details/Details"
import { AuthContext } from "./contexts/AuthContext"
import { useState } from "react"



function App() {
  const [authState, setAuthState] = useState({})

  const changeAuthState = (state) => {
    setAuthState(state)
  }

  const contextData = {
    userId: authState._id,
    email: authState.email,
    accessToken: authState.accessToken,
    isAuthenticated: !!authState.email,
    changeAuthState
  }

  return (
    <>
      <AuthContext.Provider value={contextData}>
        <div id="box">
          <Header />

          <main id="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/details/:gameId" element={<Details />} />
              <Route path="/create" element={<Create />} />
              <Route path="/catalog" element={<Catalog />} />
            </Routes>
          </main>
        </div>
      </AuthContext.Provider>
    </>
  )
}

export default App
