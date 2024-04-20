import { createSlice } from "@reduxjs/toolkit";
import { set } from "lodash";

export const initialState = {
  imageLayerId: "",
  activeLayerId: "",
  layerData: [],
  activeLayerData: [],
  imageColorData: [],
  imageToColorData: [],
  imageData:[],
  colorData:[],
  textColorData:[],
  preview:[],
  saveImage:"",
  product_name: "",
  viewport: false

};

const customizeProductSlice = createSlice({
  name: "customizeProduct",
  initialState,
  reducers: {
    setProductName: (state, action) => {
      state.product_name = action.payload;
    },
    setViewport: (state, action) => {
      state.viewport = action.payload;
    },
    setActiveLayerId: (state, action) => {
      state.activeLayerId = action.payload;
    },
    setLayerData: (state, action) => {
      state.layerData.push(action.payload);
    },
    setpreview: (state, action) => {
      state.preview = action.payload;
    }
    ,
    setUpdateLayerData:(state, action)=>{
        const { activeLayer, updatedData } = action.payload;
        const index = state.layerData.findIndex((layer) => layer.layerId === activeLayer);
  
        if (index !== -1) {
          state.layerData[index] = { ...state.layerData[index], ...updatedData };
        }
    },
    setActiveLayerData: (state, action) => {
      state.activeLayerData = action.payload;
    },
    setImageColorData: (state, action) => {
      state.imageColorData = (action.payload);
    },
    setUpdateImageColorData: (state, action) => {
      const { activeLayer, updatedData } = action.payload;
      const index = state.imageColorData.findIndex((layer) => layer.layerId === activeLayer);

      if (index !== -1) {
        state.imageColorData[index] = { ...state.imageColorData[index], ...updatedData };
      }
    },
    setImageData: (state, action) => {
      state.imageData = action.payload;
    },
    setimageToColorData: (state, action) => {
      state.imageToColorData = action.payload;
    }
    ,
    setColorData: (state, action) => {
      state.colorData = action.payload;
    }
    ,
    setImageLayerID: (state, action) => {
      state.imageLayerId = action.payload;
    },
    setTextColorData: (state, action) => {
      state.textColorData = action.payload;
    },
    setDeleteLayerData: (state, action) => {
      const layerIndex = state.layerData.findIndex(layer => layer.layerId === action.payload);
      if (layerIndex !== -1) {
        state.layerData.splice(layerIndex, 1);
      }
    },

    setArchiveLayerData: (state, action) => {
      const layerIndex = state.layerData.findIndex(layer => layer.layerId === action.payload);
      if (layerIndex !== -1) {
        state.layerData.splice(layerIndex, 1);
      }
    },


  
 
  setSaveImage:(state,action)=>{
    state.saveImage = action.payload;
  },
  resetState: () => initialState,
  },
  resetImageToColorData: (state) => {
    state.imageToColorData = [];
  },
});

export const {
  setProductName,
  setViewport,
  setSaveImage,
  resetState,
  setTextColorData,
  setImageLayerID,
  setimageToColorData,
  setActiveLayerId,
  setActiveLayerData,
  setLayerData,
  setpreview,
  setImageColorData,
  setUpdateLayerData,
  setUpdateImageColorData,
  setImageData,
  setColorData,
  resetImageToColorData,
  setDeleteLayerData,
  setArchiveLayerData,
} = customizeProductSlice.actions;
export const customizeProduct = (state) => state.customizeProduct;

export default customizeProductSlice.reducer;
