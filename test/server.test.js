const request = require('supertest');
const app = require('../src/server');

describe("POST /", () => {
  it("should respond with the 'content' field from the JSON body", async () => {
    const response = await request(app)
      .post("/")
      .send({ content: "Hello World" })
      .set("Accept", "application/json");

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Hello World");
  });

  it("should return an error if 'content' field is missing", async () => {
    const response = await request(app)
      .post("/")
      .send({})
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Content field missing");
  });
});
