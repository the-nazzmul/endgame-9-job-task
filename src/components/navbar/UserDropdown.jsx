import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './../ui/dropdown-menu'
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import useAuth from '../../hooks/useAuth';

const UserDropdown = () => {
  const { user, logout } = useAuth();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="">
        <div>
          <img
            src={user?.photoURL || "/placeholder.jpg"}
            alt="user umage"
            height={30}
            width={30}
            className="rounded-full border-2 border-black"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-4">
        <DropdownMenuLabel>User Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenu>
          <DropdownMenuItem>
            <Button className="w-full" onClick={() => logout()}>
              <LogOut size={20} className="mr-2" />
              Logout
            </Button>
          </DropdownMenuItem>
        </DropdownMenu>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
