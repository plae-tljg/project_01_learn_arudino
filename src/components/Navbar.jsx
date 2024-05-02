import { NavLink } from "react-router-dom";
import lkm from './image/signature.png'

export default function Navbar() {
  return (
    <div>
      <header className="bg-purple-500 text-white px-4 py-3 flex justify-between">
      <nav className="flex justify-between items-center mb-6">
        <NavLink to="/">
          <img alt="LKM logo" className="h-10 inline" src="lkm"></img>
        </NavLink>

        <div>
          <a href="#" className="mx-3">
            Home
          </a>
          <a href="#" className="mx-3">
            About
          </a>
          <a href="#" className="mx-3">
            Contact
          </a>
        </div>
        
        {/* <NavLink className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3" to="/create">
          Create Employee
        </NavLink> */}
      </nav>
      </header>
    </div>
  );
}