import React, { useState, useEffect, useRef } from "react";
import "../products/myproduct.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetState } from "../../features/customizeProductSlice";
import { LuArrowUpDown } from "react-icons/lu";
import {
  HiOutlineArrowNarrowDown,
  HiOutlineArrowNarrowUp,
} from "react-icons/hi";

const MyProduct = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [activeProducts, setActiveProducts] = useState([]);
  const [inactiveProducts, setInactiveProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Sort by");
  const [showDateOptions, setShowDateOptions] = useState(false);
  const [showNameOptions, setShowNameOptions] = useState(false);
  const [sortBy, setSortBy] = useState(""); // Track sorting by "Dates" or "Product name"
  const [sortOrder, setSortOrder] = useState(""); // Track sorting order "Newest to oldest", "Oldest to Newest", "A to Z", or "Z to A"
  const [sortedActiveProducts, setSortedActiveProducts] = useState([]); // State to hold sorted and searched active products
  const dropdownRef = useRef(null); // Ref for the dropdown

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  const handleSortOptionClick = (optionText) => {
    setSelectedOption(optionText);

    // Show sorting options based on selected option
    if (optionText === "Dates") {
      setShowDateOptions(true);
      setShowNameOptions(false);
      setSortBy("Dates"); // Set sorting by "Dates"
    } else if (optionText === "Product name") {
      setShowNameOptions(true);
      setShowDateOptions(false);
      setSortBy("Product name"); // Set sorting by "Product name"
    }
  };

  const handleSortOrderClick = (orderText) => {
    if (sortBy !== "") {
      setSortOrder(orderText);
    }
  };

  const handleSort = () => {
    // Sort active products based on selected options
    let sortedActiveProducts = [...activeProducts];
    if (sortBy === "Dates") {
      sortedActiveProducts.sort((a, b) => {
        if (sortOrder === "Newest to oldest") {
          return new Date(b.published_at) - new Date(a.published_at);
        } else if (sortOrder === "Oldest to Newest") {
          return new Date(a.published_at) - new Date(b.published_at);
        }
      });
    } else if (sortBy === "Product name") {
      if (sortOrder === "A to Z") {
        sortedActiveProducts.sort((a, b) => a.title.localeCompare(b.title));
      } else if (sortOrder === "Z to A") {
        sortedActiveProducts.sort((a, b) => b.title.localeCompare(a.title));
      }
    }
    return sortedActiveProducts;
  };

  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSortAndSearch = () => {
    let sortedProducts = handleSort(); // Sort the products
    // Filter sorted products based on search input
    sortedProducts = sortedProducts.filter((product) =>
      product.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSortedActiveProducts(sortedProducts); // Set the sorted and searched products
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://ec2-52-6-145-35.compute-1.amazonaws.com:5001/api/data/ProductData"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    setActiveProducts(
      products.filter((product) => product.status === "active")
    );
    setInactiveProducts(
      products.filter((product) => product.status !== "active")
    );
  }, [products]);

  useEffect(() => {
    handleSortAndSearch(); // Call the function whenever searchInput, activeProducts, sortBy, or sortOrder changes
  }, [searchInput, activeProducts, sortBy, sortOrder]);

  const handleNavigate = (productType) => {
    navigate(`/product-customizer?productType=${productType}`);
    dispatch(resetState());
  };

  return (
    <div className="left_wrapper">
      <div className="wrapper_header">
        <div className="wraper_header_title">My Products</div>
        <div className="wraper_button_section products_btn">
          <button className="add_button">View Demos</button>
          <button
            className="add_button dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            + Create Product
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
            <li onClick={() => handleNavigate("Minimal")}>
              <a className="dropdown-item">1 . Minimal</a>
            </li>
            <li onClick={() => handleNavigate("Complex")}>
              <a className="dropdown-item">2 . Complexion</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="main_container">
        <div className="my_products">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-Active-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-Active"
                type="button"
                role="tab"
                aria-controls="pills-Active"
                aria-selected="true"
              >
                Active
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-Drafts-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-Drafts"
                type="button"
                role="tab"
                aria-controls="pills-Drafts"
                aria-selected="false"
              >
                Drafts
              </button>
            </li>
          </ul>
          <div className="d-flex gap-5 p-2 mx-2">
            <input
              className="ip1"
              value={searchInput}
              onChange={handleSearch}
              placeholder=""
            />
            <div className="div1"></div>
            <div
              ref={dropdownRef}
              className={`select-menu ${isActive ? "active" : ""}`}
            >
              <div className="select-btn" onClick={toggleDropdown}>
                <span className="sBtn-text">{selectedOption}</span>
                <LuArrowUpDown />
              </div>
              <ul className="options">
                <li className="option">
                  <input
                    className="input-radio on"
                    type="radio"
                    name="Sorting"
                    id="option1"
                    onChange={() => handleSortOptionClick("Dates")}
                  />
                  <label htmlFor="option1" className="option-text">
                    <span className="option-text">Dates</span>
                  </label>
                </li>
                <li className="option">
                  <input
                    className="input-radio on"
                    type="radio"
                    name="Sorting"
                    id="option2"
                    onChange={() => handleSortOptionClick("Product name")}
                  />
                  <label htmlFor="option2" className="option-text">
                    <span className="option-text">Product name</span>
                  </label>
                </li>
                {showDateOptions && (
                  <div className="g1 mb-2 p-2">
                    <li
                      className="mb-3 point"
                      onClick={() => handleSortOrderClick("Newest to oldest")}
                    >
                      <HiOutlineArrowNarrowUp />
                      <span className="option-text point">
                        Newest To oldest
                      </span>
                    </li>
                    <li
                      className="point"
                      onClick={() => handleSortOrderClick("Oldest to Newest")}
                    >
                      <HiOutlineArrowNarrowDown />
                      <span className="option-text point">
                        Oldest To Newest
                      </span>
                    </li>
                  </div>
                )}
                {showNameOptions && (
                  <div className="g1 mb-2 p-2">
                    <li
                      className="mb-3 point"
                      onClick={() => handleSortOrderClick("A to Z")}
                    >
                      <HiOutlineArrowNarrowUp />
                      <span className="option-text point">A To Z</span>
                    </li>
                    <li
                      className="point"
                      onClick={() => handleSortOrderClick("Z to A")}
                    >
                      <HiOutlineArrowNarrowDown />
                      <span className="option-text point">Z To A</span>
                    </li>
                  </div>
                )}
              </ul>
            </div>
          </div>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-Active"
              role="tabpanel"
              aria-labelledby="pills-Active-tab"
              tabIndex="0"
            >
              <div className="active_products_section">
                {sortedActiveProducts.length > 0 ? (
                  <div className="my-product-container">
                    {sortedActiveProducts.map((data, index) => (
                      <div key={index} className="my-products-card">
                        <div className="my-products-img">
                          <img
                            src={"./assets/img/product-0001.png"}
                            alt={`Product ${index + 1}`}
                          />
                        </div>
                        <div className="my-products-details">
                          <h3 className="my-products-title">{data.title}</h3>
                          <p className="my-products-text">
                            Last Updated: {data.published_at}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="my_products">
                    <div className=" products_hr"></div>
                    <div className="add_products_section printin_methods_section">
                      <div className="add_products_col">
                        <div className="add_products_col_icon">
                          <img
                            src="assets/Image/My Products.svg"
                            alt="My Products"
                          />
                        </div>
                        <div className="add_products_col_title">
                          There’s no product, yet
                        </div>
                        <div className="add_products_col_paragraph mt-2">
                          <p>
                            Create your first product from scratch or explore
                            all the features and possibilities with our demos.
                          </p>
                        </div>
                        <div className="wraper_button_section">
                          <button
                            className="add_button dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            + Create Product
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
                            <li onClick={() => handleNavigate("Minimal")}>
                              <a className="dropdown-item">1 . Minimal</a>
                            </li>
                            <li onClick={() => handleNavigate("Complex")}>
                              <a className="dropdown-item">2 . Complexion</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="pills-Drafts"
              role="tabpanel"
              aria-labelledby="pills-Drafts-tab"
              tabIndex="0"
            >
              <div className="active_products_section">
                {inactiveProducts.length > 0 ? (
                  <div className="my-product-container">
                    {inactiveProducts.map((data, index) => (
                      <div key={index} className="my-products-card">
                        <div className="my-products-img">
                          <img
                            src={"./assets/img/product-0001.png"}
                            alt={`Product ${index + 1}`}
                          />
                        </div>
                        <div className="my-products-details">
                          <h3 className="my-products-title">{data.title}</h3>
                          <p className="my-products-text">
                            Last Updated: {data.published_at}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="my_products">
                    <div className=" products_hr"></div>
                    <div className="add_products_section printin_methods_section">
                      <div className="add_products_col">
                        <div className="add_products_col_icon">
                          <img
                            src="assets/Image/My Products.svg"
                            alt="My Products"
                          />
                        </div>
                        <div className="add_products_col_title">
                          There is no product in draft yet.
                        </div>
                        {/* <div className="add_products_col_paragraph mt-2">
                          <p>
                            Create your first product from scratch or explore
                            all the features and possibilities with our demos.
                          </p>
                        </div> */}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProduct;
