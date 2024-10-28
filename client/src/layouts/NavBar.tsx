import { Button } from "@/components/ui/button";
import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { LogIn, LogOut, Menu, User, UserPlus } from "lucide-react";
import { logout } from "@/store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";

const NavBar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, token } = useSelector((state: RootState) => state.auth);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const handleLogout = async () => {
    await dispatch(logout());
  };

  return (
    <>
      <nav className="bg-black shadow-md border border-b-gray-300 dark:bg-black dark:border-b-white/25">
        <div className="max-w-7xl  mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="font-bold text-xl text-red-500">
                AMG
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
                {user && token ? (
                  <>
                    <Link to={"/card"} className="cursor-pointer">
                      <Button className="text-red-500 bg-black hover:text-red-50">
                        <span>Card</span>
                      </Button>
                    </Link>
                    <DropdownMenu>

                      <DropdownMenuTrigger asChild>
                        <Button className="bg-red-600 text-red-50 hover:bg-red-50 hover:text-red-500" variant="ghost">
                          <User className="mr-2 h-5 w-5" />
                          {user.userName}
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <Link to={"/profile"}>
                          <DropdownMenuItem className="cursor-pointer">
                            <User className="mr-2 h-4 w-4" />
                            Profile
                          </DropdownMenuItem>
                        </Link>
                        <DropdownMenuItem
                          onSelect={handleLogout}
                          className="cursor-pointer"
                        >
                          <LogOut className="mr-2 h-4 w-4" />
                          Logout
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </>
                ) : (
                  <>
                    <Link to={"/card"} className="cursor-pointer">
                      <Button className="text-red-500 bg-black hover:text-red-50">
                        <span>Card</span>
                      </Button>
                    </Link>
                    <Link to={"/login"} className="cursor-pointer">
                      <Button variant="ghost" className="text-red-500 hover:bg-red-600 hover:text-red-50">
                        <LogIn className="mr-2 h-4 w-4 " />
                        <span > Log in</span>
                      </Button>
                    </Link>
                    <Link to={"/signup"} className="cursor-pointer">
                      <Button className="bg-red-600 text-red-50 hover:bg-red-50 hover:text-red-500">
                        <UserPlus className="mr-2 h-4 w-4" />
                        Sign Up
                      </Button>
                    </Link>


                  </>
                )}
              </div>
              <div className="flex items-center sm:hidden">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <span className="sr-only">Open menu</span>
                      <Menu className="h-6 w-6" aria-hidden="true" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {user && token ? (
                      <>
                        <Link to={"/profile"}>
                          <DropdownMenuItem className="cursor-pointer">
                            <User className="mr-2 h-4 w-4" />
                            Profile
                          </DropdownMenuItem>
                        </Link>
                        <DropdownMenuItem
                          onSelect={handleLogout}
                          className="cursor-pointer"
                        >
                          <LogOut className="mr-2 h-4 w-4" />
                          Logout
                        </DropdownMenuItem>
                      </>
                    ) : (
                      <>
                        <Link to={"/login"}>
                          <DropdownMenuItem className="cursor-pointer">
                            <LogIn className="mr-2 h-4 w-4" />
                            Login
                          </DropdownMenuItem>
                        </Link>
                        <Link to={"/signup"}>
                          <DropdownMenuItem className="cursor-pointer">
                            <UserPlus className="mr-2 h-4 w-4" />
                            Sign Up
                          </DropdownMenuItem>
                        </Link>
                      </>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );

};

export default NavBar;
