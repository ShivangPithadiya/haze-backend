import React from 'react'
import Sidebar from "../components/Sidebar";
import Navbar from '../components/Navbar';





const PreviewLayout = ({ children }) => {
  return (

      <>
  <main id="main_section">
        <Navbar/>
     
       
          {children}
     
      </main>
      </>
   
  );
}

export default PreviewLayout


