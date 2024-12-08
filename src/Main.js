const app = require('./server'); // Import the Express app from server.js

/**
 * The port number for the server to listen on.
 * Defaults to 3000 unless overridden by an environment variable.
 */
const PORT = process.env.PORT || 4000;

/**
 * Start the server and listen on the defined port.
 * Logs a message confirming the server is running.
 */
const server = app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

/**
 * Gracefully handle errors such as 'EADDRINUSE' (port already in use).
 */
server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Error: Port ${PORT} is already in use. Please free the port and try again.`);
        process.exit(1);
    } else {
        throw err; // Re-throw other errors
    }
});
