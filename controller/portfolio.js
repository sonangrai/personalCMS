const { validationResult } = require("express-validator");
const Portfolio = require("../models/Portfolio");
/**
 *
 * @param {Post new porfolio} req
 * @param {*} res
 */
exports.addPortfolio = async (req, res) => {
  //Checking params
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { title, category, link, preview, description } = req.body;

  try {
    portfolio = new Portfolio({
      uid: req.user.uid,
      title,
      category,
      link,
      preview,
      description,
    });

    //Now saving to the mongoDB
    portfolio.save((err, profile) => {
      if (err) {
        return res.status(400).send({
          error: "Failed to save to DB",
          status: 400,
          data: portfolio,
        });
      }
      res.status(200).send({
        msg: "Portfolio Added Successfully",
        status: 200,
        data: portfolio,
      });
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
