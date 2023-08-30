const express = require("express");
const router = express.Router();
const {
  addJob,
  updateJob,
  getAllJobs,
  getJob,
  deleteJob,
} = require("../controllers/jobs");

router.route('/').post(addJob).get(getAllJobs);
router.route('/:id').get(getJob).delete(deleteJob).patch(updateJob);

module.exports = router;
