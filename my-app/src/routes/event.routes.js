const express = require(`express`);
const router = express.Router();
const eventController = require(`../controllers/event.controller`);

router.get(`/test`, eventController.test);

router.post(`/`, eventController.create);

// Get all of the products in our database
router.get(`/`, eventController.getEvents);

// Get a specific product by id
router.get(`/:id`, eventController.getEventById);

// Update a specific product
router.put(`/:id`, eventController.updateEvent);

// Delete a specific product
router.delete(`/:id`, eventController.deleteEvent);

module.exports = router;
