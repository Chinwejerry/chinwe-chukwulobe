import { Outlet } from "react-router";
import NavBar from "../components/navBar";
import Footer from "../components/footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow p-4 bg-slate-100 text-purple-900">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
