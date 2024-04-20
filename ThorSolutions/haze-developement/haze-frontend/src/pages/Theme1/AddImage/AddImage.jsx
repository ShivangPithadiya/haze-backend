import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Stage, Layer, Text, Image as KonvaImage,Rect } from "react-konva";
import "./AddImage.css"
import { setDownloadedImage } from "../../../features/addImageSlice";
import { useDispatch } from "react-redux";

const AddImage = () => {
  const title = useSelector((state) => state?.title);
  const [textPosition, setTextPosition] = useState({ x: 50, y: 50 });
  const [image, setImage] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedTextColor, setSelectedTextColor] = useState(null);

  const stageRef = useRef(null);
  const [editedImage, setEditedImage] = useState(null);
const dispatch=useDispatch()
  useEffect(() => {
    if (title?.uploadedImage) {
      const img = new window.Image();
      img.src = editedImage || title?.uploadedImage;
      img.onload = () => {
        setImage(img);
      };
    }
  }, [title?.uploadedImage, editedImage]);

 
  useEffect(() => {
    // Reset editedImage when a new image is uploaded
    setEditedImage(null);
    if (title?.uploadedImage) {
      const img = new window.Image();
      img.src = title?.uploadedImage;
      img.onload = () => {
        setImage(img);
      };
    }
  }, [title?.uploadedImage]);

  const handleDragEnd = (e) => {
    setTextPosition({
      x: e.target.x(),
      y: e.target.y(),
    });
  };

  const handleDownloadClick = () => {
    const stage = stageRef.current.getStage();

    const dataURL = stage.toDataURL({
      pixelRatio: 2,
    });
    dispatch(setDownloadedImage(dataURL));
    localStorage.setItem('downloadedImage', dataURL);


    const a = document.createElement("a");
    a.href = dataURL;
    a.download = "edited_image.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    applyColorToImage(color);
  };

  const applyColorToImage = (newMainColor) => {
    const imageElement = new Image();
    imageElement.crossOrigin = 'anonymous';
    imageElement.src = title?.uploadedImage || editedImage;
  
    imageElement.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = imageElement.width;
      canvas.height = imageElement.height;
      const ctx = canvas.getContext('2d');
  
      // Draw the image on the canvas
      ctx.drawImage(imageElement, 0, 0, canvas.width, canvas.height);
  
      // Get the image data
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
  
      ctx.putImageData(imageData, 0, 0);
    
  
      ctx.globalCompositeOperation = 'source-in';
      ctx.fillStyle = `rgba(${hexToRgb(newMainColor)}, 0.8)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'source-over';
      setEditedImage(canvas.toDataURL('image/jpeg'));
  
      // Set the edited image with transparency applied
      setEditedImage(canvas.toDataURL('image/png'));
    };
  };


  
  // <-------------Text color change-------------->
  const handleTextColorClick = (color) => {
    setSelectedTextColor(color);
    applyTextColorToImage(color);
  };
  const applyTextColorToImage = (newTextColor) => {
    const textElement = stageRef.current.findOne('Text');
    if (textElement) {
      textElement.fill(newTextColor);
      stageRef.current.batchDraw();
    }
  };



  const hexToRgb = (hex) => {
    hex = hex?.replace(/^#/, '');
  //  hex into RGB 
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
  
    return `${r}, ${g}, ${b}`;
  };
useEffect(()=>{

},[title?.uploadedImage])
  return (
    <div className="center_wrapper">
      <div className="products_wrapper">
        <div className="products_col ">
          <div className="droducts_col_title">
            <p className="mx-4 mt-4 ">Product Name</p> <br />
          </div>
         <div className="border_div"></div>
          <div className="untitle_title">
            <p className="p-head">
              {(title && title?.imageTitle) || "Untitled Image"}
            </p>
            <div className="d-flex g-3">
            {/* <div className="upload_image me-3"><img className="dummyImage" src="assets/Image/product/dummyProduct.png" height={100} width={100}/></div> */}
            {title?.uploadedImage ?  <div className="upload_image"><img  src={title?.uploadedImage} /></div> :
                        <div className="upload_image me-3"><img className="dummyImage" src="assets/Image/product/dummyProduct.png" height={100} width={100}/></div>
                      }
            </div>
            {title?.colour?.colourTitle && (
              <>
                <hr />
                <p className="p-head">{title?.colour?.colourTitle}</p>
              </>
            )}

            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap' }}>
              {title?.colour?.createdColour?.map((color, index) => (
                <div
                  key={index}
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '5px',
                    backgroundColor: color,
                    margin: '5px',
                  }}
                  onClick={() => handleColorClick(color)}
                ></div>
              ))}
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "5px",
                  margin: '5px',
                  backgroundColor: title?.colour?.previewColor,
                }}
                onClick={() => handleColorClick(title?.colour?.previewColor)}
              ></div>
            </div>
          </div>
             <div className="border_div"></div>
           <div className="untitle_title">
            {title?.imageText?.text && (
              <>
               
                <p className="p-head">{title?.imageText?.text}</p>
              </>
            )}

            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap' }}>
              {title?.imageText?.textColour?.map((color, index) => (
                <div
                  key={index}
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '5px',
                    backgroundColor: color,
                    margin: '5px',
                  }}
                  onClick={() => handleTextColorClick(color)}></div>
              ))}
             
            </div>
          </div>
        </div>
        <div className="products_col" style={{ backgroundColor: "white" }}>
          <div className="mt-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Stage width={400} height={400} ref={stageRef}>
              <Layer>
             
                {image && <KonvaImage image={image} width={400} height={400}  />}
                <Text
                  text={title?.imageText?.text}
                  x={textPosition.x}
                  y={textPosition.y}
                  draggable
                  onDragEnd={handleDragEnd}
                  zIndex={999}
                  fontSize={30}
                />
              </Layer>
            </Stage>
            {image &&  <button onClick={handleDownloadClick}>Download</button>}
            <p>Your product will appear here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddImage;
/////////////////////////////////
// import React, { useState, useEffect, useRef } from "react";
// import { useSelector } from "react-redux";
// import { Stage, Layer, Text, Image as KonvaImage, Rect } from "react-konva";
// import "./AddImage.css";
// import { setDownloadedImage } from "../../../features/addImageSlice";
// import { useDispatch } from "react-redux";

// const AddImage = () => {
//   const title = useSelector((state) => state?.title);
//   const customizeProduct = useSelector(
//     (state) => state?.customizeProduct?.layerData
//   );
//   const [textPosition, setTextPosition] = useState({ x: 50, y: 50 });
//   const [image, setImage] = useState([]);
//   const [selectedColor, setSelectedColor] = useState(null);
//   const [selectedTextColor, setSelectedTextColor] = useState(null);
//   const [showImage, setShowImage] = useState([]);
//   const [editedImage, setEditedImage] = useState(null);
//   const stageRef = useRef(null);
//   const dispatch = useDispatch();
//   // <--------------------------Image Data-------------------------->
//   useEffect(() => {
//     if (showImage && showImage.length > 0) {
//       const images = showImage.map((imageObj) => {
//         return new Promise((resolve) => {
//           const img = new window.Image();
//           img.onload = () => resolve(img);
//           img.src = editedImage || imageObj.url;
//         });
//       });

//       Promise.all(images)
//         .then((loadedImages) => {
//           // loadedImages is an array of Image objects that have finished loading
//           // You can do something with the loaded images here
//           // For example, set the loaded images as the current images
//           setImage(loadedImages);
//         })
//         .catch((error) => {
//           console.error("Error loading images:", error);
//         });
//     }
//   }, [showImage, editedImage]);

//   useEffect(() => {
//     // Reset editedImage when a new image is uploaded
//     setEditedImage(null);
//     if (title?.uploadedImage) {
//       const img = new window.Image();
//       img.src = title?.uploadedImage;
//       img.onload = () => {
//         setImage(img);
//       };
//     }
//   }, [title?.uploadedImage]);

//   const handleDragEnd = (e) => {
//     setTextPosition({
//       x: e.target.x(),
//       y: e.target.y(),
//     });
//   };

//   const handleDownloadClick = () => {
//     const stage = stageRef.current.getStage();

//     const dataURL = stage.toDataURL({
//       pixelRatio: 2,
//     });
//     dispatch(setDownloadedImage(dataURL));
//     localStorage.setItem("downloadedImage", dataURL);

//     const a = document.createElement("a");
//     a.href = dataURL;
//     a.download = "edited_image.png";
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//   };


//   // <------------------------Color Data------------------------>
//   const handleColorClick = (color) => {
//     setSelectedColor(color.color);
//     applyColorToImage(color.color);
//   };

//   const applyColorToImage = (newMainColor) => {
//     // const imageSource = image.length > 0 ? image[0].src : "";
//     // console.log("apply",newMainColor)
//     // const imageElement = new Image();
//     // imageElement.crossOrigin = "anonymous";
//     // imageElement.src =   imageSource || editedImage ;

//     // imageElement.onload = () => {
//     //   const canvas = document.createElement("canvas");
//     //   canvas.width = imageElement.width;
//     //   canvas.height = imageElement.height;
//     //   const ctx = canvas.getContext("2d");

//     //   // Draw the image on the canvas
//     //   ctx.drawImage(imageElement, 0, 0, canvas.width, canvas.height);

//     //   // Get the image data
//     //   const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//     //   const data = imageData.data;

//     //   ctx.putImageData(imageData, 0, 0);

//     //   ctx.globalCompositeOperation = "source-in";
//     //   ctx.fillStyle = `rgba(${hexToRgb(newMainColor)}, 0.8)`;
//     //   ctx.fillRect(0, 0, canvas.width, canvas.height);
//     //   ctx.globalCompositeOperation = "source-over";
//     //   setEditedImage(canvas.toDataURL("image/jpeg"));

//     //   // Set the edited image with transparency applied
//     //   setEditedImage(canvas.toDataURL("image/png"));
//     // };
// /////////////////////////////////////////////
//     const canvas = document.createElement("canvas");
//   const mainCtx = canvas.getContext("2d");

//   // Draw all images on the main canvas
//   image.forEach((imageObj, index) => {
//     const tempCanvas = document.createElement("canvas");
//     const tempCtx = tempCanvas.getContext("2d");

//     const img = new Image();
//     img.onload = () => {
//       // Draw each image on its own temporary canvas
//       tempCtx.drawImage(img, 0, 0, tempCanvas.width, tempCanvas.height);

//       // If it's the first image, apply color to the temporary canvas
//       if (index === 0) {
//         tempCtx.globalCompositeOperation = "source-in";
//         tempCtx.fillStyle = `rgba(${hexToRgb(newMainColor)}, 1.0)`
//         // tempCtx.fillStyle = `rgba(${hexToRgb(newMainColor)}, 0.8)`;
//         tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
//         tempCtx.globalCompositeOperation = "source-over";
//       }

//       // Draw the temporary canvas on the main canvas
//       mainCtx.drawImage(tempCanvas, 0, 0, canvas.width, canvas.height);

//       // If it's the last image, set the edited image with transparency applied
//       if (index === image.length - 1) {
//         setEditedImage(canvas.toDataURL("image/jpeg"));
//         setEditedImage(canvas.toDataURL("image/png"));
//       }
//     };
//     img.src = imageObj.src;
//   });

  
//     // const canvas = document.createElement("canvas");
//     // const mainCtx = canvas.getContext("2d");
  
//     // // Draw all images on the main canvas
//     // image.forEach((imageObj, index) => {
//     //   const img = new Image();
//     //   img.onload = () => {
//     //     // Draw each image on the main canvas
//     //     mainCtx.drawImage(img, 0, 0, canvas.width, canvas.height);
  
//     //     // If it's the first image, apply color to the main canvas
//     //     if (index === 0) {
//     //       mainCtx.globalCompositeOperation = "source-in";
//     //       mainCtx.fillStyle = `rgba(${hexToRgb(newMainColor)}, 1.0)`;
//     //       mainCtx.fillRect(0, 0, canvas.width, canvas.height);
//     //       mainCtx.globalCompositeOperation = "source-over";
//     //     }
  
//     //     // If it's the last image, set the edited image with transparency applied
//     //     if (index === image.length - 1) {
//     //       setEditedImage(canvas.toDataURL("image/jpeg"));
//     //       setEditedImage(canvas.toDataURL("image/png"));
//     //     }
//     //   };
//     //   img.src = imageObj.src;
//     // });
  
//   };

//   // <-------------Text color change-------------->
//   const handleTextColorClick = (color) => {
//     setSelectedTextColor(color);
//     applyTextColorToImage(color);
//   };
//   const applyTextColorToImage = (newTextColor) => {
//     const textElement = stageRef?.current?.findOne("Text");
//     if (textElement) {
//       textElement.fill(newTextColor);
//       stageRef.current.batchDraw();
//     }
//   };

//   const hexToRgb = (hex) => {
//     hex = hex.replace(/^#/, "");
//     //  hex into RGB
//     const bigint = parseInt(hex, 16);
//     const r = (bigint >> 16) & 255;
//     const g = (bigint >> 8) & 255;
//     const b = bigint & 255;

//     return `${r}, ${g}, ${b}`;
//   };
//   useEffect(() => {}, [title?.uploadedImage]);

//   const handleLayerImage = (e, id) => {
//     let foundLayerId = null;

//     customizeProduct.forEach((item) => {
//       const foundImage = item?.images?.find((image) => image.id === id);

//       if (foundImage) {
//         foundLayerId = item.layerId;
//       }
//     });

//     if (foundLayerId) {
//       const existingImageIndex = showImage?.findIndex(
//         (existingImage) => existingImage.layerId === foundLayerId
//       );

//       const imageToUpdate = customizeProduct
//         .map((item) =>
//           item?.images?.find(
//             (image) => image.id === id && item.layerId === foundLayerId
//           )
//         )
//         .filter(Boolean)[0];

//       if (imageToUpdate) {
//         const updatedShowImage = [...showImage];

//         if (existingImageIndex !== -1) {
//           // Replace the existing image with the new one
//           updatedShowImage[existingImageIndex] = imageToUpdate;
//         } else {
//           // Add the new image to showImage
//           updatedShowImage.push(imageToUpdate);
//         }

//         setShowImage(updatedShowImage);
//       }
//     }
//   };

//   return (
//     <div className="center_wrapper">
//       <div className="products_wrapper">
//         <div className="products_col_left">
//           <div className="droducts_col_title">
//             <p className="mx-4 mt-4 ">Product Name</p> <br />
//           </div>
//           <div className="border_div"></div>
//           <div className="untitle_title">
//             {/* <>-------------------Image Data---------------------</> */}
//             {customizeProduct?.map((layer) => (
//               <div key={layer.layerId} className="row mb-3 mx-1">
//                 <p className="p-head">{layer.imageTitle || "Untitled Image"}</p>
//                 {layer?.images?.map((image) => (
//                   <div
//                     key={image.id}
//                     className="upload_image me-3"
//                     onClick={(e) => handleLayerImage(e, image.id)}
//                   >
//                     <img
//                       className="dummyImage"
//                       src={image.url}
//                       height="100px"
//                       width="100px"
//                     />
//                   </div>
//                 ))}
//               </div>
//             ))}
//            {/* <>-----------------Color Data----------------</> */}
//             {customizeProduct?.map((layer) => (
//               <>
//                 {/* {layer.imageTitle && (
//               <>
//                 <hr />
//                 <p className="p-head">{(layer.imageTitle) || "Untitled Image"}</p>
//               </>
//             )} */}
//                 <div
//                   style={{
//                     marginTop: "20px",
//                     display: "flex",
//                     flexWrap: "wrap",
//                   }}
//                 >
//                   {layer?.colours?.map((color, index) => (
//                     <div>
//                       <div
//                         key={index}
//                         style={{
//                           width: "50px",
//                           height: "50px",
//                           borderRadius: "5px",
//                           backgroundColor: color.color,
//                           margin: "5px",
//                         }}
//                         onClick={() => handleColorClick(color)}
//                       ></div>
                      
//                       {/* <div
//                 style={{
//                   width: "50px",
//                   height: "50px",
//                   borderRadius: "5px",
//                   margin: "5px",
//                   backgroundColor: title?.colour?.previewColor,
//                 }}
//                 onClick={() => handleColorClick(title?.colour?.previewColor)}
//               ></div> */}
//                     </div>
//                   ))}
//                 </div>
//               </>
//             ))}
//           </div>
//           {/* <div className="border_div"></div> */}
//           <div className="untitle_title">
//             {title?.imageText?.text && (
//               <>
//                 <p className="p-head">{title?.imageText?.text}</p>
//               </>
//             )}

//             <div
//               style={{ marginTop: "20px", display: "flex", flexWrap: "wrap" }}
//             >
//               {title?.imageText?.textColour?.map((color, index) => (
//                 <div
//                   key={index}
//                   style={{
//                     width: "50px",
//                     height: "50px",
//                     borderRadius: "5px",
//                     backgroundColor: color,
//                     margin: "5px",
//                   }}
//                   onClick={() => handleTextColorClick(color)}
//                 ></div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="products_col" style={{ backgroundColor: "white" }}>
//           <div
//             className="mt-5"
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <Stage width={400} height={400} ref={stageRef}>
//               <Layer>
//                 {/* {image && <KonvaImage image={image} width={400} height={400} />} */}
//                 {image.map((imageObj, index) => (
//                   <KonvaImage
//                     key={index}
//                     image={imageObj}
//                     width={400}
//                     height={400}
//                   />
//                 ))}
//                 <Text
//                   text={title?.imageText?.text}
//                   x={textPosition.x}
//                   y={textPosition.y}
//                   draggable
//                   onDragEnd={handleDragEnd}
//                   zIndex={999}
//                   fontSize={30}
//                 />
//               </Layer>
//             </Stage>
//             {image && <button onClick={handleDownloadClick}>Download</button>}
//             <p>Your product will appear here</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddImage;
