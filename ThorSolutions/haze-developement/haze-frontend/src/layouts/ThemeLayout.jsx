import React, { useState, useEffect, useContext } from "react";
import ThemeHeader from "../components/themebuilder/ThemeHeader";
import LeftSidebar from "../components/themebuilder/LeftSidebar";
import RightSidebar from "../components/themebuilder/RightSidebar";
import MainContent from "../components/themebuilder/MainContent";

const ThemeLayout = ({ children }) => {
  const [visibleItem, setVisibleItem] = useState("Customizer_Title_list");
  useEffect(() => {
    const getHashFromURL = () => {
      const hash = window.location.hash.substring(1);
      setVisibleItem(hash);
    };
    getHashFromURL();
    window.addEventListener('hashchange', getHashFromURL);
    return () => {
      window.removeEventListener('hashchange', getHashFromURL);
    };
  }, []);
  return (
    <main id="main_section theme_builder_main_section">
      <ThemeHeader />
      <section className="wrapper_section theme_builder_wrapper_section">
        <LeftSidebar onAnchorClick={(itemName) => setVisibleItem(itemName)} />
        <MainContent />
        <RightSidebar visibleItem={visibleItem} />
        {children}
      </section>
    </main>
  );
};

export default ThemeLayout;