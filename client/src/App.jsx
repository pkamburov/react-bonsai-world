import { Routes, Route } from "react-router-dom"

import { AuthContextProvider } from "./contexts/AuthContext"

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
import Register from "./components/register/Register"
import Logout from "./components/logout/Logout"
import GuideEdit from "./components/guide-edit/GuideEdit"
import PrivateGuard from "./components/common/PrivateGuard"

function App() {

    return (
        <AuthContextProvider>
            <div id="wrapper" className="bg-white">
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/bonsai-care" element={<PageBonsaiCare />} />
                    <Route path="/bonsai-styling" element={<PageBonsaiStyling />} />
                    <Route path="/tree-species" element={<Guides />} />
                    <Route path="/species/:guideId" element={<GuideDetails />} />
                    <Route element={<PrivateGuard />}>
                        <Route path="/create" element={<CreateGuide />} />
                        <Route path="/edit/:guideId" element={<GuideEdit />} />
                        <Route path="/logout" element={<Logout />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                    <Route path="/species/*" element={<NotFound />} />
                </Routes>
                <Footer />
            </div >
        </AuthContextProvider>
    )
}

export default App
