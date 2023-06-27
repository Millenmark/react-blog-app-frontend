import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";

const Header = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);
  const { userInfo } = useSelector((state) => state.user);

  const handleNavigationVisibility = () => {
    setNavIsVisible((prev) => !prev);
  };

  const menu = ["home", "articles", "pages", "pricing", "faq"];

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
            <></>
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
