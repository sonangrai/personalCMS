const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    uid: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    firstname: { type: String },
    lastname: { type: String },
    displayPic: { type: String },
    shortDescription: { type: String },
    email: { type: String },
    dob: { type: Date },
    gitUsername: { type: String },
    skills: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.modal("Profile", profileSchema);
