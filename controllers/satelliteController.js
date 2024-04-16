const express = require('express');
const router = express.Router();
const Satellite = require('../models/Satellite');

// Get all satellites
router.get('/satellites', async (req, res) => {
    try {
        const satellites = await Satellite.findAll();
        res.json(satellites);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Add a new satellite
router.post('/satellites', async (req, res) => {
    try {
        const { name, type, launched } = req.body;
        const newSatellite = await Satellite.create({ name, type, launched });
        res.status(201).json(newSatellite);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Update a satellite
router.put('/satellites/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, type, launched } = req.body;
        const updatedSatellite = await Satellite.update(
            { name, type, launched },
            { where: { id } }
        );
        res.json(updatedSatellite);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});


// Delete a satellite
router.delete('/satellites/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Satellite.destroy({ where: { id } });
        res.sendStatus(204);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Create a new satellite
exports.createSatellite = async (req, res) => {
    try {
        const { name, orbitalPath, altitude, velocity } = req.body;
        const satellite = await Satellite.create({ name, orbitalPath, altitude, velocity });
        res.status(201).json(satellite);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = router;
const Satellite = require('../models/Satellite');

// Controller function to get all satellites
exports.getAllSatellites = async (req, res) => {
    try {
        const satellites = await Satellite.find(); // Assuming you have a Satellite model
        res.status(200).json(satellites);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Controller function to get a satellite by ID
exports.getSatelliteById = async (req, res) => {
    const { id } = req.params;
    try {
        const satellite = await Satellite.findById(id);
        if (!satellite) {
            return res.status(404).json({ message: 'Satellite not found' });
        }
        res.status(200).json(satellite);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Controller function to create a new satellite
exports.createSatellite = async (req, res) => {
    try {
        const { name, type, launchDate } = req.body; // Assuming you receive these fields in the request body
        const newSatellite = new Satellite({ name, type, launchDate });
        const savedSatellite = await newSatellite.save();
        res.status(201).json(savedSatellite);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Controller function to update a satellite by ID
exports.updateSatellite = async (req, res) => {
    const { id } = req.params;
    const { name, type, launchDate } = req.body;
    try {
        const updatedSatellite = await Satellite.findByIdAndUpdate(id, { name, type, launchDate }, { new: true });
        if (!updatedSatellite) {
            return res.status(404).json({ message: 'Satellite not found' });
        }
        res.status(200).json(updatedSatellite);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Controller function to delete a satellite by ID
exports.deleteSatellite = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedSatellite = await Satellite.findByIdAndDelete(id);
        if (!deletedSatellite) {
            return res.status(404).json({ message: 'Satellite not found' });
        }
        res.status(200).json({ message: 'Satellite deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};
