const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);

const User = require("../models/userModel");
const Workout = require("../models/workoutModel");
const workouts = require("./data/workouts.js");

let authToken = null;

// Helper function to authenticate a user and fetch a token
const authenticateUser = async () => {
  const response = await api
    .post("/api/user/signup")
    .send({ email: "mattiv@matti.fi", password: "R3g5T7#gh" });
  return response.body.token;
};

// Setup and teardown
beforeAll(async () => {
  await User.deleteMany({});
  authToken = await authenticateUser();
});

describe("Workout API with authenticated user", () => {
  beforeEach(async () => {
    await Workout.deleteMany({});
    await api
      .post("/api/workouts")
      .set("Authorization", `bearer ${authToken}`)
      .send(workouts[0]);
    await api
      .post("/api/workouts")
      .set("Authorization", `bearer ${authToken}`)
      .send(workouts[1]);
  });

  describe("Fetching workouts", () => {
    test("returns all workouts as JSON", async () => {
      await api
        .get("/api/workouts")
        .set("Authorization", `bearer ${authToken}`)
        .expect(200)
        .expect("Content-Type", /application\/json/);
    });
  });

  describe("Adding workouts", () => {
    test("successfully adds a new workout with valid data", async () => {
      const newWorkout = { title: "testworkout", reps: 10, load: 100 };

      await api
        .post("/api/workouts")
        .set("Authorization", `bearer ${authToken}`)
        .send(newWorkout)
        .expect(201);

      const response = await api
        .get("/api/workouts")
        .set("Authorization", `bearer ${authToken}`);

      const workoutTitles = response.body.map((workout) => workout.title);
      expect(response.body).toHaveLength(3);
      expect(workoutTitles).toContain("testworkout");
    });
  });

  describe("Deleting workouts", () => {
    test("successfully deletes a workout", async () => {
      const response = await api
        .get("/api/workouts")
        .set("Authorization", `bearer ${authToken}`);
      const workoutId = response.body[0]._id;
      console.log(workoutId);

      await api
        .delete(`/api/workouts/${workoutId}`)
        .set("Authorization", `bearer ${authToken}`)
        .expect(200);

      const newResponse = await api
        .get("/api/workouts")
        .set("Authorization", `bearer ${authToken}`);
      expect(newResponse.body).toHaveLength(1);
    });
  });

  describe("Updating workouts", () => {
    test("successfully updates a workout", async () => {
      const response = await api
        .get("/api/workouts")
        .set("Authorization", `bearer ${authToken}`);
      const workoutId = response.body[0]._id;

      const updatedWorkout = { ...workouts[0], title: "Updated workout" };

      await api
        .patch(`/api/workouts/${workoutId}`)
        .set("Authorization", `bearer ${authToken}`)
        .send(updatedWorkout)
        .expect(200);

      const newResponse = await api
        .get("/api/workouts")
        .set("Authorization", `bearer ${authToken}`);
      const workoutTitles = newResponse.body.map((workout) => workout.title);
      expect(workoutTitles).toContain("Updated workout");
    });
  });

  describe("Getting a single workout", () => {
    test("returns a single workout", async () => {
      const response = await api
        .get("/api/workouts")
        .set("Authorization", `bearer ${authToken}`);
      const workoutId = response.body[0]._id;

      const singleWorkout = await api
        .get(`/api/workouts/${workoutId}`)
        .set("Authorization", `bearer ${authToken}`)
        .expect(200);

      expect(singleWorkout.body.title).toBe("Workout 2023-10-06");
    });
  });
});

afterAll(() => {
  mongoose.connection.close();
});
