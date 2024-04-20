import React from "react";

const PrintingMethods = () => {
  return (
    <div className="left_wrapper">
      <div className="wrapper_header">
        <div className="wraper_header_title">Printing Methods</div>
        <div className="wraper_button_section products_btn  Printing_Methods_btn">
          <button className="add_button ">View Demos</button>
          <button
            className="add_button dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            + Add Printing Method
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                View Themes
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Select a Theme
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                1 .Minimal
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                2 .Complexion
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div clasclassNames="main_container">
        <div className="my_products">
          <div className=" products_hr"></div>
          <div className="add_products_section printin_methods_section">
            <div className="add_products_col">
              <div className="add_products_col_icon">
                <img src="assets/Image/Printing Methods.svg" />
              </div>
              <div className="add_products_col_title">
                There’s no printing method decided, yet
              </div>
              <div className="wraper_button_section">
                <button className="add_button ">+ Add Printing Method</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintingMethods;
