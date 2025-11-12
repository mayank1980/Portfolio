import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-[#DBC2A6] w-screen h-screen p-2 flex items-center justify-center overflow-hidden">
      <div className="w-full h-full relative font-['Playfair_Display'] grid grid-cols-4 grid-rows-8 gap-4">
        {/* The Outlet will render the page (Portfolio or About), which now includes its own header */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
