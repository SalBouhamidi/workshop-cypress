import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/SideBar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
    const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
    return (
        <>
            <div className={`main-container w-[100%] text-black dark:text-white-dark min-h-screen transition-all duration-300 dark:border-gray-800 dark:bg-gray-900`}>
                <Sidebar />
                <div
                    className={`main-content flex flex-col items-end min-h-screen`}>
                    <Header />
                    <main className={`transition-all duration-300 ${isSidebarOpen ? 'w-[calc(100%-260px)]' : 'w-full'}`}>
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    );
}