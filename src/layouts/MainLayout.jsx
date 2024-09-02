import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <header className="backdrop-blur-xl shadow-md fixed w-full">
        <Navbar />
      </header>
      <main className="min-h-screen bg-slate-200">
        <Outlet />
      </main>
      <footer className="bg-black text-white p-12 flex justify-center">
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
