const express = require(`express`);
const router = express.Router();
const scenarioController = require(`../controllers/scenario.controller`);

router.get(`/test`, scenarioController.test);

router.post(`/`, scenarioController.create);

// Get all of the products in our database
router.get(`/`, scenarioController.getScenarios);

// Get a specific product by id
router.get(`/:id`, scenarioController.getScenarioById);

// Update a specific product
router.put(`/:id`, scenarioController.updateScenario);

// Delete a specific product
router.delete(`/:id`, scenarioController.deleteScenario);

module.exports = router;
