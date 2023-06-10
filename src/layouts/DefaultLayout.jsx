import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

const DefaultLayout = () => {
  return (
    <div className="font-opensans">
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default DefaultLayout;
