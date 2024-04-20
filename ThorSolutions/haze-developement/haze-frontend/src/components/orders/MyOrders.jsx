import React from "react";
import "../orders/myorder.css";
import { FaSearch } from "react-icons/fa";
const MyOrders = () => {
  return (
    <div className="left_wrapper">
      <div className="wrapper_header">
        <div className="wraper_header_title">Your Orders</div>
        <div className="wraper_button_section products_btn">
          <button className="add_button ">View Demos</button>
          <button
            className="add_button dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            + Add Product{" "}
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
                1 . Minimal
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                2 . Complexion
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="main_container">
        <div className="my_orders_section">
          <div className=" products_hr"></div>
          <form className="orders_form">
            <div className="orders_form_row">
              <div className="order_form_col">
                <div className="order_form_input_section">
                  <div className="order_inner_col">
                    <span className="date_title">Date from:</span>
                    <div className="order_date order_input" id="dat_from">
                      <input
                        type="date"
                        id="customDateInput"
                        placeholder="dd/mm/yyyy"
                        name="customDateInput"
                      />
                    </div>
                  </div>
                  <div className="order_inner_col">
                    <span className="date_title">Date to:</span>
                    <div className="order_date order_input" id="dat_from">
                      <input
                        type="date"
                        id="customDateInput"
                        placeholder="dd/mm/yyyy"
                        name="customDateInput"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="order_form_col">
                <div className="order_form_input_section">
                  <div
                    className="order_search_btn order_input"
                    id="order_search"
                  >
                    <input
                      type="text"
                      placeholder="Search by order number or tag"
                      name="search"
                    />
                    <FaSearch />  
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className=" products_hr"></div>

          <div className="order_data_table">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Order Number</th>
                  <th>Customers</th>
                  <th>Status</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>21 November 2023</td>
                  <td>009123</td>
                  <td>hellmann logistics</td>
                  <td>
                    the process of making or manufacturing goods and products
                    from raw materials or components. the process of making or
                    manufacturing goods and products from raw materials or
                    components.
                  </td>
                  <td>on</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
