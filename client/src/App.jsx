import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import Navigation from "./components/Navigation"
import Login from "./components/login/Login"
import Home from "./components/Home"
import NotFound from "./components/NotFound"
import Footer from "./components/Footer"
import Guides from "./components/Guides"
import CreateGuide from "./components/CreateGuide"
import PageBonsaiCare from "./components/PageBonsaiCare"
import PageBonsaiStyling from "./components/PageBonsaiStyling"

import { AuthContext } from "./contexts/AuthContext"


function App() {
    const [authState, setAuthState] = useState({})

    const changeAuthState = (state) => {
        setAuthState(state);
    }

    const contextData = {
        email: authState.email,
        accessToken: authState.accessToken,
        isAuthenticated: !!authState.email,
        changeAuthState
    }

    return (
        <AuthContext.Provider value={contextData}>
            <div id="wrapper" className="bg-white">
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/bonsai-care" element={<PageBonsaiCare />} />
                    <Route path="/bonsai-styling" element={<PageBonsaiStyling />} />
                    <Route path="/tree-species" element={<Guides />} />
                    <Route path="/create" element={<CreateGuide />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </div >
        </AuthContext.Provider>
    )
}

export default App
