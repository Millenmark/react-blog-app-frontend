import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/userActions";

const Header = () => {
  const menu = ["home", "articles", "pages", "pricing", "faq"];

  const [navIsVisible, setNavIsVisible] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleNavigationVisibility = () => {
    setNavIsVisible((prev) => !prev);
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white">
      <nav className="container mx-auto p-5 flex justify-between items-center">
        <div>
          <Link to="/">
            <h1 className="font-extrabold text-2xl">Tech Articles</h1>
          </Link>
        </div>
        <div className="z-[50] lg:hidden">
          {navIsVisible ? (
            <AiOutlineClose
              className="w-6 h-6 cursor-pointer"
              onClick={handleNavigationVisibility}
            />
          ) : (
            <AiOutlineMenu
              className="w-6 h-6 cursor-pointer"
              onClick={handleNavigationVisibility}
            />
          )}
        </div>
        <div
          className={`${
            navIsVisible ? "right-0" : "-right-full"
          } transition-all duration-300 z-[49] fixed top-0 bottom-0 lg:static flex flex-col lg:flex-row justify-center lg:justify-end gap-x-9 items-center w-full lg:w-auto bg-dark-hard lg:bg-transparent mt-[72px] lg:mt-0`}
        >
          <ul className="flex items-center gap-y-5 flex-col text-white lg:text-dark-soft lg:flex-row gap-x-5 font-semibold">
            {menu.map((menu) => (
              <li key={menu} className="capitalize hover:text-blue-500">
                <Link to={menu}>{menu}</Link>
              </li>
            ))}
          </ul>
          {userInfo ? (
            <div className="flex items-center gap-y-5 flex-col text-white lg:text-dark-soft lg:flex-row gap-x-5 font-semibold">
              <div className="relative group">
                <div className="flex flex-col items-center">
                  <button
                    className=" flex gap-x-1 items-center border-blue-500 border-2 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all mt-5 lg:mt-0 duration-300 "
                    onClick={() => setProfileDropdown(!profileDropdown)}
                  >
                    <span>Profile</span>
                    <MdKeyboardArrowDown />
                  </button>
                  <div
                    className={`${
                      profileDropdown ? "block" : "hidden"
                    } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
                  >
                    <ul className="bg-dark-soft lg:bg-white text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
                      <button
                        type="button"
                        className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft"
                      >
                        Dashboard
                      </button>
                      <button
                        type="button"
                        onClick={() => dispatch(logout())}
                        className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft"
                      >
                        Logout
                      </button>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Link to="/register">
              <button className="border-blue-500 border-2 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all mt-5 lg:mt-0 duration-300 ">
                Sign in
              </button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
