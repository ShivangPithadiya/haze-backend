import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ThemeSelector.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <svg
        width="42"
        height="24"
        viewBox="0 0 42 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.939339 13.0607C0.353554 12.4749 0.353554 11.5251 0.939339 10.9393L10.4853 1.3934C11.0711 0.807611 12.0208 0.807611 12.6066 1.3934C13.1924 1.97919 13.1924 2.92893 12.6066 3.51472L4.12132 12L12.6066 20.4853C13.1924 21.0711 13.1924 22.0208 12.6066 22.6066C12.0208 23.1924 11.0711 23.1924 10.4853 22.6066L0.939339 13.0607ZM42 13.5H2V10.5H42V13.5Z"
          fill="#2D2D2D"
        />
      </svg>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <svg
        width="42"
        height="24"
        viewBox="0 0 42 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M41.0607 13.0607C41.6464 12.4749 41.6464 11.5251 41.0607 10.9393L31.5147 1.3934C30.9289 0.807611 29.9792 0.807611 29.3934 1.3934C28.8076 1.97919 28.8076 2.92893 29.3934 3.51472L37.8787 12L29.3934 20.4853C28.8076 21.0711 28.8076 22.0208 29.3934 22.6066C29.9792 23.1924 30.9289 23.1924 31.5147 22.6066L41.0607 13.0607ZM0 13.5H40V10.5H0V13.5Z"
          fill="#2D2D2D"
        />
      </svg>
    </div>
  );
}

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const ThemeSelector = () => {
  const [isOpenFirst, setIsOpenFirst] = useState(null);
  const [isOpenSecond, setIsOpenSecond] = useState(null);
  const navigate = useNavigate();

  const handleThemeSelect = (theme) => {
    navigate(`/theme-builder?selectedTheme=${theme}#Customizer_Title_list`);
  };

  const firstPopup = () => {
    setIsOpenFirst(!isOpenFirst);
  };

  const secondPopup = () => {
    setIsOpenSecond(!isOpenSecond);
  };

  useEffect(() => {
    document.body.style.overflow = isOpenFirst ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpenFirst]);

  useEffect(() => {
    document.body.style.overflow = isOpenSecond ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpenSecond]);

  return (
    <>
      <div className="container-fluid Haze_header">
        <a href="/dashboard">
          <img src="assets/Image/close.png" alt="Close" />
        </a>
      </div>
      <div className="container-fluids">
        <div className="theme__selector__top">
          <div className="top__box">
            <h2 className="text-wrapper-themebuilder">Themes</h2>
            <p className="para__txt__top">
              Choose a theme that fit your needs and tweak it to reflect your
              brand.
            </p>
          </div>
        </div>
        <div className="horizontal-line"></div>

        <div className="theme__selector__box">
          <div className="content__box">
            <p className="text-wrapper-themebuilder">Minimal</p>
            <p className="para__txt__cont">
              This theme is great for products with few questions. The user can
              easily customize the product by scrolling through the choices
            </p>

            <div className="theme__btn__box">
              <div className="preview">
                <a className="previewAnch" onClick={firstPopup}>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.4965 18.8469C12.32 18.8469 12.143 18.8422 11.9653 18.8328C8.18519 18.6313 4.74183 16.2711 3.1934 12.8195C3.01683 12.4258 3.19261 11.9637 3.58636 11.7867C3.9805 11.6106 4.44222 11.7859 4.61918 12.1801C5.9305 15.1027 8.84652 17.102 12.0485 17.2723C15.5821 17.4617 18.9301 15.4137 20.3813 12.1801C20.5578 11.7859 21.0203 11.6106 21.4141 11.7867C21.8078 11.9633 21.9836 12.4258 21.8071 12.8195C20.1661 16.4762 16.4707 18.8469 12.4965 18.8469Z"
                      fill="#2D2D2D"
                    />
                    <path
                      d="M3.90589 13.2816C3.79886 13.2816 3.69027 13.2594 3.58636 13.2129C3.19261 13.0363 3.01683 12.5738 3.1934 12.1801C4.90707 8.36133 8.86332 5.94649 13.0348 6.1668C16.8149 6.36836 20.2582 8.72852 21.8067 12.1801C21.9832 12.5738 21.8075 13.0359 21.4137 13.2129C21.0203 13.3895 20.5578 13.2137 20.3809 12.8195C19.0696 9.89688 16.1536 7.89766 12.9516 7.72735C9.41957 7.53867 6.06996 9.58594 4.61879 12.8195C4.4891 13.1098 4.20433 13.2816 3.90589 13.2816Z"
                      fill="#2D2D2D"
                    />
                    <path
                      d="M12.5001 15.7195C10.7247 15.7195 9.28015 14.2754 9.28015 12.5C9.28015 10.7246 10.7247 9.28046 12.5001 9.28046C14.2755 9.28046 15.72 10.7246 15.72 12.5C15.72 14.2754 14.2755 15.7195 12.5001 15.7195ZM12.5001 10.843C11.6016 10.843 10.8427 11.6016 10.8427 12.5C10.8427 13.3984 11.6016 14.157 12.5001 14.157C13.3985 14.157 14.1575 13.3984 14.1575 12.5C14.1575 11.6016 13.3985 10.843 12.5001 10.843Z"
                      fill="#2D2D2D"
                    />
                  </svg>{" "}
                  Preview
                </a>
              </div>
              <div className="select">
                <a
                  onClick={() => handleThemeSelect("Minimal")}
                  className="selectAnch"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5061 21.6575C8.64364 21.6579 5.08192 19.4446 3.37606 15.961C1.64989 12.4349 2.17255 8.03722 4.67723 5.01808C7.17919 2.00206 11.2468 0.686047 15.039 1.66534C15.4565 1.77316 15.7077 2.19933 15.6003 2.6173C15.4925 3.03527 15.0659 3.28605 14.6483 3.17862C11.4405 2.35011 7.99755 3.46339 5.87997 6.01613C3.76122 8.57042 3.31903 12.2911 4.77958 15.2747C6.23466 18.2466 9.44442 20.1825 12.739 20.0927C16.0331 20.0028 19.0225 17.9993 20.355 14.9888C21.1374 13.2208 21.303 11.2189 20.8206 9.35128C20.7128 8.9337 20.964 8.50753 21.3819 8.39933C21.7987 8.29113 22.2257 8.54269 22.3339 8.96066C22.9034 11.1673 22.7085 13.5329 21.7843 15.6212C20.2093 19.1798 16.6753 21.5482 12.7819 21.6544C12.6897 21.6564 12.5975 21.6575 12.5061 21.6575Z"
                      fill="white"
                    />
                    <path
                      d="M12.4999 13.9374C12.2999 13.9374 12.0999 13.8612 11.9476 13.7085C11.6425 13.4034 11.6425 12.9089 11.9476 12.6038L21.3226 3.22881C21.6272 2.92373 22.1226 2.92373 22.4272 3.22881C22.7323 3.53389 22.7323 4.02842 22.4272 4.3335L13.0522 13.7085C12.8999 13.8608 12.6999 13.9374 12.4999 13.9374Z"
                      fill="white"
                    />
                    <path
                      d="M12.4999 13.9374C12.2999 13.9374 12.0999 13.8612 11.9476 13.7085L8.63311 10.394C8.32803 10.089 8.32803 9.59443 8.63311 9.28936C8.93779 8.98428 9.43311 8.98428 9.73779 9.28936L13.0522 12.6038C13.3573 12.9089 13.3573 13.4034 13.0522 13.7085C12.8999 13.8608 12.6999 13.9374 12.4999 13.9374Z"
                      fill="white"
                    />
                  </svg>{" "}
                  Select
                </a>
              </div>
            </div>
          </div>
          <div className="first__img__box">
            <h2>Customer Preview Img Desktop version</h2>
          </div>
          <div className="second__img__box">
            <h2>Customer Preview Img Mobile version</h2>
          </div>

          {isOpenFirst && (
            <div className="first__popup">
              <div className="first__popup__sub__box">
                <div className="first__popup__left__box">
                  <svg
                    onClick={firstPopup}
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="close__img__popup"
                  >
                    <line
                      x1="1.42426"
                      y1="0.575736"
                      x2="12.4243"
                      y2="11.5757"
                      stroke="#2D2D2D"
                      stroke-width="1.2"
                    />
                    <line
                      y1="-0.6"
                      x2="15.5563"
                      y2="-0.6"
                      transform="matrix(-0.707107 0.707107 0.707107 0.707107 12 1)"
                      stroke="#2D2D2D"
                      stroke-width="1.2"
                    />
                  </svg>

                  <h2 className="heading__name">Name of the product</h2>

                  <div className="mug__color__box">
                    <h3 className="mug__heading">Mug Colour</h3>
                    <div className="border__bottom" />
                    <div className="mug__colors">
                      <div className="first mug__box" />
                      <div className="second mug__box" />
                      <div className="third mug__box" />
                      <div className="forth mug__box" />
                      <div className="five mug__box" />
                      <div className="six mug__box" />
                      <div className="seven mug__box" />
                      <div className="eight mug__box" />
                      <div className="nine mug__box" />
                      <div className="ten mug__box" />
                    </div>
                  </div>

                  <div className="handle__color__box">
                    <h3 className="handle__heading">Handle Colour</h3>
                    <div className="border__bottom" />
                    <div className="handle__colors">
                      <div className="first handle__box" />
                      <div className="second handle__box" />
                      <div className="third handle__box" />
                      <div className="forth handle__box" />
                      <div className="five handle__box" />
                      <div className="six handle__box" />
                      <div className="seven handle__box" />
                      <div className="eight handle__box" />
                    </div>
                  </div>

                  <div className="handle__color__box">
                    <h3 className="handle__heading">Text</h3>
                    <div className="border__bottom" />
                    <h4 className="text__printed">Enter Text to be Printed</h4>
                    <input
                      placeholder="Your Text"
                      className="input__txt__field"
                    />
                  </div>
                </div>

                <div className="first__popup__right__box">
                  <div className="top__right__box">
                    <div className="price__heading__box">
                      <h2 className="price__heading">$24</h2>
                    </div>
                    <div className="top__right__img__box">
                      <img
                        src="/assets/Image/theme-selector/1.png"
                        className="right__box__img"
                        alt="Image"
                      />
                      <img
                        src="/assets/Image/theme-selector/1.svg"
                        className="right__box__img"
                        alt="Image"
                      />
                    </div>
                  </div>
                  <div className="border__bottom" />

                  <div className="slider__main__box">
                    <Slider {...settings}>
                      <div>
                        <img
                          src="/assets/Image/theme-selector/mug.png"
                          className="slider__right__box__img"
                          alt="Mug Image"
                        />
                      </div>
                      <div>
                        <img
                          src="/assets/Image/theme-selector/mug.png"
                          className="slider__right__box__img"
                          alt="Mug Image"
                        />
                      </div>
                    </Slider>
                  </div>
                  <div className="cart__btn__box">
                    <button className="cart__btn">Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="horizontal-line"></div>

        <div className="theme__selector__box">
          <div className="content__box">
            <p className="text-wrapper-themebuilder">Complexion</p>
            <p className="para__txt__cont">
              This theme is great for products with few questions. The user can
              easily customize the product by scrolling through the choices
            </p>

            <div className="theme__btn__box">
              <div className="preview">
                <a className="previewAnch" onClick={secondPopup}>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.4965 18.8469C12.32 18.8469 12.143 18.8422 11.9653 18.8328C8.18519 18.6313 4.74183 16.2711 3.1934 12.8195C3.01683 12.4258 3.19261 11.9637 3.58636 11.7867C3.9805 11.6106 4.44222 11.7859 4.61918 12.1801C5.9305 15.1027 8.84652 17.102 12.0485 17.2723C15.5821 17.4617 18.9301 15.4137 20.3813 12.1801C20.5578 11.7859 21.0203 11.6106 21.4141 11.7867C21.8078 11.9633 21.9836 12.4258 21.8071 12.8195C20.1661 16.4762 16.4707 18.8469 12.4965 18.8469Z"
                      fill="#2D2D2D"
                    />
                    <path
                      d="M3.90589 13.2816C3.79886 13.2816 3.69027 13.2594 3.58636 13.2129C3.19261 13.0363 3.01683 12.5738 3.1934 12.1801C4.90707 8.36133 8.86332 5.94649 13.0348 6.1668C16.8149 6.36836 20.2582 8.72852 21.8067 12.1801C21.9832 12.5738 21.8075 13.0359 21.4137 13.2129C21.0203 13.3895 20.5578 13.2137 20.3809 12.8195C19.0696 9.89688 16.1536 7.89766 12.9516 7.72735C9.41957 7.53867 6.06996 9.58594 4.61879 12.8195C4.4891 13.1098 4.20433 13.2816 3.90589 13.2816Z"
                      fill="#2D2D2D"
                    />
                    <path
                      d="M12.5001 15.7195C10.7247 15.7195 9.28015 14.2754 9.28015 12.5C9.28015 10.7246 10.7247 9.28046 12.5001 9.28046C14.2755 9.28046 15.72 10.7246 15.72 12.5C15.72 14.2754 14.2755 15.7195 12.5001 15.7195ZM12.5001 10.843C11.6016 10.843 10.8427 11.6016 10.8427 12.5C10.8427 13.3984 11.6016 14.157 12.5001 14.157C13.3985 14.157 14.1575 13.3984 14.1575 12.5C14.1575 11.6016 13.3985 10.843 12.5001 10.843Z"
                      fill="#2D2D2D"
                    />
                  </svg>{" "}
                  Preview
                </a>
              </div>
              <div className="select">
                <a
                  onClick={() => handleThemeSelect("Complexion")}
                  className="selectAnch"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5061 21.6575C8.64364 21.6579 5.08192 19.4446 3.37606 15.961C1.64989 12.4349 2.17255 8.03722 4.67723 5.01808C7.17919 2.00206 11.2468 0.686047 15.039 1.66534C15.4565 1.77316 15.7077 2.19933 15.6003 2.6173C15.4925 3.03527 15.0659 3.28605 14.6483 3.17862C11.4405 2.35011 7.99755 3.46339 5.87997 6.01613C3.76122 8.57042 3.31903 12.2911 4.77958 15.2747C6.23466 18.2466 9.44442 20.1825 12.739 20.0927C16.0331 20.0028 19.0225 17.9993 20.355 14.9888C21.1374 13.2208 21.303 11.2189 20.8206 9.35128C20.7128 8.9337 20.964 8.50753 21.3819 8.39933C21.7987 8.29113 22.2257 8.54269 22.3339 8.96066C22.9034 11.1673 22.7085 13.5329 21.7843 15.6212C20.2093 19.1798 16.6753 21.5482 12.7819 21.6544C12.6897 21.6564 12.5975 21.6575 12.5061 21.6575Z"
                      fill="white"
                    />
                    <path
                      d="M12.4999 13.9374C12.2999 13.9374 12.0999 13.8612 11.9476 13.7085C11.6425 13.4034 11.6425 12.9089 11.9476 12.6038L21.3226 3.22881C21.6272 2.92373 22.1226 2.92373 22.4272 3.22881C22.7323 3.53389 22.7323 4.02842 22.4272 4.3335L13.0522 13.7085C12.8999 13.8608 12.6999 13.9374 12.4999 13.9374Z"
                      fill="white"
                    />
                    <path
                      d="M12.4999 13.9374C12.2999 13.9374 12.0999 13.8612 11.9476 13.7085L8.63311 10.394C8.32803 10.089 8.32803 9.59443 8.63311 9.28936C8.93779 8.98428 9.43311 8.98428 9.73779 9.28936L13.0522 12.6038C13.3573 12.9089 13.3573 13.4034 13.0522 13.7085C12.8999 13.8608 12.6999 13.9374 12.4999 13.9374Z"
                      fill="white"
                    />
                  </svg>{" "}
                  Select
                </a>
              </div>
            </div>
          </div>
          <div className="first__img__box">
            <h2>Customer Preview Img Desktop version</h2>
          </div>
          <div className="second__img__box">
            <h2>Customer Preview Img Mobile version</h2>
          </div>

          {isOpenSecond && (
            <div className="second__popup">
              <div className="second__popup__sub__box">
                <div className="first__popup__right__box second__popup__right__border">
                  <svg
                    onClick={secondPopup}
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="close__img__popup"
                  >
                    <line
                      x1="1.42426"
                      y1="0.575736"
                      x2="12.4243"
                      y2="11.5757"
                      stroke="#2D2D2D"
                      stroke-width="1.2"
                    />
                    <line
                      y1="-0.6"
                      x2="15.5563"
                      y2="-0.6"
                      transform="matrix(-0.707107 0.707107 0.707107 0.707107 12 1)"
                      stroke="#2D2D2D"
                      stroke-width="1.2"
                    />
                  </svg>
                  <div className="top__right__box">
                    <div className="top__right__img__box">
                      <img
                        src="/assets/Image/theme-selector/1.png"
                        className="right__box__img"
                        alt="Image"
                      />
                      <img
                        src="/assets/Image/theme-selector/1.svg"
                        className="right__box__img"
                        alt="Image"
                      />
                    </div>
                    <div className="price__heading__box">
                      <h2 className="price__heading">$96</h2>
                    </div>
                  </div>
                  <div className="border__bottom" />

                  <div className="slider__main__box">
                    <Slider {...settings}>
                      <div>
                        <img
                          src="/assets/Image/theme-selector/mug.png"
                          className="slider__right__box__img"
                          alt="Mug Image"
                        />
                      </div>
                      <div>
                        <img
                          src="/assets/Image/theme-selector/mug.png"
                          className="slider__right__box__img"
                          alt="Mug Image"
                        />
                      </div>
                    </Slider>
                  </div>
                  <div className="cart__btn__box">
                    <button className="cart__btn">Add to cart</button>
                  </div>
                </div>

                <div className="second__popup__left__box">
                  <div className="second__heading__height">
                    <h2 className="second__heading">Name of the product</h2>
                  </div>
                  <div className="border__bottom" />

                  <div className="all__content__col">
                    <div className="all__cont__sub__box">
                      <h2>Mug Color</h2>
                      <div className="border__bottom__cont" />
                    </div>

                    <div className="all__cont__sub__box">
                      <h2>Handle Color</h2>
                      <div className="border__bottom__cont" />
                    </div>

                    <div className="all__cont__sub__box">
                      <h2>Enter Text</h2>
                      <div className="border__bottom__cont" />
                    </div>

                    <div className="all__cont__sub__box">
                      <h2>Text Colour Options</h2>
                      <div className="border__bottom__cont" />
                    </div>

                    <div className="all__cont__sub__box">
                      <h2>Font</h2>
                      <div className="border__bottom__cont" />
                    </div>

                    <div className="all__cont__sub__box">
                      <h2>Font Specifications</h2>
                      <div className="border__bottom__cont" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ThemeSelector;
