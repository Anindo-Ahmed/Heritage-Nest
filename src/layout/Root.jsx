import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar/Navbar";
import Footer from "../pages/Footer/Footer";

const Root = () => {
  return (
    <div>
      <div className="bg-[#ECF5FF]">
        <Navbar />
      </div>
      <Outlet></Outlet>
      <div className="bg-[#ECF5FF]">
        <Footer />
      </div>
    </div>
  );
};

export default Root;
