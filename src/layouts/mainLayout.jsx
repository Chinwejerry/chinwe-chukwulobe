import { Outlet } from "react-router";
import NavBar from "../components/navBar";
import Footer from "../components/footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow p-4 bg-gradient-to-br from-slate-100 via-slate-300 to-slate-400 text-purple-900">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
