const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv').config(); 
const sequelize = require('./database');
const satelliteRoutes = require('./controllers/satelliteController');
const sequelize = require('./config/database');
const Satellite = require('./models/Satellite');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

// Endpoint to handle satellite search requests
app.get('/api/satellite', async (req, res) => {
  const { searchTerm } = req.query;
  try {
    const response = await axios.get(`https://api.nasa.gov/endpoint?search=${searchTerm}&apiKey=${process.env.NASA_API_KEY}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// Middleware
app.use(bodyParser.json());
app.use('/api', satelliteRoutes);

// Database connection
sequelize
    .sync()
    .then(() => {
        console.log('Database connected');
    })
    .catch((err) => {
        console.error('Error connecting to database:', err);
    });

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Initialize Sequelize
sequelize
    .sync({ force: false }) // Set force to true to drop tables on every sync
    .then(() => {
        console.log('Database connected and tables synced');
    })
    .catch((err) => {
        console.error('Error connecting to database:', err);
    });


