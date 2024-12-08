const express = require('express');
const app = require('./server'); // Import the Express server module

const PORT = 3000;

/**
 * Main file to start the Express server.
 * 
 * @file Entry point for the Express server application.
 * @requires express
 * @requires server
 */

/**
 * Starts the Express server and listens on the specified port.
 * 
 * @constant {number} PORT - The port on which the server will listen.
 * @example
 * // Run the server
 * node main.js
 * 
 * // Output:
 * Server running at http://localhost:3000
 */
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
