import React from 'react';
import Header from "../pages/ProductCustomizer/Header.jsx"
import Sidebar from '../pages/ProductCustomizer/Sidebar.jsx';
import RightSidebar from "../pages/ProductCustomizer/RightSiderbar/RightSidebar.jsx"
const ProductLayout = ({ children }) => {
	return (
		<>
			<main id="main_section dashboard_main_section">
				<Header />
				<section className="wrapper_section">
					<Sidebar />
					{children}
				<RightSidebar></RightSidebar>
				</section>
			</main>
		</>
	)
}

export default ProductLayout