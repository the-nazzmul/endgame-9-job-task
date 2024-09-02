import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import MobileMenu from "./MobileMenu";
import UserDropdown from "./navbar/UserDropdown";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user } = useAuth();
  return (
    <nav className="flex justify-between items-center p-4 container mx-auto">
      <div>
        <Link to="/">
          <h1 className="text-4xl font-bold">LOGO</h1>
        </Link>
      </div>
      {/* Desktop Menu */}
      <div className="hidden lg:block">
        <ul className="flex items-center justify-between gap-4">
          <li className="hover:text-red-500">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-red-500">
            <Link to="/all-products">Products</Link>
          </li>
          {user ? (
            <UserDropdown />
          ) : (
            <>
              <li>
                <Link to="/login">
                  <Button>Login</Button>
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <Button>Register</Button>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      {/* Mobile menu */}
      <div className="lg:hidden">
        <MobileMenu />
      </div>
    </nav>
  );
};

export default Navbar;
