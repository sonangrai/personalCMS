const mongoose = require("mongoose");

const PortfolioModal = new mongoose.Schema(
  {
    uid: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    link: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Portfolio", PortfolioModal);
