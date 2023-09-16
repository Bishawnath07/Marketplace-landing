
import logo from "../../assets/DeviantArt.png";
import { Link } from "react-router-dom";
import './navbar.css'

// todo: Mobile responsive logo + btn

const Navbar = () => {

    const handleClick = () => {
      const elem = document.activeElement;
      if(elem){
        elem?.blur();
      }
    };


  // Nav links
  const navItems = (
    <>
      <li onClick={handleClick}>
        <Link to={"/"}>Hire Talent</Link>
      </li>
      <li onClick={handleClick}>
        <Link to={"/about"}>Find Work</Link>
      </li>
      <li onClick={handleClick}>
        <Link to={"/products"}>Payment System</Link>
      </li>
      <li onClick={handleClick}>
        <Link to={"/pricing"}>Team</Link>
      </li>
      <li onClick={handleClick}>
        <Link to={"/client-says"}>About</Link>
      </li>
      <li onClick={handleClick}>
        <Link to={"/review"}>Help</Link>
      </li>
      
    </>
  );


  return (
    <div>
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown  z-10">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm absolute font dropdown-content   z-[1] p-2 text-black bg-[#222222CC] shadow font-bold rounded-box w-52 "
            >
              {navItems}
            </ul>
          </div>
           <img
            className=" w-[60px] lg:w-[60px] md:w-[60px]  "
            src={logo}
            alt=""
          />
          <div className="navbar-end lg:hidden">
        <div className=" flex items-center space-x-4">
          
          <button className="bg-white login-btn text-blue-500  rounded-lg hover:bg-blue-500 hover:text-white transition duration-300">
            Log In
          </button>
          <button className="bg-blue-500 text-white px-2 py-1 rounded-lg hover:bg-blue-600 transition duration-300">
            Sign Up
          </button>
        </div>
        </div>
         
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal px-1  text-black font font-[400] text-[16px] gap-[25px]">{navItems}</ul>
        </div>
        <div className="navbar-end">
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-8 pr-2 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute left-2 top-2 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M13.293 14.293a6 6 0 111.414-1.414l5 5a1 1 0 01-1.414 1.414l-5-5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <button className="bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300">
            Log In
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
            Sign Up
          </button>
        </div>
        </div>
        
      </div>
      {/* <hr className=" mx-auto mt-2" /> */}
      <div className="line !mt-[15px]"></div>
    </div>
  );
};

export default Navbar;