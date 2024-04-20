import React from 'react';
import Header from "../pages/SettingsPages/Header.jsx"
import Sidebar from '../pages/SettingsPages/Sidebar.jsx';
const SettingsLayout = ({ children }) => {
	return (
		<>
			<main id="main_section dashboard_main_section">
				<Header />
				<section className="wrapper_section">
					<Sidebar />
					{children}
				</section>
			</main>
		</>
	)
}

export default SettingsLayout