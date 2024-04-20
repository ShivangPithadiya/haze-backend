import React, { useState, useEffect, useContext } from "react";
import ThemeContext from "../../../contexts/ThemeContext";

const ShareButton = () => {
  const { customizerData } = useContext(ThemeContext);
  const [customizerShareButton, setCustomizerShareButton] = useState({});
  useEffect(() => {
    let paddingForShareBtn;
    switch (customizerData?.ShareButton?.ShareButtonTextButtonLength) {
      case "small":
        paddingForShareBtn = "8px 7px";
        break;
      case "medium":
        paddingForShareBtn = "8px 15px";
        break;
      case "large":
        paddingForShareBtn = "8px 25px";
        break;
      default:
        paddingForShareBtn = "8px 7px"; // Default padding value
        break;
    }
    setCustomizerShareButton({
      display:
        customizerData?.ShareButton?.ShareButtonDisplayButtonYesNo === "true"
          ? "block"
          : "none",
      fillColor: customizerData?.ShareButton?.ShareButtonColor,
      iconBtnTrue:
        customizerData?.ShareButton?.ShareButtonIconButtonOrTextButton,
      borderRadius: customizerData?.ShareButton?.ShareButtonTextButtonRounding,
      padding: paddingForShareBtn,
    });
  }, [customizerData]);
  return (
    <>
      {customizerShareButton?.iconBtnTrue === "true" && (
        <>
          <button class="share_button" style={customizerShareButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M19.2785 16.8161C18.0807 16.8161 17.0015 17.3334 16.2525 18.1562L9.51555 13.9837C9.69542 13.5233 9.79517 13.0232 9.79517 12.5C9.79517 11.9766 9.69542 11.4765 9.51555 11.0162L16.2525 6.84355C17.0015 7.66638 18.0807 8.18384 19.2785 8.18384C21.5349 8.18384 23.3705 6.34822 23.3705 4.09183C23.3705 1.83544 21.5349 0 19.2785 0C17.0221 0 15.1865 1.83563 15.1865 4.09202C15.1865 4.6152 15.2864 5.11531 15.4661 5.57574L8.72935 9.74825C7.98033 8.92542 6.90116 8.40796 5.70335 8.40796C3.44696 8.40796 1.61133 10.2438 1.61133 12.5C1.61133 14.7564 3.44696 16.592 5.70335 16.592C6.90116 16.592 7.98033 16.0747 8.72935 15.2517L15.4661 19.4242C15.2864 19.8846 15.1865 20.3847 15.1865 20.9081C15.1865 23.1643 17.0221 24.9999 19.2785 24.9999C21.5349 24.9999 23.3705 23.1643 23.3705 20.9081C23.3705 18.6517 21.5349 16.8161 19.2785 16.8161ZM16.6786 4.09202C16.6786 2.65846 17.8449 1.49212 19.2785 1.49212C20.712 1.49212 21.8784 2.65846 21.8784 4.09202C21.8784 5.52558 20.712 6.69192 19.2785 6.69192C17.8449 6.69192 16.6786 5.52558 16.6786 4.09202ZM5.70335 15.0999C4.26959 15.0999 3.10325 13.9335 3.10325 12.5C3.10325 11.0664 4.26959 9.90007 5.70335 9.90007C7.13691 9.90007 8.30306 11.0664 8.30306 12.5C8.30306 13.9335 7.13691 15.0999 5.70335 15.0999ZM16.6786 20.9079C16.6786 19.4744 17.8449 18.308 19.2785 18.308C20.712 18.308 21.8784 19.4744 21.8784 20.9079C21.8784 22.3415 20.712 23.5078 19.2785 23.5078C17.8449 23.5078 16.6786 22.3415 16.6786 20.9079Z"
                fill={customizerShareButton.fillColor}
              />
            </svg>
          </button>
        </>
      )}
      {customizerShareButton?.iconBtnTrue === "false" && (
        <>
          <button class="shareTextBtn" style={customizerShareButton}>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
              <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
            </svg>
          </button>
        </>
      )}
    </>
  );
};

export default ShareButton;
