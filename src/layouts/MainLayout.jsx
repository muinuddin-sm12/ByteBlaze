import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
// import Blogs from "../pages/Blogs"
// import Bookmarks from "../pages/Bookmarks"
// import Home from "../pages/Home"

const MainLayout = () => {
  return (
    <div>
      <div className="h-[64px]">
        <NavBar />
      </div>
      <div className="min-h-[calc(100vh-116px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
