import { Routes, Route } from "react-router-dom"
// import Home from "./pages/home/Home";
import Login from "./pages/login";
import Admin from "./pages/admin/Admin";
import Adminhome from "./pages/adminhome/Home";
import LoggedInRoutes from "./routes/LoggedInRoutes";
import NotLoggedInRoutes from "./routes/NotLoggedInRoutes";
import UserHome from "./components/userhome/UserHome";
import ProfilePage from "./pages/profile";
import Community from "./pages/community/Community";

function App() {
  return (
    <div>
      <Routes>
        {/* <Route element={<LoggedInRoutes />} > */}
          <Route  path="/" element={<UserHome />} exact />
          <Route path="/:type" element={<UserHome />} exact />
          <Route path="/profile" element={<ProfilePage />} exact />
        {/* </Route> */}
        {/* <Route element={<NotLoggedInRoutes />}> */}
          <Route path="/login" element={<Login />} exact />
          <Route path="/authorizer" element={<Admin />} exact />
          <Route path="/authorizer/home" element={<Adminhome />} exact />
        {/* </Route> */}
      </Routes>
    </div>
  )
}

export default App;