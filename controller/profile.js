const Profile = require("../models/Profile");
const cloudinary = require("cloudinary").v2;
require("../utils/cloudinaryConfig");

/**
 *
 * @param {add profile} req
 * @param {success||error} res
 */
exports.addProfile = async (req, res) => {
  const {
    firstname,
    lastname,
    displayPic,
    shortDescription,
    email,
    dob,
    gitUsername,
  } = req.body;

  try {
    profile = new Profile({
      uid: req.params.id,
      firstname,
      lastname,
      displayPic,
      shortDescription,
      email,
      dob,
      gitUsername,
    });

    //Now saving to the mongoDB
    profile.save((err, profile) => {
      if (err) {
        return res.status(400).send({
          error: "Failed to save to DB",
          status: 400,
          data: {
            name: profile.firstname + profile.lastname,
            email: profile.email,
            id: profile._id,
          },
        });
      }
      res.status(200).send({
        msg: "Profile Added Successfully",
        status: 200,
        data: profile,
      });
    });
  } catch (error) {
    console.log(error);
  }
};

/**
 * Uploading Image
 */
exports.uploadImage = async (req, res) => {
  const imagedata = req.files.files;
  console.log(imagedata);

  //Uploading to Cloudinary
  cloudinary.uploader.upload(
    imagedata.path,
    { folder: "myCMS" },
    async (error, result) => {
      if (result) {
        let resData = {};
        resData.imageurl = result.url;
        resData.imgpublicid = result.public_id;
        resData.format = result.format;
        resData.type = result.resource_type;

        res.status(200).send({
          msg: "Image Uploaded Successfully",
          status: 200,
          data: resData,
        });
      } else {
        return res.json(error);
      }
    }
  );
};

/**
 * Delete Image
 */
exports.deleteImage = async (req, res) => {
  //Deleting from Cloudinary
  cloudinary.uploader.destroy(
    check.imgpublicid,
    { folder: "myCMS" },
    async (error, result) => {
      if (result) {
        res.status(200).send({
          msg: "Image Deleted Successfully",
          status: 200,
          data: {},
        });
      } else {
        return res.json(error);
      }
    }
  );
};
