import NavrBar from "../components/NavrBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="app">
      <NavrBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LandingPage;
