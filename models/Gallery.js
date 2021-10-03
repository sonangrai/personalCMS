const mongoose = require("mongoose");

const GallerySchema = new mongoose.Schema(
  {
    pid: { type: mongoose.Schema.Types.ObjectId, ref: "portfolio" },
    imageUrl: { type: String, required: true },
    caption: { type: String, required: true },
  },
  { timestamps }
);

module.exports = mongoose.model("Gallery", GallerySchema);
