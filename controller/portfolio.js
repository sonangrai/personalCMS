const { validationResult } = require("express-validator");
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
  } catch (error) {}
};
