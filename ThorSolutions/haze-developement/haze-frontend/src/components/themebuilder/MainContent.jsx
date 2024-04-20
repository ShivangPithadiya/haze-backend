import React, { useContext, useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ThemeContext from "../../contexts/ThemeContext";
import Slider from "react-slick";
import NextArrow from "./MainComponent/Arrows/NextArrow";
import PreviousArrow from "./MainComponent/Arrows/PreviousArrow";
import CustomDots from "./MainComponent/CustomDots";
import CustomizerTitle from "./MainComponent/CustomizerTitle";
import AddToCart from "./MainComponent/AddToCart";
import Zoom from "./MainComponent/Zoom";
import ShareButton from "./MainComponent/ShareButton";
import { useSelector } from "react-redux";

var settings = {
  dots: true,
  customPaging: (i) => <CustomDots active={i === 0} />,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <NextArrow />,
  prevArrow: <PreviousArrow />,
};

const MainContent = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { customizerData } = useContext(ThemeContext);
  const [customizerLayerPanel, setCustomizerLayerPanel] = useState({});
  const [customizerLayerList, setCustomizerLayerList] = useState({});
  const [customizerPrice, setCustomizerPrice] = useState({});
  const [customizerZoom, setCustomizerZoom] = useState({});
  const [customizerOutOfStock, setCustomizerOutOfStock] = useState({});

  const [accordionOneOpen, setAccordionOneOpen] = useState(false);
  const [accordionTwoOpen, setAccordionTwoOpen] = useState(false);
  const [accordionThreeOpen, setAccordionThreeOpen] = useState(false);


  const viewport = useSelector(state => state.customizeProduct.viewport);

  const toggleAccordionOne = () => {
    setAccordionOneOpen((prev) => !prev);
    setAccordionTwoOpen(false);
    setAccordionThreeOpen(false);
  };

  const toggleAccordionTwo = () => {
    setAccordionTwoOpen((prev) => !prev);
    setAccordionOneOpen(false);
    setAccordionThreeOpen(false);
  };

  const toggleAccordionThree = () => {
    setAccordionThreeOpen((prev) => !prev);
    setAccordionOneOpen(false);
    setAccordionTwoOpen(false);
  };

  useEffect(() => {
    setCustomizerLayerPanel({
      backgroundColor: customizerData?.LayersPanel?.LayersPanelBackgroundColor,
      border:
        customizerData?.LayersPanel?.LayersPanelBorderThickness +
        " solid " +
        customizerData?.LayersPanel?.LayersPanelBorderColor,
      PanelPosition: customizerData?.LayersPanel?.LayersPanelPosition,
    });
    setCustomizerLayerList({
      color: customizerData?.LayersList?.LayersListFontColor,
    });
    setCustomizerPrice({});
    setCustomizerZoom({
      fillColor: customizerData?.Zoom?.ZoomColor,
    });
    setCustomizerOutOfStock({
      fillColor: customizerData?.OutOfStock?.OutOfStockBadgeIconColor,
      iconBackgroundColor:
        customizerData?.OutOfStock?.OutOfStockBadgeBackgroundColor,
    });
  }, [customizerData, isMobile]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="center_wrapper">
        <>
          {customizerData?.ThemeType?.ThemeSelect === "Minimal" && (
            <div className={`${viewport === true ? "selectedviewport" : "products_wrapper"}`}>
              {customizerLayerPanel?.PanelPosition === "left" && (
                <>
                  <div className="products_col prod_col" style={customizerLayerPanel}>
                    <CustomizerTitle />
                    <div
                      className="products_wrapper_tag  col_padding"
                      style={customizerLayerList}
                    >
                      Mug
                    </div>
                    <div className="products_wrapper_row">
                      <div className="products_wrapper_col">
                        <div className="products-active products_wrapper_image">
                          <img src="/assets/Image/product/mug.svg" />
                        </div>
                      </div>
                    </div>
                    <div
                      className="products_wrapper_tag"
                      style={customizerLayerList}
                    >
                      Mug Colour
                    </div>
                    <div className="products_wrapper_row">
                      <div className="products_wrapper_col">
                        <div className="products_colour_section">
                          <span className="products-active"></span>
                          <span>
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="100%"
                                height="100%"
                                fill={customizerOutOfStock.iconBackgroundColor}
                              />
                              <path
                                d="M7 0C3.14012 0 0 3.14012 0 7C0 10.8599 3.14012 14 7 14C10.8599 14 14 10.8599 14 7C14 3.14012 10.8599 0 7 0ZM7 1.35484C8.31269 1.35484 9.5191 1.80902 10.479 2.56334L2.56326 10.4789C1.80899 9.51902 1.35484 8.31264 1.35484 7C1.35484 3.88722 3.88722 1.35484 7 1.35484ZM7 12.6452C5.68736 12.6452 4.48101 12.191 3.52117 11.4368L11.4369 3.52128C12.1911 4.4811 12.6452 5.68742 12.6452 7C12.6452 10.1128 10.1128 12.6452 7 12.6452Z"
                                fill={customizerOutOfStock.fillColor}
                              />
                            </svg>
                          </span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                      <div className="products_wrapper_tag">Handle</div>
                    </div>
                    <div className="products_wrapper_row">
                      <div className="products_wrapper_col">
                        <div className="products-active products_wrapper_image">
                          <img src="/assets/Image/product/mug-handle.svg" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="products_col">
                    <div className="products_top_section">
                      <div className="products_top_section_row">
                        <div className="products_amount">
                          <span className="currency_symbol">$</span>
                          <span className="currency_value">24</span>
                        </div>
                        <div className="products_button">
                          <Zoom />
                          <ShareButton />
                        </div>
                      </div>
                    </div>
                    <div className="products_slid">
                      <Slider {...settings}>
                        <div className="mb-3">
                          <img src="/assets/Image/product/mug.png" />
                        </div>
                        <div>
                          <img src="/assets/Image/product/mug.png" className="p-2"/>
                        </div>
                      </Slider>
                    </div>
                    <AddToCart />
                  </div>
                </>
              )}
              {customizerLayerPanel?.PanelPosition === "right" && (
                <>
                  <div className="products_col ">
                    <div className="products_top_section">
                      <div className="products_top_section_row">
                        <div className="products_amount">
                          <span className="currency_symbol">$</span>
                          <span className="currency_value">24</span>
                        </div>
                        <div className="products_button">
                          <Zoom />
                          <ShareButton />
                        </div>
                      </div>
                    </div>
                    <div className="products_slid">
                      <Slider {...settings}>
                        <div>
                          <img src="/assets/Image/product/mug.png" />
                        </div>
                        <div>
                          <img src="/assets/Image/product/mug.png" />
                        </div>
                      </Slider>
                    </div>
                    <AddToCart />
                  </div>
                  <div className="products_col" style={customizerLayerPanel}>
                    <CustomizerTitle />
                    <div
                      className="products_wrapper_tag  col_padding"
                      style={customizerLayerList}
                    >
                      Mug
                    </div>
                    <div className="products_wrapper_row">
                      <div className="products_wrapper_col">
                        <div className="products-active products_wrapper_image">
                          <img src="/assets/Image/product/mug.svg" />
                        </div>
                      </div>
                    </div>
                    <div
                      className="products_wrapper_tag"
                      style={customizerLayerList}
                    >
                      Mug Colour
                    </div>
                    <div className="products_wrapper_row">
                      <div className="products_wrapper_col">
                        <div className="products_colour_section">
                          <span className="products-active"></span>
                          <span>
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="100%"
                                height="100%"
                                fill={customizerOutOfStock.iconBackgroundColor}
                              />
                              <path
                                d="M7 0C3.14012 0 0 3.14012 0 7C0 10.8599 3.14012 14 7 14C10.8599 14 14 10.8599 14 7C14 3.14012 10.8599 0 7 0ZM7 1.35484C8.31269 1.35484 9.5191 1.80902 10.479 2.56334L2.56326 10.4789C1.80899 9.51902 1.35484 8.31264 1.35484 7C1.35484 3.88722 3.88722 1.35484 7 1.35484ZM7 12.6452C5.68736 12.6452 4.48101 12.191 3.52117 11.4368L11.4369 3.52128C12.1911 4.4811 12.6452 5.68742 12.6452 7C12.6452 10.1128 10.1128 12.6452 7 12.6452Z"
                                fill={customizerOutOfStock.fillColor}
                              />
                            </svg>
                          </span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                      <div className="products_wrapper_tag">Handle</div>
                    </div>
                    <div className="products_wrapper_row">
                      <div className="products_wrapper_col">
                        <div className="products-active products_wrapper_image">
                          <img src="/assets/Image/product/mug-handle.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </>
        {customizerData?.ThemeType?.ThemeSelect === "Complexion" && (
          <div  className={`${viewport === true ? "selectedviewport" : "products_wrapper"}`}>
            {customizerLayerPanel?.PanelPosition === "left" && (
              <>
                <div className="products_col prod_col" style={customizerLayerPanel}>
                  <CustomizerTitle />
                  <div className="products_wrapper_tag__main">
                    <div className="products__cont__three">
                      <div className="br__bttotom">
                        <div
                          onClick={toggleAccordionOne}
                          className={`accordion-title ${accordionOneOpen ? "open" : ""
                            }`}
                        >
                          <h2 className="products_wrapper_tag ">Mug Colour</h2>
                        </div>
                        <div
                          className={`accordion-content ${accordionOneOpen ? "open" : ""
                            }`}
                        >
                          <div className="colors__box">
                            <div className="products_colour_section">
                              <span className="products-active"></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="br__bttotom">
                        <div
                          onClick={toggleAccordionTwo}
                          className={`accordion-title ${accordionTwoOpen ? "open" : ""
                            }`}
                        >
                          <h2 className="products_wrapper_tag ">
                            Handle Colour
                          </h2>
                        </div>
                        <div
                          className={`accordion-content ${accordionTwoOpen ? "open" : ""
                            }`}
                        >
                          <div className="colors__box">
                            <div className="products_colour_section">
                              <span className="products-active"></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="br__bttotom">
                        <div
                          onClick={toggleAccordionThree}
                          className={`accordion-title ${accordionThreeOpen ? "open" : ""
                            }`}
                        >
                          <h2 className="products_wrapper_tag ">Enter Text</h2>
                        </div>
                        <div
                          className={`accordion-content ${accordionThreeOpen ? "open" : ""
                            }`}
                        >
                          <h4 className="text__printed__acc">
                            Enter Text to be Printed
                          </h4>
                          <input
                            placeholder="Your Text"
                            className="input__text__field__acc"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="products_wrapper_row">
                      <div className="products_wrapper_col"></div>
                    </div>
                  </div>
                </div>
                <div className="products_col">
                  <div className="products_top_section">
                    <div className="products_top_section_row">
                      <div className="products_button">
                        <Zoom />
                        <ShareButton />
                      </div>
                      <div className="products_amount">
                        <span className="currency_symbol">$</span>
                        <span className="currency_value">24</span>
                      </div>
                    </div>
                  </div>
                  <div className="products_slid">
                    <Slider {...settings}>
                      <div>
                        <img src="/assets/Image/product/mug.png" />
                      </div>
                      <div>
                        <img src="/assets/Image/product/mug.png" />
                      </div>
                    </Slider>
                  </div>
                  <AddToCart />
                </div>
              </>
            )}
            {customizerLayerPanel?.PanelPosition === "right" && (
              <>
                <div className="products_col">
                  <div className="products_top_section">
                    <div className="products_top_section_row">
                      <div className="products_button">
                        <Zoom />
                        <ShareButton />
                      </div>
                      <div className="products_amount">
                        <span className="currency_symbol">$</span>
                        <span className="currency_value">24</span>
                      </div>
                    </div>
                  </div>
                  <div className="products_slid">
                    <Slider {...settings}>
                      <div>
                        <img src="/assets/Image/product/mug.png" />
                      </div>
                      <div>
                        <img src="/assets/Image/product/mug.png" />
                      </div>
                    </Slider>
                  </div>
                  <AddToCart />
                </div>
                <div className="products_col" style={customizerLayerPanel}>
                  <CustomizerTitle />
                  <div className="products_wrapper_tag__main">
                    <div className="products__cont__three">
                      <div className="br__bttotom">
                        <div
                          onClick={toggleAccordionOne}
                          className={`accordion-title ${accordionOneOpen ? "open" : ""
                            }`}
                        >
                          <h2 className="products_wrapper_tag ">Mug Colour</h2>
                        </div>
                        <div
                          className={`accordion-content ${accordionOneOpen ? "open" : ""
                            }`}
                        >
                          <div className="colors__box">
                            <div className="products_colour_section">
                              <span className="products-active"></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="br__bttotom">
                        <div
                          onClick={toggleAccordionTwo}
                          className={`accordion-title ${accordionTwoOpen ? "open" : ""
                            }`}
                        >
                          <h2 className="products_wrapper_tag ">
                            Handle Colour
                          </h2>
                        </div>
                        <div
                          className={`accordion-content ${accordionTwoOpen ? "open" : ""
                            }`}
                        >
                          <div className="colors__box">
                            <div className="products_colour_section">
                              <span className="products-active"></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="br__bttotom">
                        <div
                          onClick={toggleAccordionThree}
                          className={`accordion-title ${accordionThreeOpen ? "open" : ""
                            }`}
                        >
                          <h2 className="products_wrapper_tag ">Enter Text</h2>
                        </div>
                        <div
                          className={`accordion-content ${accordionThreeOpen ? "open" : ""
                            }`}
                        >
                          <h4 className="text__printed__acc">
                            Enter Text to be Printed
                          </h4>
                          <input
                            placeholder="Your Text"
                            className="input__text__field__acc"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="products_wrapper_row">
                      <div className="products_wrapper_col"></div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default MainContent;
