import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png"
const Navbar = () => {
  return (
    <div className="navbar container mx-auto font-inter">
      <div className="navbar-start hidden lg:flex text-lg">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/buy">Buy</NavLink>
          </li>      
          <li>
            <NavLink to="/sell">Sell</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
           
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/buy">Buy</NavLink>
            </li>
            <li>
              <NavLink to="/sell">Sell</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
          </ul>
        </div>
        <Link to="/home"><img src={logo} alt="logo" className="w-11"/></Link>
      </div>
      <div className="navbar-end gap-6">        
        <NavLink to="/signin" className="px-4 py-2 text-sm font-semibold rounded-md text-blue-500 bg-blue-200">Sign In</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
