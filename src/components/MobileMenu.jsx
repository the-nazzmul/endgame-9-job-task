
import { LogOut, MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import useAuth from "../hooks/useAuth";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";


const MobileMenu = () => {
  const { user, logout } = useAuth();
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <MenuIcon size={24} />
        </SheetTrigger>
        <SheetContent>
          <ul className="flex flex-col items-center justify-center gap-4 mt-8">
            <li className="hover:text-red-500 bg-slate-100 w-full p-2 text-center font-semibold border-2 border-black rounded-md">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-red-500 bg-slate-100 w-full p-2 text-center font-semibold border-2 border-black rounded-md">
              <Link to="/all-products">Products</Link>
            </li>
            {user ? (
              <li className="w-full">
                <Button size="lg" className="w-full" onClick={() => logout()}>
                  <LogOut size={20} /> Logout
                </Button>
              </li>
            ) : (
              <>
                <li className="w-full">
                  <Link to="/login">
                    <Button size="lg" className="w-full">
                      Login
                    </Button>
                  </Link>
                </li>
                <li className="w-full">
                  <Link to="/register">
                    <Button size="lg" className="w-full">
                      Register
                    </Button>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileMenu;
