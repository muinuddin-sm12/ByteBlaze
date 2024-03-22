import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
// import Blogs from "../pages/Blogs"
// import Bookmarks from "../pages/Bookmarks"
// import Home from "../pages/Home"

const MainLayout = () => {
  return (
    <div>
        <div className="h-[72px]">
            <NavBar/>
        </div>
        <Outlet/>
    </div>
  )
}

export default MainLayout