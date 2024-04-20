import React from "react";

const SavedDesigns = () => {
  return (
    <div className="left_wrapper">
      <div className="wrapper_header">
        <div className="wraper_header_title">Saved Designs</div>
        <div className="wraper_button_section products_btn">
          <button className="add_button">View Demos</button>
          <button
            className="add_button dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            + Add Product
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

      <div className="main_container">
        <div className="my_products">
          <div className="products_hr"> </div>
          <div className="active_products_section  saved_designs_section">
            <div className="row">
              <div className="col-md-4">
                <div className="products_card">
                  <div className="products_body">
                    <div className="products_image">
                      <img src="assets/Image/Typography.jpg" />
                    </div>
                    <div className="products_card_cont">
                      <div className="products_card_title"> Typography</div>
                      <div className="products_card_description">
                        Updated 5mins ago
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="products_card">
                  <div className="products_body">
                    <div className="products_image">
                      <img src="assets/Image/Floral.png" />
                    </div>
                    <div className="products_card_cont">
                      <div className="products_card_title"> Floral</div>
                      <div className="products_card_description">
                        Updated 5mins ago
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="products_card">
                  <div className="products_body">
                    <div className="products_image">
                      <img src="assets/Image/Design.png" />
                    </div>
                    <div className="products_card_cont">
                      <div className="products_card_title"> Design for Mug</div>
                      <div className="products_card_description">
                        Updated 5mins ago
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="products_card">
                  <div className="products_body">
                    <div className="products_image">
                      <img src="assets/Image/Typography.jpg" />
                    </div>
                    <div className="products_card_cont">
                      <div className="products_card_title"> Typography</div>
                      <div className="products_card_description">
                        Updated 5mins ago
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="products_card">
                  <div className="products_body">
                    <div className="products_image">
                      <img src="assets/Image/Floral.png" />
                    </div>
                    <div className="products_card_cont">
                      <div className="products_card_title"> Floral</div>
                      <div className="products_card_description">
                        Updated 5mins ago
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="products_card">
                  <div className="products_body">
                    <div className="products_image">
                      <img src="assets/Image/Design.png" />
                    </div>
                    <div className="products_card_cont">
                      <div className="products_card_title"> Design for Mug</div>
                      <div className="products_card_description">
                        Updated 5mins ago
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedDesigns;
