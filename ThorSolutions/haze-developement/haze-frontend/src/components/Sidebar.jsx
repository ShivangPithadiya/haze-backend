import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import svg1 from "../../public/assets/Image/Orders.svg";

const Sidebar = ({ isSidebarOpen, closeNav }) => {
  const userType = useSelector((state) => state.user.user.userType)
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("/dashboard");
  const [isMobile, setIsMobile] = useState(false);
  const user = useSelector(state => state.user.user)

  const menu = {
    "admin": [
    { name: 'Orders', url: '/orders', icon: 'assets/Image/Orders.svg' },
    { name: 'Products', url: '/my-products', icon: 'assets/Image/My Products.svg' },
    { name: 'Pricing Rules', url: '/pricing-rules', icon: 'assets/Image/Pricing Rules.svg' },
    { name: 'Theme Builder', url: '/theme-selector', icon: 'assets/Image/Theme Builder.svg' },
    { name: 'Printing Methods', url: '/printing-methods', icon: 'assets/Image/Printing Methods.svg' },
    { name: 'Saved Designs', url: '/saved-designs', icon: 'assets/Image/Saved Designs.svg' },
    { name: 'Settings', url: '/settings', icon: 'assets/Image/Settings.svg' },
  ],
  "retail-user": [
    { name: 'Orders', url: '/orders', icon: 'assets/Image/Orders.svg' },
    { name: 'Products', url: '/my-products', icon: 'assets/Image/My Products.svg' },
    { name: 'Pricing Rules', url: '/pricing-rules', icon: 'assets/Image/Pricing Rules.svg' },
    { name: 'Settings', url: '/settings', icon: 'assets/Image/Settings.svg' },
  ],
  "super-admin": [
    { name: 'Orders', url: '/orders', icon: 'assets/Image/Orders.svg' },
    { name: 'Products', url: '/my-products', icon: 'assets/Image/My Products.svg' },
  ]
};
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleUserDropdown = () => {
    var userDropdownOptions = document.getElementById("userDropdownOptions");
    userDropdownOptions.style.display =
      userDropdownOptions.style.display === "block" ? "none" : "block";
  };
  return (
    <>
      <div className={`sider_baar ${isMobile ? 'mobile' : 'desktop'} ${isSidebarOpen ? 'open' : 'close'}`}>
        <div className="sidebar_menu_section">
          <a class="closebtn" onClick={closeNav} >&times;</a>
          <ul className="sidebar_menu">

            <li className="sidebar_list ">
              <a href="/dashboard">
                <span className="sidebar_menu_icon">
                  <img src="assets/Image/home.svg" />
                </span>
                <span
                  className={`sidebar_menu_name mt-2 px-2 ${activeLink === "/dashboard" ? "active_list" : ""
                    }`}
                >
                  Dashboard
                </span>
              </a>
            </li>
            {/*sidebar */}
            {
              <>
              {menu[userType].map((item, index) => (
                <li key={index} className="sidebar_list">
                  <a href={item.url} className={activeLink === item.url ? "active" : ""}>
                    <span className="sidebar_menu_icon">
                      <img src={item.icon} alt={item.name} />
                    </span>
                    <span className={`sidebar_menu_name mt-2 px-2 ${activeLink === `/${item.url}` ? "active_list active" : ""
                      }`}>{item.name}</span>
                  </a>
                </li>
              ))}
            </>
            }
            
          </ul>

          {/* go to profile */}
          <div className="user_profile_sectiion">
            <div className="user_profile">
              <div className="custom-user-dropdown">
                <img
                  className="user-avatar"
                  src="assets/Image/Avatar.png"
                  alt="User Avatar"
                />
                <div className="user_profile">
                  <div className="user-name">{user.name}</div>
                  <div className="user_roll">{user.userType}</div>
                </div>
                <div
                  className="custom-user-dropdown-toggle"
                  onClick={toggleUserDropdown}
                >
                  <img src="./public/assets/Image/Dropdown.svg" />
                </div>
                <div
                  className="custom-user-dropdown-options"
                  id="userDropdownOptions"
                >
                  <a href="/your-profile">
                    <span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 0C6.383 0 4.25391 2.1291 4.25391 4.74609C4.25391 7.36309 6.383 9.49219 9 9.49219C11.617 9.49219 13.7461 7.36309 13.7461 4.74609C13.7461 2.1291 11.617 0 9 0ZM9 8.4375C6.96456 8.4375 5.30859 6.78154 5.30859 4.74609C5.30859 2.71065 6.96456 1.05469 9 1.05469C11.0354 1.05469 12.6914 2.71065 12.6914 4.74609C12.6914 6.78154 11.0354 8.4375 9 8.4375Z"
                          fill="#2D2D2D"
                        />
                        <path
                          d="M14.9051 12.5928C13.6057 11.2734 11.8831 10.5469 10.0547 10.5469H7.94531C6.11691 10.5469 4.39432 11.2734 3.09495 12.5928C1.80193 13.9057 1.08984 15.6387 1.08984 17.4727C1.08984 17.7639 1.32595 18 1.61719 18H16.3828C16.674 18 16.9102 17.7639 16.9102 17.4727C16.9102 15.6387 16.1981 13.9057 14.9051 12.5928ZM2.16773 16.9453C2.43193 13.954 4.92226 11.6016 7.94531 11.6016H10.0547C13.0777 11.6016 15.5681 13.954 15.8323 16.9453H2.16773Z"
                          fill="#2D2D2D"
                        />
                      </svg>
                    </span>
                    Your Profile
                  </a>
                  <a href="#">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_1519_711)">
                          <path
                            d="M18.5959 8.71967C18.5193 6.53811 17.6359 4.49811 16.0846 2.94686C14.4587 1.32061 12.2977 0.425293 10.0002 0.425293C5.35992 0.425293 1.56836 4.11873 1.40492 8.71967C0.696797 9.03436 0.201172 9.7431 0.201172 10.5669V12.8362C0.201172 13.9506 1.10773 14.8575 2.22242 14.8575C2.94367 14.8575 3.53023 14.2709 3.53023 13.5497V9.85311C3.53023 9.17592 3.01086 8.62373 2.35055 8.55811C2.5943 4.54967 5.93117 1.36279 10.0002 1.36279C12.0477 1.36279 13.973 2.16092 15.4221 3.60998C16.7527 4.94061 17.5315 6.67498 17.6487 8.55842C16.989 8.62467 16.4705 9.17654 16.4705 9.85311V13.5494C16.4705 14.2322 16.998 14.7878 17.6662 14.8456V15.7797C17.6662 16.8315 16.8102 17.6872 15.7584 17.6872H14.3455C14.2762 17.489 14.1674 17.3059 14.0149 17.154C13.7477 16.8856 13.3915 16.7378 13.0121 16.7378H11.5559C11.3468 16.7378 11.1462 16.7822 10.9624 16.8678C10.4612 17.0981 10.1374 17.6037 10.1374 18.1559C10.1374 18.5353 10.2852 18.8915 10.553 19.1581C10.8209 19.4265 11.1771 19.5744 11.5559 19.5744H13.0121C13.6159 19.5744 14.148 19.184 14.3465 18.6247H15.7584C17.3274 18.6247 18.6037 17.3484 18.6037 15.7797V14.6787C19.3074 14.3622 19.7993 13.6559 19.7993 12.8356V10.5662C19.7993 9.74311 19.3037 9.03436 18.5959 8.71967ZM2.59242 9.85311V13.5494C2.59242 13.7534 2.42648 13.9197 2.22211 13.9197C1.62461 13.9197 1.13836 13.4334 1.13836 12.8359V10.5665C1.13836 9.96873 1.62461 9.48279 2.22211 9.48279C2.42648 9.48279 2.59242 9.64904 2.59242 9.85311ZM13.4824 18.2565C13.4359 18.4772 13.2377 18.6375 13.0118 18.6375H11.5555C11.4274 18.6375 11.3071 18.5875 11.2152 18.4956C11.1246 18.4053 11.0746 18.2847 11.0746 18.1565C11.0746 17.9694 11.1843 17.7984 11.3562 17.7194C11.4174 17.6906 11.4846 17.6759 11.5555 17.6759H13.0118C13.1399 17.6759 13.2602 17.7256 13.3518 17.8175C13.4424 17.9078 13.4924 18.0284 13.4924 18.1565C13.4927 18.1909 13.489 18.2253 13.4824 18.2565ZM18.8618 12.8359C18.8618 13.4334 18.3755 13.9197 17.778 13.9197C17.574 13.9197 17.4077 13.7537 17.4077 13.5494V9.85311C17.4077 9.64904 17.5737 9.48279 17.778 9.48279C18.3755 9.48279 18.8618 9.96904 18.8618 10.5665V12.8359Z"
                            fill="#2D2D2D"
                          />
                          <path
                            d="M13.0354 12.9975C14.1307 12.9975 15.0216 12.1062 15.0216 11.0112V6.96403C15.0216 6.43466 14.8148 5.93591 14.4391 5.56028C14.0635 5.18466 13.5651 4.97778 13.0354 4.97778H6.96477C5.86945 4.97778 4.97852 5.86872 4.97852 6.96403V11.0112C4.97852 12.1065 5.86945 12.9975 6.96477 12.9975H7.00195V14.0462C7.00195 14.4462 7.24039 14.8012 7.60914 14.9509C7.7282 14.9987 7.85195 15.0225 7.97445 15.0225C8.22977 15.0225 8.47852 14.9212 8.6607 14.7328L10.4054 12.9975H13.0354ZM9.88195 12.1962L7.99383 14.074C7.98539 14.0828 7.97914 14.0893 7.96133 14.0815C7.93977 14.0728 7.93977 14.0587 7.93977 14.0462V12.5287C7.93977 12.27 7.73008 12.06 7.47102 12.06H6.96508C6.38664 12.06 5.91633 11.5893 5.91633 11.0112V6.96403C5.91633 6.3856 6.38664 5.91528 6.96508 5.91528H13.0357C13.3151 5.91528 13.5779 6.02466 13.7766 6.2231C13.9754 6.42185 14.0845 6.68497 14.0845 6.96403V11.0112C14.0845 11.5897 13.6138 12.06 13.0357 12.06H10.2126C10.0885 12.06 9.96977 12.109 9.88195 12.1962Z"
                            fill="#2D2D2D"
                          />
                          <path
                            d="M7.72281 8.37085C7.34156 8.37085 7.03125 8.68147 7.03125 9.06241C7.03125 9.44335 7.34187 9.75397 7.72281 9.75397C8.10437 9.75397 8.415 9.44335 8.415 9.06241C8.415 8.68147 8.10469 8.37085 7.72281 8.37085Z"
                            fill="#2D2D2D"
                          />
                          <path
                            d="M10.0002 8.37085C9.61891 8.37085 9.30859 8.68147 9.30859 9.06241C9.30859 9.44335 9.61922 9.75397 10.0002 9.75397C10.382 9.75397 10.6923 9.44335 10.6923 9.06241C10.6923 8.68147 10.382 8.37085 10.0002 8.37085Z"
                            fill="#2D2D2D"
                          />
                          <path
                            d="M12.277 8.37085C11.8958 8.37085 11.5854 8.68147 11.5854 9.06241C11.5854 9.44335 11.8961 9.75397 12.277 9.75397C12.6586 9.75397 12.9692 9.44335 12.9692 9.06241C12.9692 8.68147 12.6586 8.37085 12.277 8.37085Z"
                            fill="#2D2D2D"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1519_711">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    Help Center
                  </a>
                  <a href="#">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill=""
                      >
                        <g clip-path="url(#clip0_1519_718)">
                          <path
                            d="M8.97012 16.475H2.24251C1.82988 16.475 1.49502 16.1401 1.49502 15.7275V2.27233C1.49502 1.8597 1.82992 1.52484 2.24251 1.52484H8.97012C9.38348 1.52484 9.71761 1.19071 9.71761 0.777348C9.71761 0.36398 9.38348 0.0297852 8.97012 0.0297852H2.24251C1.00614 0.0297852 0 1.03596 0 2.27233V15.7275C0 16.9638 1.00614 17.97 2.24251 17.97H8.97012C9.38348 17.97 9.71761 17.6359 9.71761 17.2225C9.71761 16.8091 9.38348 16.475 8.97012 16.475Z"
                            fill="#2D2D2D"
                          />
                          <path
                            d="M17.7772 8.46784L13.2323 3.98278C12.9393 3.69274 12.4654 3.6965 12.1753 3.99027C11.8853 4.28403 11.8883 4.7572 12.1828 5.04724L15.4307 8.25254H6.72747C6.31411 8.25254 5.97998 8.58667 5.97998 9.00003C5.97998 9.4134 6.31411 9.74756 6.72747 9.74756H15.4307L12.1828 12.9529C11.8883 13.2429 11.8861 13.7161 12.1753 14.0098C12.3218 14.1578 12.5147 14.2326 12.7076 14.2326C12.8974 14.2326 13.0873 14.1608 13.2323 14.0173L17.7772 9.53223C17.9192 9.39171 17.9999 9.20032 17.9999 9C17.9999 8.79975 17.9199 8.60913 17.7772 8.46784Z"
                            fill="#2D2D2D"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1519_718">
                            <rect width="18" height="18" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
