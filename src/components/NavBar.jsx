import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const [theme, setTheme] = useState('light')


    useEffect(()=> {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        const htmlTag = document.querySelector('html');
        htmlTag.setAttribute("data-theme", localTheme)
        // console.log(htmlTag)
    },[theme])


    const handleTheme = (e) => {
        if(e.target.checked){
            setTheme('synthwave');
        }else{
            setTheme('light')
        }
    }
    // console.log(theme)
  return (
    <div className="h-[64px]">
      <div className="navbar bg-base-100 shadow-lg px-8 fixed z-10">
        <div className="flex-1">
          <a className="btn btn-ghost text-2xl font-bold flex gap-0 text-secondary">Byte<span className="text-primary">Blaze</span></a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1  hidden sm:flex gap-5 items-center mr-5">
            <NavLink to="/" className={({isActive})=> isActive? "text-primary font-bold": "font-bold"}>
              Home
            </NavLink>
            <NavLink to="/blogs" className={({isActive})=> isActive? "text-primary font-bold": "font-bold"}>
              Blogs
            </NavLink>
            <NavLink to="/bookmarks" className={({isActive})=> isActive? "text-primary font-bold": "font-bold"}>
              Bookmarks
            </NavLink>
          </ul>
          <label className="cursor-pointer grid place-items-center">
            <input
              type="checkbox"
              onChange={handleTheme}
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
