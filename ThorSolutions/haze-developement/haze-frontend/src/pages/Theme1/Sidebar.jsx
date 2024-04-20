import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductDataInput } from "../../features/addImageSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state?.title);
  const selectedData = JSON.parse(localStorage.getItem("selectedData")) || {};
  const [openModal, setOpenModal] = useState(false);
  const [InputType, setInputType] = useState("");
  const [displayType, setDisplayType] = useState("");
  const handleModal = (e, type) => {
    setOpenModal(type);
  };
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("selectedData")) || {};
    dispatch(
      setProductDataInput({
        InputType: data?.productDataInput?.InputType,
        displayType: data?.productDataInput?.displayType,
      })
    );
  }, []);

  const handleSubmitData = (e) => {
    e.preventDefault();
    const formData = {
      InputType,
      displayType,
    };

    localStorage.setItem(
      "selectedData",
      JSON.stringify({ ...selectedData, productDataInput: formData })
    );
    dispatch(setProductDataInput(formData));
    setOpenModal(false);
  };

  const dispalyType = {
    color: !InputType && "gray",
    pointerEvents: !InputType && "none",
  };

  const dispalyTypeHead = {
    color: !InputType && "gray",
  };

  return (
    <div class="sider_baar m-0 p-0">
      <div class="add_theme_row">
        <a href="#" class="add_theme_back_btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
          >
            <path d="M7 13L1 7L7 1" stroke="#2D2D2D"></path>
          </svg>
        </a>
        <button class="add_theme_button">Product Name</button>
      </div>

      <div class="add_theme_row">
        <div class="button_list">
          <div className=" w-100 d-flex justify-content-between">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M28 13.9992C28 13.3336 27.647 12.727 27.0542 12.3753L25.495 11.458C26.0957 11.1014 26.6309 10.7833 27.0554 10.5307C27.6471 10.1777 28 9.57113 28 8.90802C28 8.24491 27.647 7.63836 27.0554 7.2847C25.1065 6.12564 18.498 2.19846 15.2404 0.330949C14.486 -0.102236 13.5687 -0.119597 12.7533 0.334707C12.7533 0.334707 3.89395 5.53842 0.945776 7.28416C0.353003 7.63585 0 8.24241 0 8.90802C0 9.57113 0.353003 10.1777 0.944583 10.5313C1.36906 10.7838 1.9042 11.1018 2.50467 11.4583L0.945836 12.3753C0.353003 12.727 0 13.3336 0 13.9992C0 14.6623 0.353003 15.2689 0.944583 15.6225C1.36906 15.875 1.9042 16.193 2.50467 16.5495L0.945836 17.4665C0.353003 17.8182 0 18.4248 0 19.0904C0 19.7535 0.353003 20.3601 0.944583 20.7137C3.46643 22.2133 9.66478 25.8932 12.7596 27.6675C13.1387 27.885 13.5688 28 14 28C14.4313 28 14.8614 27.885 15.2417 27.6668C18.3353 25.8931 24.5336 22.2133 27.0555 20.7131C27.6471 20.3601 28.0001 19.7535 28.0001 19.0904C28.0001 18.4248 27.6471 17.8182 27.0542 17.4665L25.4951 16.5492C26.0957 16.1926 26.6309 15.8745 27.0555 15.6219C27.6471 15.2689 28 14.6623 28 13.9992ZM1.59588 9.43917C1.49894 9.38076 1.27271 9.21294 1.27271 8.9091C1.27271 8.60394 1.49768 8.43743 1.59463 8.38022C4.53905 6.63644 13.386 1.44049 13.3848 1.44109C13.79 1.21301 14.2324 1.22172 14.6078 1.43673C17.8567 3.29923 24.459 7.22182 26.4041 8.37897C26.5011 8.43737 26.7273 8.60519 26.7273 8.90904C26.7273 9.21288 26.5011 9.3807 26.4041 9.43851C23.886 10.9362 17.6951 14.6121 14.609 16.3807C14.2262 16.5995 13.7725 16.5989 13.3922 16.3813C10.3049 14.6121 4.11397 10.9363 1.59588 9.43917ZM26.4054 18.562C26.5023 18.6192 26.7273 18.7857 26.7273 19.0909C26.7273 19.3948 26.5011 19.5625 26.4041 19.6204C23.886 21.118 17.6951 24.7939 14.609 26.5626C14.2262 26.7814 13.7725 26.7807 13.3922 26.5632C10.3049 24.7939 4.11397 21.118 1.59588 19.621C1.49894 19.5625 1.27271 19.3947 1.27271 19.0909C1.27271 18.7857 1.49768 18.6192 1.59463 18.562L3.75423 17.2912C6.67323 19.0214 10.5238 21.2948 12.7596 22.5765C13.1387 22.794 13.5688 22.909 14 22.909C14.4313 22.909 14.8614 22.794 15.2417 22.5759C17.4766 21.2946 21.3268 19.0216 24.2457 17.2911L26.4054 18.562ZM26.4041 14.5295C23.886 16.0271 17.6951 19.703 14.609 21.4717C14.2262 21.6905 13.7725 21.6898 13.3922 21.4723C10.3049 19.703 4.11397 16.0271 1.59588 14.5301C1.49894 14.4717 1.27271 14.3038 1.27271 14C1.27271 13.6948 1.49768 13.5283 1.59463 13.4711L3.75423 12.2003C6.67323 13.9305 10.5238 16.2039 12.7596 17.4856C13.1387 17.7031 13.5688 17.8181 14 17.8181C14.4313 17.8181 14.8614 17.7032 15.2417 17.485C17.4766 16.2037 21.3268 13.9307 24.2457 12.2003L26.4054 13.4711C26.5024 13.5283 26.7274 13.6948 26.7274 14C26.7273 14.3038 26.5011 14.4717 26.4041 14.5295Z"
                  fill="#2D2D2D"
                ></path>
              </svg>
            </span>

            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="26"
                viewBox="0 0 25 26"
                fill="none"
              >
                <path
                  d="M0.166942 16.9794L2.66874 21.2858C2.81605 21.535 3.04783 21.7231 3.32202 21.816C3.46679 21.8636 3.62001 21.8798 3.77152 21.8636C3.92304 21.8475 4.06939 21.7993 4.20087 21.7223L6.77004 20.5505C7.31241 20.9355 7.88902 21.2699 8.49259 21.5494L8.75332 24.4028C8.75224 24.4233 8.75224 24.4438 8.75332 24.4643C8.80234 24.7372 8.94386 24.985 9.15406 25.1658C9.36427 25.3467 9.63034 25.4496 9.90754 25.4574H14.9082C15.2029 25.4584 15.4872 25.3483 15.7044 25.149C15.9216 24.9498 16.0557 24.676 16.08 24.3823L16.3378 21.5494C16.9448 21.2795 17.523 20.9487 18.0633 20.5622L20.6442 21.7516H20.6705C20.9363 21.8647 21.234 21.8778 21.5087 21.7884C21.7834 21.699 22.0163 21.5132 22.1646 21.2653L24.6517 16.9853C24.8035 16.7285 24.8546 16.4246 24.795 16.1323C24.7355 15.84 24.5696 15.5803 24.3295 15.4033L22.1646 13.754C22.2631 13.0819 22.2631 12.399 22.1646 11.7268L24.5082 10.0658C24.7488 9.88927 24.9153 9.62971 24.9753 9.33742C25.0354 9.04513 24.9848 8.74095 24.8334 8.48385L22.2671 4.18334C22.1983 4.05174 22.1038 3.93532 21.9891 3.841C21.8745 3.74668 21.742 3.67638 21.5996 3.63429C21.4572 3.5922 21.3078 3.57918 21.1603 3.596C21.0127 3.61282 20.8701 3.65914 20.7408 3.73219L18.1717 4.904C17.6291 4.52008 17.0525 4.18668 16.4491 3.90796L16.1913 1.05463C16.1913 1.03412 16.1913 1.01361 16.1913 0.993108C16.1423 0.720171 16.0008 0.472441 15.7906 0.291578C15.5804 0.110716 15.3143 0.00775313 15.0371 6.02435e-06H10.0277C9.73245 -0.000940018 9.44777 0.109568 9.23052 0.309436C9.01327 0.509305 8.87946 0.783807 8.85585 1.07806L8.59805 3.90796C7.98771 4.17919 7.40662 4.51195 6.86379 4.90107L4.29461 3.72048H4.26825C4.00218 3.60971 3.70506 3.59882 3.43159 3.68979C3.15813 3.78077 2.92675 3.96749 2.78006 4.21556L0.287051 8.48385C0.134055 8.74358 0.0837851 9.05115 0.146131 9.34607C0.208476 9.64099 0.378924 9.90191 0.623945 10.0775L2.94997 11.7297C2.8532 12.3942 2.8532 13.0691 2.94997 13.7335L0.486258 15.4033C0.247603 15.5801 0.0828908 15.839 0.0239203 16.13C-0.0350502 16.4211 0.0159025 16.7237 0.166942 16.9794ZM1.17762 16.3554L3.91085 14.4923C4.00441 14.429 4.07769 14.34 4.12187 14.2361C4.16605 14.1321 4.17924 14.0176 4.15986 13.9064C4.09453 13.519 4.05733 13.1273 4.04853 12.7346C4.05628 12.334 4.09349 11.9345 4.15986 11.5393C4.1755 11.4325 4.16135 11.3235 4.11896 11.2243C4.07657 11.125 4.0076 11.0394 3.91964 10.9769L1.31824 9.12541C1.31066 9.11972 1.30475 9.11209 1.30115 9.10332C1.29754 9.09456 1.29636 9.08499 1.29773 9.07561L3.78781 4.79267C3.79938 4.79004 3.81139 4.79004 3.82296 4.79267L6.70559 6.11974C6.80527 6.16544 6.91576 6.18226 7.02452 6.16828C7.13327 6.15429 7.23592 6.11007 7.32079 6.04064C7.95112 5.54855 8.6473 5.14721 9.38902 4.84833C9.48601 4.80649 9.56989 4.73921 9.63177 4.6536C9.69365 4.568 9.73124 4.46726 9.74056 4.36204L10.0335 1.17767H15.0137C15.025 1.18903 15.033 1.20318 15.0371 1.21868L15.3301 4.37083C15.3394 4.47604 15.377 4.57679 15.4388 4.66239C15.5007 4.748 15.5846 4.81528 15.6816 4.85712C16.4237 5.17362 17.1242 5.57995 17.7674 6.06701C17.8507 6.12856 17.9487 6.16695 18.0517 6.17828C18.1546 6.1896 18.2587 6.17344 18.3533 6.13146L21.2594 4.7956L23.8168 9.09612C23.819 9.10773 23.819 9.11966 23.8168 9.13127L21.192 10.9769C21.1045 11.0392 21.0358 11.1243 20.9935 11.223C20.9511 11.3216 20.9367 11.4301 20.9518 11.5364C21.0173 11.9326 21.0535 12.333 21.0602 12.7346C21.0524 13.1352 21.0152 13.5347 20.9488 13.9298C20.9319 14.0355 20.9443 14.1438 20.9846 14.2429C21.0248 14.3421 21.0915 14.4283 21.1773 14.4923L23.6293 16.3408C23.6369 16.3465 23.6428 16.3541 23.6464 16.3629C23.65 16.3716 23.6512 16.3812 23.6498 16.3906L21.148 20.6735H21.1129L18.2303 19.3464C18.1306 19.3007 18.0201 19.2839 17.9113 19.2979C17.8026 19.3119 17.6999 19.3561 17.6151 19.4255C16.9846 19.9175 16.2885 20.3188 15.5468 20.6179C15.4498 20.6597 15.366 20.727 15.3041 20.8126C15.2422 20.8982 15.2046 20.9989 15.1953 21.1042L14.9023 24.2885H9.92219C9.91132 24.278 9.90327 24.2649 9.89875 24.2504L9.6058 21.0983C9.59691 20.9968 9.5617 20.8994 9.50365 20.8156C9.44559 20.7319 9.3667 20.6647 9.27477 20.6208C8.53286 20.3051 7.83238 19.8997 7.18896 19.4138C7.10571 19.3523 7.00763 19.3139 6.90471 19.3026C6.80179 19.2912 6.69771 19.3074 6.60306 19.3494L3.69699 20.6852L1.17762 16.3847C1.17762 16.3847 1.18934 16.3466 1.17762 16.3554Z"
                  fill="#2D2D2D"
                ></path>
                <path
                  d="M12.4976 17.1816C13.3771 17.1816 14.2369 16.9208 14.9682 16.4321C15.6995 15.9435 16.2695 15.249 16.6061 14.4364C16.9427 13.6238 17.0307 12.7297 16.8591 11.867C16.6876 11.0044 16.264 10.212 15.6421 9.59009C15.0202 8.96817 14.2278 8.54464 13.3652 8.37305C12.5025 8.20146 11.6084 8.28952 10.7958 8.62611C9.98323 8.96269 9.28871 9.53267 8.80007 10.264C8.31142 10.9953 8.05061 11.8551 8.05061 12.7346C8.04354 13.3205 8.15373 13.902 8.37471 14.4447C8.59569 14.9874 8.92298 15.4805 9.33734 15.8948C9.7517 16.3092 10.2447 16.6365 10.7875 16.8575C11.3302 17.0785 11.9117 17.1886 12.4976 17.1816ZM12.4976 9.4594C13.1454 9.4594 13.7786 9.65149 14.3172 10.0114C14.8558 10.3713 15.2756 10.8828 15.5235 11.4812C15.7714 12.0797 15.8362 12.7382 15.7099 13.3735C15.5835 14.0089 15.2715 14.5924 14.8135 15.0505C14.3555 15.5085 13.7719 15.8205 13.1366 15.9468C12.5012 16.0732 11.8427 16.0084 11.2442 15.7605C10.6458 15.5126 10.1343 15.0928 9.77438 14.5542C9.4145 14.0156 9.22241 13.3824 9.22241 12.7346C9.21771 12.3032 9.29921 11.8752 9.46214 11.4757C9.62506 11.0762 9.86613 10.7133 10.1712 10.4082C10.4763 10.1031 10.8392 9.86205 11.2387 9.69912C11.6382 9.5362 12.0662 9.45469 12.4976 9.4594Z"
                  fill="#2D2D2D"
                ></path>
              </svg>
            </span>

            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="21"
                viewBox="0 0 25 21"
                fill="none"
              >
                <path
                  d="M7.31527 0.00587712C7.19005 0.0239676 7.07445 0.0833299 6.98679 0.174557L0.168582 6.99277C0.115173 7.04561 0.0727731 7.10852 0.0438363 7.17785C0.0148995 7.24719 0 7.32158 0 7.39671C0 7.47184 0.0148995 7.54623 0.0438363 7.61556C0.0727731 7.6849 0.115173 7.74781 0.168582 7.80065L6.98679 14.6189C7.03946 14.673 7.10241 14.7162 7.17195 14.7457C7.24149 14.7753 7.31622 14.7906 7.39178 14.791C7.46734 14.7913 7.5422 14.7765 7.61199 14.7476C7.68177 14.7186 7.74509 14.676 7.79822 14.6223C7.85135 14.5686 7.89323 14.5048 7.92142 14.4347C7.94961 14.3646 7.96353 14.2896 7.96237 14.214C7.96121 14.1385 7.945 14.0639 7.91468 13.9947C7.88437 13.9255 7.84055 13.863 7.7858 13.811L1.93528 7.96933H18.1463C21.3261 7.96933 23.8636 10.4954 23.8636 13.6512C23.8636 16.8069 21.3261 19.333 18.1463 19.333H1.70445C1.62916 19.332 1.55441 19.3459 1.48455 19.3739C1.41468 19.402 1.35109 19.4437 1.29747 19.4966C1.24385 19.5494 1.20128 19.6124 1.17222 19.6819C1.14316 19.7514 1.12819 19.8259 1.12819 19.9012C1.12819 19.9765 1.14316 20.051 1.17222 20.1205C1.20128 20.19 1.24385 20.253 1.29747 20.3058C1.35109 20.3587 1.41468 20.4004 1.48455 20.4285C1.55441 20.4565 1.62916 20.4704 1.70445 20.4694H18.1463C21.9324 20.4694 25 17.4204 25 13.6512C25 9.8819 21.9324 6.83296 18.1463 6.83296H1.93528L7.7858 0.982444C7.87391 0.899686 7.93334 0.790985 7.95544 0.672138C7.97755 0.553291 7.96117 0.430493 7.9087 0.32159C7.85623 0.212687 7.77039 0.123355 7.66367 0.0665779C7.55695 0.00980071 7.43491 -0.011463 7.31527 0.00587712Z"
                  fill="#2D2D2D"
                ></path>
              </svg>
            </span>

            <span onClick={(e) => handleModal(e, true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="interactiveSVG"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="24"
                  height="24"
                  rx="4.5"
                  stroke="#2D2D2D"
                ></rect>
                <path
                  d="M12.5 7.5L12.5 17.5"
                  stroke="#2D2D2D"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M17.5 12.5H7.5"
                  stroke="#2D2D2D"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
      {openModal && (
        <div id="add_modal">
          <>
            <div id="add_overlay"></div>
            <form id="myForm">
              <div class="add_modal_header">
                <div class="add_modal_titel">1. Select an Input Type</div>
                <div id="add_closeBtn" onClick={(e) => handleModal(e, false)}>
                  X
                </div>
              </div>
              <ul id="menu1" class="add_modal_Select_menu ">
                <li
                  class="add_modal_Select_menu "
                  onClick={() => setInputType("Thumbnail")}
                >
                  <span class="add_modal_icon">
                    <img src="assets/Image/them/Thumbnails Button.svg" />
                  </span>
                  <span class="add_modal_name">Thumbnail</span>
                </li>
                <li
                  class="add_modal_Select_menu"
                  onClick={() => setInputType("Dropdown")}
                >
                  <span class="add_modal_icon">
                    <img src="assets/Image/drop.svg" />
                  </span>
                  <span class="add_modal_name">Dropdown</span>
                </li>
                <li
                  class="add_modal_Select_menu"
                  onClick={() => setInputType("Radio")}
                >
                  <span class="add_modal_icon">
                    <img src="assets/Image/them/Thumbnails Button.svg" />
                  </span>
                  <span class="add_modal_name">Radio Button</span>
                </li>
                <li
                  class="add_modal_Select_menu"
                  onClick={() => setInputType("Label")}
                >
                  <span class="add_modal_icon">
                    <img src="assets/Image/modal/lable.svg" />
                  </span>
                  <span class="add_modal_name">Label</span>
                </li>
                <li class="add_modal_Select_menu">
                  <span class="add_modal_icon">
                    <img src="assets/Image/modal/uplod.svg" />
                  </span>
                  <span class="add_modal_name">Upload File</span>
                </li>
                <li class="add_modal_Select_menu">
                  <span class="add_modal_icon">
                    <img src="assets/Image/modal/text_inpuut.svg" />
                  </span>
                  <span class="add_modal_name">Text Input</span>
                </li>
                <li class="add_modal_Select_menu">
                  <span class="add_modal_icon">
                    <img src="assets/Image/modal/check.svg" />
                  </span>
                  <span
                    class="add_modal_name"
                    onClick={() => setInputType("Checkbox")}
                  >
                    Checkbox
                  </span>
                </li>
                <li class="add_modal_Select_menu">
                  <span class="add_modal_icon">
                    <img src="assets/Image/modal/none.svg" />
                  </span>
                  <span class="add_modal_name">None</span>
                </li>
                <li class="add_modal_Select_menu"></li>
              </ul>

              <div className="select_display_type" style={dispalyType}>
                <div class="add_modal_header">
                  <div class="add_modal_titel" style={dispalyTypeHead}>
                    2. Select a Display Type
                  </div>
                </div>
                {/* {InputType  && */}
                <ul id={InputType && "menu2"} class="add_modal_Select_menu">
                  <li
                    className={
                      InputType
                        ? "enabled add_modal_Select_menu "
                        : "disabled add_modal_Select_menu"
                    }
                    onClick={() => {
                      InputType && setDisplayType("Image");
                    }}
                  >
                    <span class="add_modal_icon">
                      <img src="assets/Image/modal/img.svg" />
                    </span>
                    <span class="add_modal_name">Image</span>
                  </li>
                  <li class="add_modal_Select_menu">
                    <span class="add_modal_icon">
                      <img src="assets/Image/modal/colour.svg" />
                    </span>
                    <span class="add_modal_name">Colour</span>
                  </li>
                  <li class="add_modal_Select_menu">
                    <span class="add_modal_icon">
                      <img src="assets/Image/modal/text.svg" />
                    </span>
                    <span class="add_modal_name">Text</span>
                  </li>
                  <li class="add_modal_Select_menu">
                    <span class="add_modal_icon">
                      <img src="assets/Image/modal/font.svg" />
                    </span>
                    <span class="add_modal_name">Font</span>
                  </li>
                  <li class="add_modal_Select_menu">
                    <span class="add_modal_icon">
                      <img src="assets/Image/modal/font_cl.svg" />
                    </span>
                    <span class="add_modal_name">Font Colour</span>
                  </li>
                  <li class="add_modal_Select_menu">
                    <span class="add_modal_icon">
                      <img src="assets/Image/modal/logo_svg.svg" />
                    </span>
                    <span class="add_modal_name">Logo</span>
                  </li>
                </ul>
              </div>
              <div class="add_theme_modal_footer">
                <p>Please Select what you want to create</p>
                <button
                  type="submit"
                  id="submitButton"
                  disabled={InputType && displayType ? false : true}
                  onClick={handleSubmitData}
                >
                  create
                </button>
              </div>
            </form>
          </>
        </div>
      )}

      <div class="add_theme_row">
        {title?.productDataInput?.InputType &&
        title?.productDataInput?.displayType ? (
          <div className="d-flex flex-column">
            <div>
              <div
                style={{
                  width: "270px",
                  height: "50px",
                  marginLeft: "-26px",
                  background: "rgb(240,241,241)",
                }}
              >
                <div className="d-flex pt-2 px-3">
                  <span>
                    <img src="assets/Image/modal/img.svg" height="30px" />
                  </span>
                  <p className="px-2 d-flex pt-2">
                    {title?.title || "Untitled Image"}{" "}
                  </p>
                </div>
              </div>
            </div>
            {title?.colour.colour && (
              <div>
                <div
                  style={{
                    width: "270px",
                    height: "50px",
                    marginLeft: "-26px",
                    background: "rgb(240,241,241)",
                    marginTop: "10px",
                  }}
                >
                  <div className="d-flex pt-2 px-3">
                    <span>
                      <img src="assets/Image/modal/colour.svg" height="30px" />
                    </span>
                    <p className="px-2 d-flex pt-2">
                      {title?.colour.colour || "Untitled Image"}{" "}
                    </p>
                  </div>
                </div>
              </div>
            )}
            {title?.imageText?.textTitle && (
              <div>
                <div
                  style={{
                    width: "270px",
                    height: "50px",
                    marginLeft: "-26px",
                    background: "rgb(240,241,241)",
                    marginTop: "10px",
                  }}
                >
                  <div className="d-flex pt-2 px-3">
                    <span>
                      <img src="assets/Image/modal/text.svg" height="30px" />
                    </span>
                    <p className="px-2 d-flex pt-2">
                      {title?.imageText?.textTitle || "Untitled Image"}{" "}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div class="add_theme_Layers_section">
            <div class="add_theme_cont">
              <div class="add_theme_description">
                There are no layers yet Create your first layer to build the
                customizer
              </div>
              <button
                class="add_them_layers_button"
                onClick={(e) => handleModal(e, true)}
              >
                + Add Layer
              </button>
            </div>
          </div>
        )}
      </div>

      {title?.colour?.colourTitle && title?.colour?.colourTitle && (
        <div>
          <div
            style={{
              width: "270px",
              height: "50px",
              background: "rgb(240,241,241)",
            }}
          >
            <div className="d-flex pt-2 px-3">
              <span>
                <img src="assets/Image/modal/img.svg" height="30px" />
              </span>
              <p className="px-2 d-flex pt-2">
                {title?.colour?.colour || "Untitled Layer"}{" "}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
