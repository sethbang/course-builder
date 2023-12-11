const express = require('express');
const dotenv = require('dotenv');
let openai;

(async () => {
    openai = await import('openai');
})();

const courseBuilder = require('./courseBuilder');
const validation = require('./validation');
const database = require('./database');
const utils = require('./utils');

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Set up OpenAI API configuration
const openaiApi = new openai.Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

// Create an instance of the OpenAI API
const openaiClient = new openai.OpenAIApi(openaiApi);

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/build-course', async (req, res) => {
    try {
        // Validate input
        const { subject, courseLength, educationLevel } = req.body;
        const errors = validation.validateCourseInput(subject, courseLength, educationLevel);
        if (errors.length > 0) {
            return res.status(400).json({ errors });
        }

        // Build the course using OpenAI API
        const courseContent = await courseBuilder.buildCourse(openaiClient, subject, courseLength, educationLevel);

        // Save the course to the database (if applicable)
        const savedCourse = await database.saveCourse(courseContent);

        // Respond with the course content
        res.status(200).json({ course: savedCourse });
    } catch (error) {
        console.error('Error building course:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
