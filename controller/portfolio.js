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

/**
 *
 * @param {Get all porfolio} req
 * @param {*} res
 */
exports.getPortfolio = async (req, res) => {
  try {
    const portfolios = await Portfolio.find({ uid: req.user.uid });
    if (portfolios) {
      res.status(200).send({
        error: "Porfolios Retrieved",
        status: 200,
        data: portfolios,
      });
    } else {
      res.status(200).send({
        error: "No Porfolios Added",
        status: 200,
        data: null,
      });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};