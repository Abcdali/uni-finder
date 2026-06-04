import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div style={{ minHeight: "100vh" }}>
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

export default Layout;