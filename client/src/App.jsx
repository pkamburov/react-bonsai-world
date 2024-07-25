import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import Navigation from "./components/header/Navigation"
import Login from "./components/login/Login"
import Home from "./components/home/Home"
import NotFound from "./components/pages/NotFound"
import Footer from "./components/footer/Footer"
import Guides from "./components/guides-page/GuidesPage"
import CreateGuide from "./components/guide-create/CreateGuide"
import PageBonsaiCare from "./components/pages/PageBonsaiCare"
import PageBonsaiStyling from "./components/pages/PageBonsaiStyling"
import GuideDetails from "./components/guide-details/GuideDetails"

import { AuthContext } from "./contexts/AuthContext"
import Register from "./components/register/Register"


function App() {
    //TODO: Remove auth from App
    const [authState, setAuthState] = useState({})

    const changeAuthState = (state) => {
        setAuthState(state);
    }

    const contextData = {
        userId: authState._id,
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
                    <Route path="/register" element={<Register />} />
                    <Route path="/bonsai-care" element={<PageBonsaiCare />} />
                    <Route path="/bonsai-styling" element={<PageBonsaiStyling />} />
                    <Route path="/tree-species" element={<Guides />} />
                    <Route path="/create" element={<CreateGuide />} />
                    <Route path="/details/:guideId" element={<GuideDetails />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </div >
        </AuthContext.Provider>
    )
}

export default App
