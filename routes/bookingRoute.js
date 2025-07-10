const express = require("express");
const router = express.Router();
const bookingController = require("../controller/bookingController");
const { isLoggedIn, validateBooking } = require("../middleware");

router.post("/", isLoggedIn, validateBooking, bookingController.createBooking);
router.get("/", isLoggedIn, bookingController.showBookings);
router.delete("/:id", isLoggedIn, bookingController.deleteBooking);

module.exports = router;
