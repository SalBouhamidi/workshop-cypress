import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "@/store/slices/toggleSidebarSlice";
import { AppDispatch } from "@/store";

const Sidebar: React.FC = () => {
  const { t } = useTranslation();
  const dispatch: AppDispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);

  const handelToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="dark">
      <nav
        className={`sidebar fixed inset-y-0 z-50 h-full w-[260px] border-r shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-all duration-300 border-gray-800 bg-gray-900 ${
          isSidebarOpen ? "left-0" : "-left-[260px]"
        }`}
      >
        <div className="h-full">
          <div className="flex items-center justify-between px-4 py-3">
            <NavLink to="/" className="main-logo flex items-center shrink-0">
              <span className="align-middle text-2xl font-semibold ltr:ml-1.5 rtl:mr-1.5 dark:text-white lg:inline">
                {t("AlloMedia")}
              </span>
            </NavLink>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-gray-800 text-white rtl:rotate-180"
              onClick={handelToggleSidebar}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
              >
                <path
                  d="M6 18L18 6M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </div>
          <ScrollArea className="h-[calc(100vh-80px)] px-4 py-3">
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/"
                  className="flex items-center py-2 text-gray-300 hover:text-gray-100"
                >
                  <svg
                    className="shrink-0 mr-2"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      d="M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z"
                      fill="currentColor"
                    />
                    <path
                      d="M9 17.25C8.58579 17.25 8.25 17.5858 8.25 18C8.25 18.4142 8.58579 18.75 9 18.75H15C15.4142 18.75 15.75 18.4142 15.75 18C15.75 17.5858 15.4142 17.25 15 17.25H9Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="ltr:pl-3 rtl:pr-3 text-gray-300 group-hover:text-gray-100">
                    {t("dashboard")}
                  </span>
                </NavLink>
                <ul className="mt-1 space-y-1 pl-6 text-sm text-gray-400">
                  <li>
                    <NavLink
                      to="/"
                      className="block py-1 text-gray-400 hover:text-gray-200"
                    >
                      {t("sales")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/analytics"
                      className="block py-1 text-gray-400 hover:text-gray-200"
                    >
                      {t("analytics")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/finance"
                      className="block py-1 text-gray-400 hover:text-gray-200"
                    >
                      {t("finance")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/crypto"
                      className="block py-1 text-gray-400 hover:text-gray-200"
                    >
                      {t("crypto")}
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li>
                <NavLink
                  to="/dashboard/orders"
                  className="flex items-center py-2 text-gray-300 hover:text-gray-100"
                >
                  <svg
                    className="shrink-0 mr-2"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      d="M13 15.4C13 13.3258 13 12.2887 13.659 11.6444C14.318 11 15.3787 11 17.5 11C19.6213 11 20.682 11 21.341 11.6444C22 12.2887 22 13.3258 22 15.4V17.6C22 19.6742 22 20.7113 21.341 21.3556C20.682 22 19.6213 22 17.5 22C15.3787 22 14.318 22 13.659 21.3556C13 20.7113 13 19.6742 13 17.6V15.4Z"
                      fill="currentColor"
                    />
                    <path
                      d="M2 8.6C2 10.6742 2 11.7113 2.65901 12.3556C3.31802 13 4.37868 13 6.5 13C8.62132 13 9.68198 13 10.341 12.3556C11 11.7113 11 10.6742 11 8.6V6.4C11 4.32582 11 3.28873 10.341 2.64437C9.68198 2 8.62132 2 6.5 2C4.37868 2 3.31802 2 2.65901 2.64437C2 3.28873 2 4.32582 2 6.4V8.6Z"
                      fill="currentColor"
                    />
                    <path
                      d="M13 5.5C13 4.4128 13 3.8692 13.1713 3.44041C13.3996 2.86867 13.8376 2.41443 14.389 2.17761C14.8024 2 15.3266 2 16.375 2H18.625C19.6734 2 20.1976 2 20.611 2.17761C21.1624 2.41443 21.6004 2.86867 21.8287 3.44041C22 3.8692 22 4.4128 22 5.5C22 6.5872 22 7.1308 21.8287 7.55959C21.6004 8.13133 21.1624 8.58557 20.611 8.82239C20.1976 9 19.6734 9 18.625 9H16.375C15.3266 9 14.8024 9 14.389 8.82239C13.8376 8.58557 13.3996 8.13133 13.1713 7.55959C13 7.1308 13 6.5872 13 5.5Z"
                      fill="currentColor"
                    />
                    <path
                      opacity="0.5"
                      d="M2 18.5C2 19.5872 2 20.1308 2.17127 20.5596C2.39963 21.1313 2.83765 21.5856 3.38896 21.8224C3.80245 22 4.32663 22 5.375 22H7.625C8.67337 22 9.19755 22 9.61104 21.8224C10.1624 21.5856 10.6004 21.1313 10.8287 20.5596C11 20.1308 11 19.5872 11 18.5C11 17.4128 11 16.8692 10.8287 16.4404C10.6004 15.8687 10.1624 15.4144 9.61104 15.1776C9.19755 15 8.67337 15 7.625 15H5.375C4.32663 15 3.80245 15 3.38896 15.1776C2.83765 15.4144 2.39963 15.8687 2.17127 16.4404C2 16.8692 2 17.4128 2 18.5Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="ltr:pl-3 rtl:pr-3 text-gray-300 group-hover:text-gray-100">
                    {t("orders")}
                  </span>
                </NavLink>
                {/* <ul className="mt-1 space-y-1 pl-6 text-sm text-gray-400">
                                    <li>
                                        <NavLink to="/apps/chat" className="block py-1 hover:text-gray-200">{t('chat')}</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/apps/mailbox" className="block py-1 hover:text-gray-200">{t('mailbox')}</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/apps/todolist" className="block py-1 hover:text-gray-200">{t('todo_list')}</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/apps/notes" className="block py-1 hover:text-gray-200">{t('notes')}</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/apps/scrumboard" className="block py-1 hover:text-gray-200">{t('scrumboard')}</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/apps/contacts" className="block py-1 hover:text-gray-200">{t('contacts')}</NavLink>
                                    </li>
                                </ul> */}
              </li>

              <li>
                <NavLink
                  to="/components"
                  className="flex items-center py-2 text-gray-300 hover:text-gray-100"
                >
                  <svg
                    className="shrink-0 mr-2"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.42229 20.6181C10.1779 21.5395 11.0557 22.0001 12 22.0001V12.0001L2.63802 7.07275C2.62423 7.09491 2.6107 7.11727 2.5974 7.13986C2 8.15436 2 9.41678 2 11.9416V12.0586C2 14.5834 2 15.8459 2.5974 16.8604C3.19479 17.8749 4.27063 18.4395 6.42229 19.5686L8.42229 20.6181Z"
                      fill="currentColor"
                    />
                    <path
                      opacity="0.7"
                      d="M17.5774 4.43152L15.5774 3.38197C13.8218 2.46066 12.944 2 11.9997 2C11.0554 2 10.1776 2.46066 8.42197 3.38197L6.42197 4.43152C4.31821 5.53552 3.24291 6.09982 2.6377 7.07264L11.9997 12L21.3617 7.07264C20.7564 6.09982 19.6811 5.53552 17.5774 4.43152Z"
                      fill="currentColor"
                    />
                    <path
                      opacity="0.5"
                      d="M21.4026 7.13986C21.3893 7.11727  21.3758 7.09491 21.362 7.07275L12 12.0001V22.0001C12.9443 22.0001 13.8221 21.5395 15.5777 20.6181L17.5777 19.5686C19.7294 18.4395 20.8052 17.8749 21.4026 16.8604C22 15.8459 22  14.5834 22 12.0586V11.9416C22 9.41678 22 8.15436 21.4026 7.13986Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="ltr:pl-3 rtl:pr-3 text-gray-300 group-hover:text-gray-100">
                    {t("components")}
                  </span>
                </NavLink>
                <ul className="mt-1 space-y-1 pl-6 text-sm text-gray-400">
                  <li>
                    <NavLink
                      to="/components/buttons"
                      className="block py-1 hover:text-gray-200"
                    >
                      {t("buttons")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/components/forms"
                      className="block py-1 hover:text-gray-200"
                    >
                      {t("forms")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/components/tabs"
                      className="block py-1 hover:text-gray-200"
                    >
                      {t("tabs")}
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </ScrollArea>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
