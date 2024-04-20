import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title:  (localStorage.getItem('selectedData'))?.title||"",
  imageTitle: (localStorage.getItem('selectedData'))?.imageTitle||"",
  imageText:{},
  uploadedImage: (localStorage.getItem('selectedData'))?.uploadedImage||"",
  productDataInput:localStorage.getItem('selectedData')?.productDataInput||{},
  colour:localStorage.getItem('selectedData')?.colour||{},
  downloadedImage: null,
};

const titleSlice = createSlice({
  name: 'title',
  initialState,
  reducers: {
    setEnterTitleDis: (state, action) => {
      state.title = action.payload;
    },
    setImageTitle: (state, action) => {
      state.imageTitle = action.payload;
    },
    setUploadedImage: (state, action) => {
      state.uploadedImage = action.payload;
    },
    setProductDataInput:(state, action)=>{
      state.productDataInput = action.payload;
    },
    setColourReducer:(state,action)=>{
      state.colour=action.payload
    },
    setImageTextReducer:(state,action)=>{
      state.imageText=action.payload
    },
    setDownloadedImage: (state, action) => {
      state.downloadedImage = action.payload;
    },
  },
});

export const { setEnterTitleDis, setImageTitle, setUploadedImage , setProductDataInput,setColourReducer,setImageTextReducer,setDownloadedImage } = titleSlice.actions;
export const selectEnterTitle = (state) => state.title;

export default titleSlice.reducer;

