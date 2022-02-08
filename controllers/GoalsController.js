/**
 * Get all data from collection
 *
 * @param {*} req
 * @param {*} res
 */
const index = (req, res) => {
  res.status(200).json({
    data: [],
    message: "Successfully retrived data",
  });
};

/**
 * Create new record
 * @param {*} req
 * @param {*} res
 */
const create = (req, res) => {
  res.status(201).json({
    message: "created successfully.",
  });
};

/**
 * Update record
 * @param {*} req
 * @param {*} res
 */
const update = (req, res) => {
  res.status(200).json({
    message: "record udpated successfully",
  });
};

/**
 * remove records
 * @param {*} req
 * @param {*} res
 *
 */

const remove = (req, res) => {
  res.status(200).json({
    message: "Record deleted",
  });
};

module.exports = {
  index,
  create,
  update,
  remove,
};
