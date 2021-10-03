/**
 * Add Image to Gallery
 */
exports.addImage = async (req, res) => {
  const { gallery } = req.body;

  res.send(gallery);
};
