const Gallery = require("../models/Gallery");

/**
 * Add Image to Gallery
 */
exports.addImage = async (req, res) => {
  const { imageUrl, caption } = req.body;

  gallery = new Gallery({
    pid: req.params.pid,
    imageUrl,
    caption,
  });

  try {
    //Now saving to the mongoDB
    gallery.save((err, gallery) => {
      if (err) {
        return res.status(400).send({
          error: "Failed to save to DB",
          status: 400,
          data: gallery,
        });
      }
      res.status(200).send({
        msg: "Image Added Successfully to Gallery",
        status: 200,
        data: gallery,
      });
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

/**
 * Delete Image from Gallery
 */
exports.deleteImage = async (req, res) => {
  try {
    const findImage = await Gallery.findById(req.params.gid);
    if (!findImage)
      return res.status(404).send({
        error: "Image not found",
        status: 404,
        data: null,
      });

    findImage.remove().then(() => {
      return res.status(200).send({
        error: "Image Deleted",
        status: 200,
        data: null,
      });
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
