const mongoose = require('mongoose');

const layerDataSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  title: { type: String, required: true },

  layerdata: [
    {
      layerId: { type: String },
      InputType: { type: String },
      dispalyType: { type: String },
      imageTitle: { type: String },
      thumbnailType: { type: String },
      labelType: { type: Boolean, default: false },
      imageName: { type: String },
      price : { type: String },
      Thumbailimage: { type: String },
      images: [
        {
          id: { type: String },
          layerId: { type: String },
          imageName: { type: String },
          url: { type: String },
        },
      ],
      colours: [
        {
          id: { type: String },
          layerId: { type: String },
          colorName: { type: String },
          color: { type: String },
        },
      ],
      textName: { type: String },
      text: [
        {
          id: { type: String },
          layerId: { type: String },
          textName: { type: String },
          imageText: { type: String },
        },
      ],
    },
  ],
  
});

module.exports = mongoose.model('LayerData', layerDataSchema);