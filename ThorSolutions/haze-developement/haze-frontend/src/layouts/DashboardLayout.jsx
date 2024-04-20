import React , {useState} from 'react';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openNav = () => {
    setIsSidebarOpen(true);
  };

  const closeNav = () => {
    setIsSidebarOpen(false);
  };
  return (
    <>
      <main id="main_section dashboard_main_section">
        <Header openNav={openNav} />
        <section className="wrapper_section">
          <Sidebar isSidebarOpen={isSidebarOpen} closeNav={closeNav} />
          {children}
        </section>
      </main>
    </>
  )
}

export default DashboardLayout
