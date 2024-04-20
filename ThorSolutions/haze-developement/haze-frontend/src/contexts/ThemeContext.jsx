import React, { useEffect, createContext, useState } from "react";
import Utils from "../Utils";
const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const [fontList, setFontList] = useState([]);
  const [showPicker, setShowPicker] = useState(false);
  const [showElement, setShowElement] = useState("");
  const [customizerData, setCustomizerData] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem("customizerData"));
    return storedData || Utils.initialCustomizerData;
  });
  const updateCustomizerData = (newValue) => {
    setCustomizerData(newValue);
  };
  const handleColorChange = (newColor, elementId) => {
    setShowPicker(!showPicker);
    if (newColor && newColor.hex && elementId) {
      if (
        elementId === "CustomizerTitleBackgroundColor" ||
        elementId === "CustomizerTitleFontColor" ||
        elementId === "CustomizerTitleFontColorMobile" ||
        elementId === "CustomizerTitleDividerColor"
      ) {
        setCustomizerData((prevData) => ({
          ...prevData,
          CustomizerTitle: {
            ...prevData.CustomizerTitle,
            [elementId === "CustomizerTitleBackgroundColor"
              ? "CustomizerTitleBackgroundColor"
              : elementId === "CustomizerTitleFontColor"
              ? "CustomizerTitleFontColor"
              : elementId === "CustomizerTitleFontColorMobile"
              ? "CustomizerTitleFontColorMobile"
              : elementId === "CustomizerTitleDividerColor"
              ? "CustomizerTitleDividerColor"
              : ""]: newColor.hex,
          },
        }));
      }
      if (
        elementId === "LayersPanelBackgroundColor" ||
        elementId === "LayersPanelBorderColor" ||
        elementId === "LayersPanelErrorColor"
      ) {
        setCustomizerData((prevData) => ({
          ...prevData,
          LayersPanel: {
            ...prevData.LayersPanel,
            [elementId === "LayersPanelBackgroundColor"
              ? "LayersPanelBackgroundColor"
              : elementId === "LayersPanelBorderColor"
              ? "LayersPanelBorderColor"
              : elementId === "LayersPanelErrorColor"
              ? "LayersPanelErrorColor"
              : ""]: newColor.hex,
          },
        }));
      }
      if (
        elementId === "LayersListFontColor" ||
        elementId === "LayersListDiscriptionFontColor" ||
        elementId === "LayersListDividerColor"
      ) {
        setCustomizerData((prevData) => ({
          ...prevData,
          LayersList: {
            ...prevData.LayersList,
            [elementId === "LayersListFontColor"
              ? "LayersListFontColor"
              : elementId === "LayersListDiscriptionFontColor"
              ? "LayersListDiscriptionFontColor"
              : elementId === "LayersListDividerColor"
              ? "LayersListDividerColor"
              : ""]: newColor.hex,
          },
        }));
      }  
      if(elementId === "CustomizerLoadingIconColor" ||
      elementId === "CustomizerBackgroundColor" ){
        setCustomizerData((prevData) => ({
          ...prevData,
          Customizer: {
            ...prevData.Customizer,
            [elementId === "CustomizerLoadingIconColor"
              ? "CustomizerLoadingIconColor"
              : elementId === "CustomizerBackgroundColor"
              ? "CustomizerBackgroundColor"
              : ""]: newColor.hex,
          },
        }));
      } 
      if(elementId === "StepTitleBackgroundColor" ||
      elementId === "StepTitleSwitchStepsArrows" ){
        setCustomizerData((prevData) => ({
          ...prevData,
          StepTitle: {
            ...prevData.StepTitle,
            [elementId === "StepTitleBackgroundColor"
              ? "StepTitleBackgroundColor"
              : elementId === "StepTitleSwitchStepsArrows"
              ? "StepTitleSwitchStepsArrows"
              : ""]: newColor.hex,
          },
        }));
      }    
      if(elementId === "SummaryTitleFontColor" ){
        setCustomizerData((prevData) => ({
          ...prevData,
          SummaryTitle: {
            ...prevData.SummaryTitle,
            [elementId === "SummaryTitleFontColor"
              ? "SummaryTitleFontColor"
              : ""]: newColor.hex,
          },
        }));
      }
      if(
        elementId === "AddToCartBorderColor" ||
        elementId === "AddToCartFontColor" ||
        elementId === "AddToCartBackgroundColor" ||
        elementId === "AddToCartHoverBackgroundColor"
      ){
        setCustomizerData((prevData) => ({
          ...prevData,
          AddToCart: {
            ...prevData.AddToCart,
            [elementId === "AddToCartBorderColor"
              ? "AddToCartBorderColor"
              : elementId === "AddToCartFontColor"
              ? "AddToCartFontColor"
              : elementId === "AddToCartBackgroundColor"
              ? "AddToCartBackgroundColor"
              : elementId === "AddToCartHoverBackgroundColor"
              ? "AddToCartHoverBackgroundColor"
              : ""]: newColor.hex,
          },
        }));
      }      
      if(elementId === "ConfirmButtonMobileFontColor" ||
      elementId === "ConfirmButtonMobileBackgroundColor" ){
        setCustomizerData((prevData) => ({
          ...prevData,
          ConfirmButtonMobile: {
            ...prevData.ConfirmButtonMobile,
            [elementId === "ConfirmButtonMobileFontColor"
              ? "ConfirmButtonMobileFontColor"
              : elementId === "ConfirmButtonMobileBackgroundColor"
              ? "ConfirmButtonMobileBackgroundColor"
              : ""]: newColor.hex,
          },
        }));
      }
      if(elementId === "PriceFontColour" ||
      elementId === "PriceExtraPriceFontColor" ||
      elementId === "PriceExtraPriceBorderColor" ||
      elementId === "PriceExtraPriceBackgroundColor"){
        setCustomizerData((prevData) => ({
          ...prevData,
          Price: {
            ...prevData.Price,
            [elementId === "PriceFontColour"
              ? "PriceFontColour"
              : elementId === "PriceExtraPriceFontColor"
              ? "PriceExtraPriceFontColor"
              : elementId === "PriceExtraPriceBorderColor"
              ? "PriceExtraPriceBorderColor"
              : elementId === "PriceExtraPriceBackgroundColor"
              ? "PriceExtraPriceBackgroundColor"
              : ""]: newColor.hex,
          },
        }));
      }
      if(elementId === "SwitchViewArrowsColor"){
        setCustomizerData((prevData) => ({
          ...prevData,
          SwitchViewArrows: {
            ...prevData.SwitchViewArrows,
            [elementId === "SwitchViewArrowsColor"
              ? "SwitchViewArrowsColor"
              : ""]: newColor.hex,
          },
        }));
      }
      if(elementId === "SwitchViewDotsColour" ||
      elementId === "SwitchViewDotsSelectColour"){
        setCustomizerData((prevData) => ({
          ...prevData,
          SwitchViewDots: {
            ...prevData.SwitchViewDots,
            [elementId === "SwitchViewDotsColour"
              ? "SwitchViewDotsColour"
              : elementId === "SwitchViewDotsSelectColour"
              ? "SwitchViewDotsSelectColour"
              : ""]: newColor.hex,
          },
        }));
      }
      if(elementId === "ZoomColor"){
        setCustomizerData((prevData) => ({
          ...prevData,
          Zoom: {
            ...prevData.Zoom,
            [elementId === "ZoomColor"
              ? "ZoomColor"
              : ""]: newColor.hex,
          },
        }));
      }
      if(elementId === "ShareButtonColor"){
        setCustomizerData((prevData) => ({
          ...prevData,
          ShareButton: {
            ...prevData.ShareButton,
            [elementId === "ShareButtonColor"
              ? "ShareButtonColor"
              : ""]: newColor.hex,
          },
        }));
      }
      if(elementId === "DescriptionMobileColor" ||
      elementId === "DescriptionMobileBackgroundColor"){
        setCustomizerData((prevData) => ({
          ...prevData,
          DescriptionMobile: {
            ...prevData.DescriptionMobile,
            [elementId === "DescriptionMobileColor"
              ? "DescriptionMobileColor"
              : elementId === "DescriptionMobileBackgroundColor"
              ? "DescriptionMobileBackgroundColor"
              : ""]: newColor.hex,
          },
        }));
      }
      if(elementId === "OutOfStockBadgeIconColor" ||
      elementId === "OutOfStockBadgeBackgroundColor" ||
      elementId === "OutOfStockBadgeBorderColor" ||
      elementId === "OutOfStockBannerTextColor" ||
      elementId === "OutOfStockBannerBackgroundColor"){
        setCustomizerData((prevData) => ({
          ...prevData,
          OutOfStock: {
            ...prevData.OutOfStock,
            [elementId === "OutOfStockBadgeIconColor"
              ? "OutOfStockBadgeIconColor"
              : elementId === "OutOfStockBadgeBackgroundColor"
              ? "OutOfStockBadgeBackgroundColor"
              : elementId === "OutOfStockBadgeBorderColor"
              ? "OutOfStockBadgeBorderColor"
              : elementId === "OutOfStockBannerTextColor"
              ? "OutOfStockBannerTextColor"
              : elementId === "OutOfStockBannerBackgroundColor"
              ? "OutOfStockBannerBackgroundColor"
              : ""]: newColor.hex,
          },
        }));
      }
    }
  };
  const handleInputChange = ({ name, value }) => {
    if (
      name === "CustomizerTitleFontFamily" ||
      name === "CustomizerTitleFontSize" ||
      name === "CustomizerTitleFontSizeMobile" ||
      name === "CustomizerTitleDividerThickness"
    ) {
      setCustomizerData((prevData) => ({
        ...prevData,
        CustomizerTitle: {
          ...prevData.CustomizerTitle,
          [name]: value,
        },
      }));
    }
    if (
      name === "LayersPanelPosition" ||
      name === "LayersPanelBorderThickness"
    ) {
      setCustomizerData((prevData) => ({
        ...prevData,
        LayersPanel: {
          ...prevData.LayersPanel,
          [name]: value,
        },
      }));
    }
    if (
      name === "LayersListFontSize" ||
      name === "LayersListFontFamily" ||
      name === "LayersListDiscriptionFontSize" ||
      name === "LayersListDiscriptionFontFamily" ||
      name === "LayersListDividerThickness"
    ) {
      setCustomizerData((prevData) => ({
        ...prevData,
        LayersList: {
          ...prevData.LayersList,
          [name]: value,
        },
      }));
    }
    if(name === "SummaryTitleFontFamily" ||
    name === "SummaryTitleFontSize"){
      setCustomizerData((prevData) => ({
        ...prevData,
        SummaryTitle: {
          ...prevData.SummaryTitle,
          [name]: value,
        },
      }));
    }
    if(name === "AddToCartBorderThickness" ||
    name === "AddToCartBorderRounding" ||
    name === "AddToCartFontFamily" ||
    name === "AddToCartFontSize"){
      setCustomizerData((prevData) => ({
        ...prevData,
        AddToCart: {
          ...prevData.AddToCart,
          [name]: value,
        },
      }));
    }
    if(name === "PricePosition" ||
    name === "PriceFontFamily" ||
    name === "PriceFontSize" ||
    name === "PriceFontSizeMobile" ||
    name === "PriceShowExtraPrice"){
      setCustomizerData((prevData) => ({
        ...prevData,
        Price: {
          ...prevData.Price,
          [name]: value,
        },
      }));
    }
    if (
      name === "ShareButtonDisplayButtonYesNo" ||
      name === "ShareButtonIconButtonOrTextButton" ||
      name === "ShareButtonTextButtonRounding" ||
      name === "ShareButtonTextButtonLength"
    ) {
      setCustomizerData((prevData) => ({
        ...prevData,
        ShareButton: {
          ...prevData.ShareButton,
          [name]: value,
        },
      }));
    }
    if(name === "DescriptionMobileFontFamily" ||
    name === "DescriptionMobileFontSize"){
      setCustomizerData((prevData) => ({
        ...prevData,
        DescriptionMobile: {
          ...prevData.DescriptionMobile,
          [name]: value,
        },
      }));
    }
    if(name === "OutOfStockBadgeBorderWidth"){
      setCustomizerData((prevData) => ({
        ...prevData,
        OutOfStock: {
          ...prevData.OutOfStock,
          [name]: value,
        },
      }));
    }
  };
  const handleColorPickerClick = (e, elementId) => {
    e.stopPropagation();
    setShowPicker(true);
    setShowElement(elementId);
  };
  const handlePickerClose = () => {
    setShowPicker(false);
    setShowElement("");
  };
  useEffect(() => {
    const fetchFonts = async () => {
      try {
        const apiKey = "AIzaSyDPyvFifV-x5WCx4vma2j-s49nqgrD2smo";
        const apiUrl = `https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setFontList(data.items.map((font) => font.family));
      } catch (error) {
        console.error("Error fetching fonts:", error);
      }
    };
    fetchFonts();

    localStorage.setItem("customizerData", JSON.stringify(customizerData));
  }, []);

  useEffect(() => {
    const newData = customizerData
      ? {
          ...customizerData,
          CustomizerTitle: {
            ...customizerData.CustomizerTitle,
            ...customizerData.CustomizerTitle,
          },
        }
      : customizerData;
    localStorage.setItem("customizerData", JSON.stringify(newData));
  }, [customizerData.CustomizerTitle]);

  useEffect(() => {
    const newData = customizerData
      ? {
          ...customizerData,
          LayersPanel: {
            ...customizerData.LayersPanel,
            ...customizerData.LayersPanel,
          },
        }
      : customizerData;
    localStorage.setItem("customizerData", JSON.stringify(newData));
  }, [customizerData.LayersPanel]);

  useEffect(() => {
    const newData = customizerData
      ? {
          ...customizerData,
          LayersList: {
            ...customizerData.LayersList,
            ...customizerData.LayersList,
          },
        }
      : customizerData;
    localStorage.setItem("customizerData", JSON.stringify(newData));
  }, [customizerData.LayersList]);
  useEffect(() => {
    const newData = customizerData
      ? {
          ...customizerData,
          LayersSettings: {
            ...customizerData.LayersSettings,
            ...customizerData.LayersSettings,
          },
        }
      : customizerData;
    localStorage.setItem("customizerData", JSON.stringify(newData));
  }, [customizerData.LayersSettings]);
  useEffect(() => {
    const newData = customizerData
      ? {
          ...customizerData,
          Customizer: {
            ...customizerData.Customizer,
            ...customizerData.Customizer, // Added optional chaining here
          },
        }
      : customizerData;
    localStorage.setItem("customizerData", JSON.stringify(newData));
  }, [customizerData.Customizer]);
  useEffect(() => {
    const newData = customizerData
      ? {
          ...customizerData,
          StepTitle: {
            ...customizerData.StepTitle,
            ...customizerData.StepTitle, // Added optional chaining here
          },
        }
      : customizerData;
    localStorage.setItem("customizerData", JSON.stringify(newData));
  }, [customizerData.StepTitle]);
  useEffect(() => {
    const newData = customizerData
      ? {
          ...customizerData,
          SummaryTitle: {
            ...customizerData.SummaryTitle,
            ...customizerData.SummaryTitle, // Added optional chaining here
          },
        }
      : customizerData;
    localStorage.setItem("customizerData", JSON.stringify(newData));
  }, [customizerData.SummaryTitle]);
  useEffect(() => {
    const newData = customizerData
      ? {
          ...customizerData,
          AddToCart: {
            ...customizerData.AddToCart,
            ...customizerData.AddToCart, // Added optional chaining here
          },
        }
      : customizerData;
    localStorage.setItem("customizerData", JSON.stringify(newData));
  }, [customizerData.AddToCart]);
  useEffect(() => {
    const newData = customizerData
      ? {
          ...customizerData,
          ConfirmButtonMobile: {
            ...customizerData.ConfirmButtonMobile,
            ...customizerData.ConfirmButtonMobile,
          },
        }
      : customizerData;
    localStorage.setItem("customizerData", JSON.stringify(newData));
  }, [customizerData.ConfirmButtonMobile]);
  useEffect(() => {
    const newData = customizerData
      ? {
          ...customizerData,
          Price: {
            ...customizerData.Price,
            ...customizerData.Price,
          },
        }
      : customizerData;
    localStorage.setItem("customizerData", JSON.stringify(newData));
  }, [customizerData.Price]);
  useEffect(() => {
    const newData = customizerData
      ? {
          ...customizerData,
          SwitchViewArrows: {
            ...customizerData.SwitchViewArrows,
            ...customizerData.SwitchViewArrows,
          },
        }
      : customizerData;
    localStorage.setItem("customizerData", JSON.stringify(newData));
  }, [customizerData.SwitchViewArrows]);
  useEffect(() => {
    const newData = customizerData
      ? {
          ...customizerData,
          SwitchViewDots: {
            ...customizerData.SwitchViewDots,
            ...customizerData.SwitchViewDots,
          },
        }
      : customizerData;
    localStorage.setItem("customizerData", JSON.stringify(newData));
  }, [customizerData.SwitchViewDots]);
  useEffect(() => {
    const newData = customizerData
      ? {
          ...customizerData,
          Zoom: {
            ...customizerData.Zoom,
            ...customizerData.Zoom,
          },
        }
      : customizerData;
    localStorage.setItem("customizerData", JSON.stringify(newData));
  }, [customizerData.Zoom]);
  useEffect(() => {
    const newData = customizerData
      ? {
          ...customizerData,
          ShareButton: {
            ...customizerData.ShareButton,
            ...customizerData.ShareButton, // Added optional chaining here
          },
        }
      : customizerData;
    localStorage.setItem("customizerData", JSON.stringify(newData));
  }, [customizerData.ShareButton]);
  useEffect(() => {
    const newData = customizerData
      ? {
          ...customizerData,
          DescriptionMobile: {
            ...customizerData.DescriptionMobile,
            ...customizerData.DescriptionMobile, // Added optional chaining here
          },
        }
      : customizerData;
    localStorage.setItem("customizerData", JSON.stringify(newData));
  }, [customizerData.DescriptionMobile]);
  useEffect(() => {
    const newData = customizerData
      ? {
          ...customizerData,
          OutOfStock: {
            ...customizerData.OutOfStock,
            ...customizerData.OutOfStock, // Added optional chaining here
          },
        }
      : customizerData;
    localStorage.setItem("customizerData", JSON.stringify(newData));
  }, [customizerData.OutOfStock]);

  useEffect(() => {
    const linkElement = document.createElement("link");
    linkElement.href = `https://fonts.googleapis.com/css2?family=${customizerData.CustomizerTitle.CustomizerTitleFontFamily?.replace(
      /\s/g,
      "+"
    )}:wght@400;700&display=swap`;
    linkElement.rel = "stylesheet";
    const head = document.head || document.getElementsByTagName("head")[0];
    const existingLink = document.getElementById("font-link");
    if (existingLink) {
      head.removeChild(existingLink);
    }
    linkElement.id = "font-link";
    head.appendChild(linkElement);
  }, [customizerData?.CustomizerTitle?.CustomizerTitleFontFamily]);

  return (
    <ThemeContext.Provider
      value={{
        customizerData,
        updateCustomizerData,
        fontList,
        showPicker,
        showElement,
        handleColorChange,
        handleInputChange,
        handleColorPickerClick,
        handlePickerClose,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;
export { ThemeProvider };