const request = require("supertest");

const app = require("../../server");

const mongoose = require("mongoose");

const validUserId = "660cd40c94e123456789ab01"; 

const invalidUserId = "1234";

describe("GET /users/:id", () => {
  it("should return 400 for invalid ObjectId", async () => {
    const res = await request(app).get(`/users/${invalidUserId}`);

    expect(res.statusCode).toBe(400);

    expect(res.body.error).toBe("Invalid user ID format.");
  });

  it("should return 404 for non-existing user", async () => {
    const nonExistingId = new mongoose.Types.ObjectId();

    const res = await request(app).get(`/users/${nonExistingId}`);

    expect(res.statusCode).toBe(404);
  });
});
