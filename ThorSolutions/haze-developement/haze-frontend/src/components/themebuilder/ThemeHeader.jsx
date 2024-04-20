import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ThemeContext from "../../contexts/ThemeContext";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { setViewport } from "../../features/customizeProductSlice";
import { useDispatch, useSelector } from "react-redux";
const ThemeHeader = () => {
  const { customizerData, updateCustomizerData } = useContext(ThemeContext);
  const [selectProduct, setSelectProduct] = ("")
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedTheme = queryParams.get("selectedTheme");

  const dispatch = useDispatch();

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

  useEffect(() => {
    updateCustomizerData((prevData) => {
      return {
        ...prevData,
        ThemeType: {
          ThemeSelect: selectedTheme,
        },
      };
    });
  }, [selectedTheme]);

  const navigate = useNavigate();
  const changeTheme = (theme) => {
    theme === "Minimal"
      ? navigate(`/theme-builder?selectedTheme=Complexion#${visibleItem}`)
      : navigate(`/theme-builder?selectedTheme=Minimal#${visibleItem}`);
    updateCustomizerData((prevData) => {
      return {
        ...prevData,
        ThemeType: {
          ThemeSelect: theme,
        },
      };
    });
  };
  /*
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);  
  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://5fbcc6-4.myshopify.com/admin/api/2022-01/products.json',
        {
          headers: {
            'X-Shopify-Access-Token': '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',
          },
        }
      );

      setProducts(response.data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  console.log("products",products);*/

  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    const token = localStorage.getItem('token')
    try {
      const response = await axios.get(
        'http://ec2-52-6-145-35.compute-1.amazonaws.com:5001/api/product/getAll',
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      )
      console.log(response, "response.data.products")
      setSelectProduct(response.data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };


  const handleDiscard = () => {
    navigate(`/my-products`)
  }
  const handleSaveThemeCustomizerData = () => {

  }



  return (
    <>
      <header className="Haze_header">
        <div className="left_navbar">
          <div className="logo">
            <a href="/dashboard">
              <img src="assets/Image/hazelogo.svg" />
            </a>
          </div>
          <div className="them_title">
            {customizerData.ThemeType.ThemeSelect}
          </div>
          <button
            onClick={() => changeTheme(customizerData.ThemeType.ThemeSelect)}
            className="them_button"
          >
            Change
          </button>
        </div>

        <div className="Select_Product_button">
          <div className="custom-select">
            <select>
              <option value="none" selected disabled hidden>Select Product</option>
              {selectProduct && selectProduct.map((product, index) => (
                <>
                  <option key={index} value="0">{product.data}</option>
                </>
              ))}
            </select>
          </div>
        </div>


        {/* viewport section */}
        <div className="viewport_product">
          {/* <div className="dropdown"> */}
          <button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pc-display-horizontal" viewBox="0 0 16 16">
              <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5M12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0M1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25" />
            </svg>
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#" onClick={() => { console.log("clicked"); dispatch(setViewport(false)) }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pc-display-horizontal" viewBox="0 0 16 16">
                  <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5M12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0M1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25" />
                </svg>
              </a>
            </li>
            <li><a className="dropdown-item" href="#" onClick={() => { console.log("clicked"); dispatch(setViewport(true)) }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
              <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
            </svg></a></li>
          </ul>
          {/* </div> */}
        </div>

        <div className="right_button_section">
          <button onClick={handleDiscard}>Discard</button>
          <button onClick={handleSaveThemeCustomizerData}>Save</button>
        </div>
      </header>
    </>
  );
};

export default ThemeHeader;