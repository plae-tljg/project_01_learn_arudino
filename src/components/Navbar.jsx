import { NavLink } from "react-router-dom";
import lkm from './image/signature.png';

export default function Navbar() {
  return (
    <div>
      <header className="flex p-0 bg-red-500 text-white justify-between h-10">
      <nav className="flex justify-between items-center">
        <NavLink to="/" style={{ borderRadius: '50%', width: '40vh', height:'vh', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <img alt="LKM logo" className="w-full h-full inline" src={lkm}></img>
        </NavLink>
      </nav>

        <div className="flex ml-auto justify-between items-center">
          <a href="#" className="mx-3">
            Contact
          </a>
          <a href="#" className="mx-3">
            About
          </a>
          <a href="#" className="mx-3">
            Login
          </a>
        </div>
      </header>
    </div>
  );
}