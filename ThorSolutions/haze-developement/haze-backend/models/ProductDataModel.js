const { create } = require("lodash");
const mongoose = require("mongoose");

const ProductDataSchema = new mongoose.Schema({
  title: { type: String, required: true },

  layerdata: [
    {
      layerId: { type: String },
      inputType: { type: String },
      dispalyType: { type: String },
      imageTitle: { type: String },
      thumbnailType: { type: String },
      labelType: { type: Boolean, default: false },
      imageName: { type: String },
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

  status: { type: String, default: "active" },
  created_at: { type: Date, default: Date.now },
 updated_at: { type: Date, default: Date.now },

});

module.exports = mongoose.model("Products", ProductDataSchema);
