const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

/**
 * Middleware to parse JSON request bodies.
 */
app.use(bodyParser.json());

/**
 * POST endpoint at the root URL ('/').
 * 
 * @param {Object} req - The Express request object.
 * @param {Object} req.body - The body of the HTTP request.
 * @param {string} req.body.content - The "content" field from the JSON body.
 * @param {Object} res - The Express response object.
 * 
 * @returns {Object} JSON response with the "message" field if successful, or an error message.
 * 
 * @example
 * // Request Body:
 * { "content": "Hello World" }
 * 
 * // Response:
 * { "message": "Hello World" }
 */
app.post('/', (req, res) => {
    const { content } = req.body;
    if (content) {
        return res.json({ message: content });
    } else {
        return res.status(400).json({ error: 'Content field missing' });
    }
});

/**
 * Starts the Express server and listens on the specified port.
 * Logs a message to the console when the server is running.
 */
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app; // Export for testin
