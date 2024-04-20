import React, { useState } from 'react';
import "./Header.css"
const Header = () => {
	const [isPopupOpen, setPopupOpen] = useState(false);
	const [isDropdownOpen, setDropdownOpen] = useState(false);

	const togglePopup = () => {
		setPopupOpen(!isPopupOpen);
	};

	const toggleDropdown = () => {
		setDropdownOpen(!isDropdownOpen);
	};

	return (

		<header className="Haze_header">
			<div className="logo_section">
				<div className="logo">
					<a href="#">
						<img src="/assets/image/logo/Haze logo 1 (1).png" alt="Logo" />
					</a>
				</div>
			</div>

			<div className="menu">
				<ul className="header_menu">
					<li className="header_menu_list">
						Build your product
						{/* SVG Code for arrow */}
						{" >"}
					</li>
					<li className="header_menu_list">
						Pricing Details
						{/* SVG Code for arrow */}
						{" >"}
					</li>
					<li className="header_menu_list">
						Review
						{/* SVG Code for arrow */}
						{" >"}
					</li>
					<li className="header_menu_list">
						Done!
						{/* SVG Code for arrow */}
						{" >"}
					</li>
				</ul>
			</div>

			<div className="right_header_Section">
				<button className="login_buttotn">Logic</button>
				<button className="view_button">
				<i class="bi bi-eye"></i>
				</button>
				<button className="dropdown">
					<span className="popup-button" onClick={togglePopup}>
						Publish
					</span>
					{isPopupOpen && (
						<div id="popupContent" className="popup">
							<div className="popup_cont">
								<p className="suuccessully_msg">
									<img src="../Image/svg/success.svg" alt="Success" />
									The draft was successfully published
								</p>
								<div onClick={togglePopup}>
									{/* SVG Code for close icon */}
								</div>
							</div>
						</div>
					)}
					<span className="dropdown_bnt" onClick={toggleDropdown}>
						<span>
							{/* SVG Code for dropdown arrow */}
						</span>
						{isDropdownOpen && (
							<div id="dropdownContent" className="dropdown-content">
								<a href="#">Discard</a>
							</div>
						)}
					</span>
				</button>
			</div>
		</header>

	);
};

export default Header;
