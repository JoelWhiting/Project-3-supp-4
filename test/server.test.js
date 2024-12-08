const request = require('supertest');
const app = require('../src/server');

/**
 * Unit tests for the POST endpoint of the Express server.
 *
 * @file Tests for server.js using Jest and Supertest.
 * @requires supertest
 * @requires server
 */

describe("POST /", () => {
    /**
     * Test case: Verifies the server responds correctly when the 'content' field is provided.
     *
     * @function
     * @name POST/ - Success Case
     * @async
     * @throws {Error} If the response does not include the 'message' field or returns an incorrect status code.
     *
     * @example
     * Request:
     * POST /
     * Body: { "content": "Hello World" }
     *
     * Response:
     * { "message": "Hello World" }
     */
    it("should respond with the 'content' field from the JSON body", async () => {
        const response = await request(app)
            .post("/")
            .send({ content: "Hello World" })
            .set("Accept", "application/json");

        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Hello World");
    });

    /**
     * Test case: Verifies the server returns an error when the 'content' field is missing in the request body.
     *
     * @function
     * @name POST/ - Error Case
     * @async
     * @throws {Error} If the response does not include an 'error' field or fails to return a 400 status code.
     *
     * @example
     * Request:
     * POST /
     * Body: {}
     *
     * Response:
     * { "error": "Content field missing" }
     */
    it("should return an error if 'content' field is missing", async () => {
        const response = await request(app)
            .post("/")
            .send({})
            .set("Accept", "application/json");

        expect(response.status).toBe(400);
        expect(response.body.error).toBe("Content field missing");
    });
});
