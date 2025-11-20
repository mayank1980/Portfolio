import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-[#DBC2A6] w-full min-h-screen lg:h-screen p-2 flex items-center justify-center overflow-x-hidden">
      <div className="w-full h-full relative font-['Playfair_Display'] flex flex-col gap-4 lg:grid lg:grid-cols-4 lg:grid-rows-8 lg:gap-4 overflow-y-auto lg:overflow-hidden scrollbar-hide">
        {/* The Outlet will render the page */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
