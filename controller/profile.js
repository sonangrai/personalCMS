const Profile = require("../models/Profile");

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
