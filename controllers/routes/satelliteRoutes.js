// Import necessary modules
const express = require('express');
const router = express.Router();
const satelliteController = require('../controllers/satelliteController');

// Define routes using router methods
router.get('/satellites', satelliteController.getAllSatellites);
router.get('/satellites/:id', satelliteController.getSatelliteById);
router.post('/satellites', satelliteController.createSatellite);
router.put('/satellites/:id', satelliteController.updateSatellite);
router.delete('/satellites/:id', satelliteController.deleteSatellite);

// Export the router
module.exports = router;
