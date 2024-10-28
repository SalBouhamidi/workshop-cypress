import { RouterProvider } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/all.min.css';
import './assets/css/animate.css';
import './assets/css/bootstrap.min.css';
import './assets/css/magnific-popup.css';
import './assets/css/main.css';
import './assets/css/meanmenu.css';
import './assets/css/nice-select.css';
import './assets/css/swiper-bundle.min.css';
import AppRouter from "./router/AppRouter";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { currentUser } from "./store/slices/authSlice";

import { ThemeProvider } from "@/components/theme-provider";
import { AppDispatch } from "./store/index";
import { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      console.log("Checking token:", token);

      if (token) {
        try {
          await dispatch(currentUser());
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      }

      setIsLoading(false);
    };

    fetchUser();
  }, [dispatch]);

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      {isLoading ? (
        <div className="">
          <div className="flex space-y-6 flex-col justify-center items-center  h-screen ">
            <h3 className="text-2xl font-bold ">Welcome back </h3>
            <div className="flex space-x-2 justify-center items-center">
              <div className="h-4 w-4 bg-black/80 rounded-full animate-bounce [animation-delay:-0.3s] dark:bg-white/80"></div>
              <div className="h-4 w-4 bg-black/80 rounded-full animate-bounce [animation-delay:-0.15s] dark:bg-white/80"></div>
              <div className="h-4 w-4 bg-black/80 rounded-full animate-bounce dark:bg-white/80"></div>
            </div>
          </div>
        </div>
      ) : (
        <RouterProvider router={AppRouter} />
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </ThemeProvider>
  );
}
export default App;
