import NavrBar from "../components/NavrBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <NavrBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default LandingPage;
