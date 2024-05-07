const mongoose = require('mongoose');


const customizerSchema = new mongoose.Schema({
	
	pid: {
		type: String,
		default: ""
	},
	ProductDetails: {
		productId: {
			type: String,
			default: ""
		},
		productName: {
			type: String,
			default: ""
		}
	},
	ThemeType: {
		ThemeSelect: {
			type: String,
			default: "Minimal"
		}
	},
	CustomizerTitle: {
		CustomizerTitleBackgroundColor: {
			type: String,
			default: "#ffff"
		},
		CustomizerTitleFontFamily: {
			type: String,
			default: ""
		},
		CustomizerTitleFontSize: {
			type: String,
			default: "22px"
		},
		CustomizerTitleFontSizeMobile: {
			type: String,
			default: ""
		},
		CustomizerTitleFontColor: {
			type: String,
			default: "#000000"
		},
		CustomizerTitleFontColorMobile: {
			type: String,
			default: "#ffff"
		},
		CustomizerTitleDividerColor: {
			type: String,
			default: "#000000"
		},
		CustomizerTitleDividerThickness: {
			type: String,
			default: "0px"
		}
	},
	LayersPanel: {
		LayersPanelPosition: {
			type: String,
			default: "left"
		},
		LayersPanelBackgroundColor: {
			type: String,
			default: "#ffff"
		},
		LayersPanelBorderColor: {
			type: String,
			default: "#ffff"
		},
		LayersPanelBorderThickness: {
			type: String,
			default: "0px"
		},
		LayersPanelErrorColor: {
			type: String,
			default: "#ffff"
		}
	},
	LayersList: {
		LayersListFontColor: {
			type: String,
			default: "#000000"
		},
		LayersListFontSize: {
			type: String,
			default: ""
		},
		LayersListFontFamily: {
			type: String,
			default: ""
		},
		LayersListDiscriptionFontColor: {
			type: String,
			default: "#ffff"
		},
		LayersListDiscriptionFontSize: {
			type: String,
			default: ""
		},
		LayersListDiscriptionFontFamily: {
			type: String,
			default: ""
		},
		LayersListDividerColor: {
			type: String,
			default: "#ffff"
		},
		LayersListDividerThickness: {
			type: String,
			default: ""
		}
	},
	LayersSettings: {
		LayersSettingsBorderColor: {
			type: String,
			default: "#ffff"
		},
		LayersSettingsSelectedBorderColor: {
			type: String,
			default: "#ffff"
		},
		LayersSettingsBorderThickness: {
			type: String,
			default: ""
		},
		LayersSettingsSelectedBorderThickness: {
			type: String,
			default: ""
		},
		LayersSettingsFontColor: {
			type: String,
			default: "#ffff"
		},
		LayersSettingsFontSize: {
			type: String,
			default: ""
		},
		LayersSettingsFontFamily: {
			type: String,
			default: ""
		},
		LayersSettingsPopUpBackgroundColor: {
			type: String,
			default: "#ffff"
		},
		LayersSettingsPopUpBackgroundRounding: {
			type: String,
			default: ""
		},
		LayersSettingsDescriptionFontColor: {
			type: String,
			default: "#ffff"
		},
		LayersSettingsDescriptionFontSize: {
			type: String,
			default: ""
		},
		LayersSettingsDescriptionFontFamily: {
			type: String,
			default: ""
		}
	},
	ThumbnailButton: {
		ThumbnailButtonRoundings: {
			type: String,
			default: ""
		},
		ThumbnailButtonColoumn: {
			type: String,
			default: "#ffff"
		},
		ThumbnailButtonWidth: {
			type: String,
			default: "#ffff"
		},
		ThumbnailButtonHeight: {
			type: String,
			default: ""
		},
		ThumbnailButtonVerticalMargin: {
			type: String,
			default: ""
		},
		ThumbnailButtonRoundingMobile: {
			type: String,
			default: ""
		},
		ThumbnailButtonWidthMobile: {
			type: String,
			default: ""
		},
		ThumbnailButtonHeightMobile: {
			type: String,
			default: ""
		},
		ThumbnailButtonMargintMobile: {
			type: String,
			default: ""
		}
	},
	TextInputAndDropdown: {
		TextInputAndDropdownBackgroundColor: {
			type: String,
			default: ""
		},
		TextInputAndDropdownHeight: {
			type: String,
			default: ""
		},
		TextInputAndDropdownRounding: {
			type: String,
			default: ""
		},
		TextInputAndDropdownBorderColor: {
			type: String,
			default: ""
		},
		TextInputAndDropdownMenuBackgroundColor: {
			type: String,
			default: ""
		},
		TextInputAndDropdownFontSize: {
			type: String,
			default: ""
		},
		TextInputAndDropdownHovOpClr: {
			type: String,
			default: ""
		},
		TextInputAndDropdownFontColor: {
			type: String,
			default: ""
		},
		TextInputAndDropdownSelcOpClr: {
			type: String,
			default: ""
		},
		TextInputAndDropdownMenuFontColor: {
			type: String,
			default: ""
		}
	},
	Customizer: {
		CustomizerLoadingIconColor: {
			type: String,
			default: "#ffff"
		},
		CustomizerBackgroundColor: {
			type: String,
			default: "#ffff"
		}
	},
	StepTitle: {
		StepTitleBackgroundColor: {
			type: String,
			default: "#ffff"
		},
		StepTitleSwitchStepsArrows: {
			type: String,
			default: "#ffff"
		}
	},
	SummaryTitle: {
		SummaryTitleFontFamily: {
			type: String,
			default: ""
		},
		SummaryTitleFontColor: {
			type: String,
			default: "#ffff"
		},
		SummaryTitleFontSize: {
			type: String,
			default: ""
		}
	},
	AddToCart: {
		AddToCartBorderColor: {
			type: String,
			default: "#ffff"
		},
		AddToCartBorderThickness: {
			type: String,
			default: "0px"
		},
		AddToCartBorderRounding: {
			type: String,
			default: "5px"
		},
		AddToCartFontFamily: {
			type: String,
			default: "Arial"
		},
		AddToCartFontColor: {
			type: String,
			default: "#ffff"
		},
		AddToCartBackgroundColor: {
			type: String,
			default: "#000000"
		},
		AddToCartHoverBackgroundColor: {
			type: String,
			default: "#ffff"
		},
		AddToCartFontSize: {
			type: String,
			default: "16px"
		}
	},
	ConfirmButtonMobile: {
		ConfirmButtonMobileFontColor: {
			type: String,
			default: "#ffff"
		},
		ConfirmButtonMobileBackgroundColor: {
			type: String,
			default: "#ffff"
		}
	},
	Price: {
		PricePosition: {
			type: String,
			default: ""
		},
		PriceFontFamily: {
			type: String,
			default: ""
		},
		PriceFontSize: {
			type: String,
			default: ""
		},
		PriceFontSizeMobile: {
			type: String,
			default: ""
		},
		PriceFontColour: {
			type: String,
			default: "#ffff"
		},
		PriceShowExtraPrice: {
			type: String,
			default: ""
		},
		PriceExtraPriceFontColor: {
			type: String,
			default: "#ffff"
		},
		PriceExtraPriceBorderColor: {
			type: String,
			default: "#ffff"
		},
		PriceExtraPriceBackgroundColor: {
			type: String,
			default: "#ffff"
		}
	},
	SwitchViewArrows: {
		SwitchViewArrowsColor: {
			type: String,
			default: "#000000"
		}
	},
	SwitchViewDots: {
		SwitchViewDotsColour: {
			type: String,
			default: "#737373"
		},
		SwitchViewDotsSelectColour: {
			type: String,
			default: "grey"
		}
	},
	Zoom: {
		ZoomColor: {
			type: String,
			default: "#00000"
		}
	},
	ShareButton: {
		ShareButtonDisplayButtonYesNo: {
			type: String,
			default: "true"
		},
		ShareButtonIconButtonOrTextButton: {
			type: String,
			default: "false"
		},
		ShareButtonColor: {
			type: String,
			default: "#00000"
		},
		ShareButtonTextButtonRounding: {
			type: String,
			default: ""
		},
		ShareButtonTextButtonLength: {
			type: String,
			default: "small"
		}
	},
	FileUpload: {
		FileUploadBackgroundColor: {
			type: String,
			default: "#ffff"
		},
		FileUploadBorderColor: {
			type: String,
			default: "#ffff"
		},
		FileUploadBorderRounding: {
			type: String,
			default: ""
		},
		FileUploadBorderThickness: {
			type: String,
			default: ""
		},
		FileUploadFontColor: {
			type: String,
			default: "#ffff"
		},
		FileUploadLinkColor: {
			type: String,
			default: ""
		},
		FileUploadFontFamily: {
			type: String,
			default: ""
		},
		FileUploadFontSize: {
			type: String,
			default: ""
		},
		FileUploadImgRoundings: {
			type: String,
			default: ""
		},
		FileUploadRemoveoptionbgColor: {
			type: String,
			default: "#ffff"
		},
		FileUploadRemoveophoverbgColor: {
			type: String,
			default: "#ffff"
		},
		FileUploadRemoveIconColor: {
			type: String,
			default: "#ffff"
		}
	},
	PrintReady: {
		PrintReadyEditionColor: {
			type: String,
			default: "#ffff"
		},
		PrintReadyEditionIconColor: {
			type: String,
			default: "#ffff"
		},
		PrintReadyEditionDPIIndicatorTextColor: {
			type: String,
			default: "#ffff"
		},
		DPILowQualityTextColor: {
			type: String,
			default: "#ffff"
		},
		LowQualityMessageBackgroundColor: {
			type: String,
			default: "#ffff"
		},
		LowQualityMessageTextColor: {
			type: String,
			default: "#ffff"
		},
		DPIHighQualityColor: {
			type: String,
			default: "#ffff"
		}
	},
	DescriptionMobile: {
		DescriptionMobileColor: {
			type: String,
			default: "#ffff"
		},
		DescriptionMobileBackgroundColor: {
			type: String,
			default: "#ffff"
		},
		DescriptionMobileFontFamily: {
			type: String,
			default: "Arial"
		},
		DescriptionMobileFontSize: {
			type: String,
			default: ""
		}
	},
	OutOfStock: {
		OutOfStockBadgeIconColor: {
			type: String,
			default: "#000000"
		},
		OutOfStockBadgeBackgroundColor: {
			type: String,
			default: ""
		},
		OutOfStockBadgeBorderWidth: {
			type: String,
			default: ""
		},
		OutOfStockBadgeBorderColor: {
			type: String,
			default: "#ffff"
		},
		OutOfStockBannerTextColor: {
			type: String,
			default: "#ffff"
		},
		OutOfStockBannerBackgroundColor: {
			type: String,
			default: "#ffff"
		}
	}
});




const Customizer = mongoose.model('Customizer', customizerSchema);

module.exports = Customizer;
