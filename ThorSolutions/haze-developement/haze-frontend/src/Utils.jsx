import _ from "lodash";

const Utils = {
  siteCookieName: `${import.meta.env.VITE_REACT_APP_APPNAME}-userData`,
  apiUrl: (path) => {
    // console.log("REACT_APP_API_URL:", process.env.REACT_APP_API_URL);
    return import.meta.env.VITE_REACT_APP_API_URL + "/" + path;
  },
  getCookieOptions: () => {
    let co = { secure: false, path: "/" };
    if (process.env.REACT_APP_COOKIE_DOMAIN !== "localhost") {
      co["domain"] = process.env.REACT_APP_COOKIE_DOMAIN;
    }
    return co;
  },
  initialCustomizerData: {
    ProductDetails: {
      productId: "4",
      productName: "Dummy Product",
      productImg:
        "https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc",
    },
    ThemeType: {
      ThemeSelect: "Minimal",
    },
    CustomizerTitle: {
      CustomizerTitleBackgroundColor: "#ffff",
      CustomizerTitleFontFamily: "",
      CustomizerTitleFontSize: "32px",
      CustomizerTitleFontSizeMobile: "",
      CustomizerTitleFontColor: "#000000",       
      CustomizerTitleFontColorMobile: "#ffff",
      CustomizerTitleDividerColor: "#000000",
      CustomizerTitleDividerThickness: "0px",
    },
    LayersPanel: {
      LayersPanelPosition: "left",
      LayersPanelBackgroundColor: "#ffff",
      LayersPanelBorderColor: "#ffff",
      LayersPanelBorderThickness: "0px",
      LayersPanelErrorColor: "#ffff",
    },
    LayersList: {
      LayersListFontColor: "#000000",
      LayersListFontSize: "",
      LayersListFontFamily: "",
      LayersListDiscriptionFontColor: "#ffff",
      LayersListDiscriptionFontSize: "",
      LayersListDiscriptionFontFamily: "",
      LayersListDividerColor: "#ffff",
      LayersListDividerThickness: "",
    },
    LayersSettings: {
      LayersSettingsBorderColor: "#ffff",
      LayersSettingsSelectedBorderColor: "#ffff",
      LayersSettingsBorderThickness: "",
      LayersSettingsSelectedBorderThickness: "",
      LayersSettingsFontColor: "#ffff",
      LayersSettingsFontSize: "",
      LayersSettingsFontFamily: "",
      LayersSettingsPopUpBackgroundColor: "#ffff",
      LayersSettingsPopUpBackgroundRounding: "",
      LayersSettingsDescriptionFontColor: "#ffff",
      LayersSettingsDescriptionFontSize: "",
      LayersSettingsDescriptionFontFamily: "",
    },
    ThumbnailButton: {
      ThumbnailButtonRoundings: "",
      ThumbnailButtonColoumn: "#ffff",
      ThumbnailButtonWidth: "#ffff",
      ThumbnailButtonHeight: "",
      ThumbnailButtonVerticalMargin: "",
      ThumbnailButtonRoundingMobile: "",
      ThumbnailButtonWidthMobile: "",
      ThumbnailButtonHeightMobile:"",
      ThumbnailButtonMargintMobile:""
    },
    TextInputAndDropdown: {
      TextInputAndDropdownBackgroundColor: "",
      TextInputAndDropdownHeight: "",
      TextInputAndDropdownRounding: "",
      TextInputAndDropdownBorderColor: "",
      ThumbnailButtonVerticalMargin: "",
      ThumbnailButtonRoundingMobile: "",
      ThumbnailButtonWidthMobile: "",
      ThumbnailButtonHeightMobile:"",
      ThumbnailButtonMargintMobile:""
    },
    Customizer: {
      CustomizerLoadingIconColor: "#ffff",
      CustomizerBackgroundColor: "#ffff",
    },
    StepTitle: {
      StepTitleBackgroundColor: "#ffff",
      StepTitleSwitchStepsArrows: "#ffff",
    },
    SummaryTitle: {
      SummaryTitleFontFamily: "",
      SummaryTitleFontColor: "#ffff",
      SummaryTitleFontSize: "",
    },
    AddToCart: {
      AddToCartBorderColor: "#ffff",
      AddToCartBorderThickness: "0px",
      AddToCartBorderRounding: "5px",
      AddToCartFontFamily: "Arial",
      AddToCartFontColor: "#ffff",
      AddToCartBackgroundColor: "#000000",
      AddToCartHoverBackgroundColor: "#ffff",
      AddToCartFontSize: "16px",
    },
    ConfirmButtonMobile: {
      ConfirmButtonMobileFontColor: "#ffff",
      ConfirmButtonMobileBackgroundColor: "#ffff",
    },
    Price: {
      PricePosition: "",
      PriceFontFamily: "",
      PriceFontSize: "",
      PriceFontSizeMobile: "",
      PriceFontColour: "#ffff",
      PriceShowExtraPrice: "",
      PriceExtraPriceFontColor: "#ffff",
      PriceExtraPriceBorderColor: "#ffff",
      PriceExtraPriceBackgroundColor: "#ffff",
    },
    SwitchViewArrows: {
      SwitchViewArrowsColor: "#000000",
    },
    SwitchViewDots: {
      SwitchViewDotsColour: "#737373",
      SwitchViewDotsSelectColour: "grey",
    },
    Zoom: {
      ZoomColor: "#00000",
    },
    ShareButton: {
      ShareButtonDisplayButtonYesNo: "true",
      ShareButtonIconButtonOrTextButton: "false",
      ShareButtonColor: "#00000",
      ShareButtonTextButtonRounding: "",
      ShareButtonTextButtonLength: "small",
    },
    DescriptionMobile: {
      DescriptionMobileColor: "#ffff",
      DescriptionMobileBackgroundColor: "#ffff",
      DescriptionMobileFontFamily: "Arial",
      DescriptionMobileFontSize: "",
    },
    OutOfStock: {
      OutOfStockBadgeIconColor: "#000000",
      OutOfStockBadgeBackgroundColor: "",
      OutOfStockBadgeBorderWidth: "",
      OutOfStockBadgeBorderColor: "#ffff",
      OutOfStockBannerTextColor: "#ffff",
      OutOfStockBannerBackgroundColor: "#ffff",
    },
  },
};

export default Utils;
