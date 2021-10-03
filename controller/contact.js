const Contact = require("../models/Contact");

/**
 *
 * @param {Send mail} req
 * @param {*} res
 */
exports.sendMail = async (req, res) => {
  const { fullName, email, msgType, message } = req.body;

  try {
    contact = new Contact({
      fullName,
      email,
      msgType,
      message,
    });

    contact.save((err, contact) => {
      if (err) {
        return res.status(400).send({
          error: "Failed to save to DB",
          status: 400,
          data: contact,
        });
      }
      res.status(200).send({
        msg: "Thank for Connecting",
        status: 200,
        data: contact,
      });
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

/**
 *
 * @param {Get mails} req
 * @param {*} res
 */
exports.getMail = async (req, res) => {
  try {
    const contact = await Contact.find();
    if (contact) {
      res.status(200).send({
        error: "Contact Retrieved",
        status: 200,
        data: contact,
      });
    } else {
      res.status(200).send({
        error: "No Contact",
        status: 200,
        data: null,
      });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
