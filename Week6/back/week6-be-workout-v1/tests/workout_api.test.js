const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const Workout = require("../models/workoutModel");

// Mock data for tests
const initialWorkouts = [
  { title: "test workout 1", reps: 11, load: 101 },
  { title: "test workout 2", reps: 12, load: 102 },
];

// Helper function to fetch workouts from the database
const fetchWorkoutsFromDb = async () => {
  const workouts = await Workout.find({});
  return workouts.map((workout) => workout.toJSON());
};

// Setup and teardown
beforeEach(async () => {
  await Workout.deleteMany({});
  await Workout.insertMany(initialWorkouts);
});

afterAll(() => {
  mongoose.connection.close();
});

describe("Workout API tests", () => {
  describe("Fetching workouts", () => {
    test("returns all workouts in the database", async () => {
      const response = await api.get("/api/workouts").expect(200);
      expect(response.body).toHaveLength(initialWorkouts.length);
    });

    test("a specific workout title is included in the response", async () => {
      const response = await api.get("/api/workouts").expect(200);
      const workoutTitles = response.body.map((workout) => workout.title);
      expect(workoutTitles).toContain("test workout 2");
    });

    test("response is in JSON format", async () => {
      await api
        .get("/api/workouts")
        .expect(200)
        .expect("Content-Type", /application\/json/);
    });
  });

  describe("Adding new workouts", () => {
    test("successfully adds a new workout with valid data", async () => {
      const newWorkout = { title: "Situps", reps: 25, load: 10 };

      await api
        .post("/api/workouts")
        .send(newWorkout)
        .expect(201)
        .expect("Content-Type", /application\/json/);

      const response = await api.get("/api/workouts");
      const workoutTitles = response.body.map((workout) => workout.title);

      expect(response.body).toHaveLength(initialWorkouts.length + 1);
      expect(workoutTitles).toContain("Situps");
    });

    test("does not add a workout without a title", async () => {
      const invalidWorkout = { reps: 23 };

      await api.post("/api/workouts").send(invalidWorkout).expect(400);

      const response = await api.get("/api/workouts");
      expect(response.body).toHaveLength(initialWorkouts.length);
    });
  });

  describe("Deleting workouts", () => {
    test("successfully deletes a workout with a valid ID", async () => {
      const workoutsAtStart = await fetchWorkoutsFromDb();
      const workoutToDelete = workoutsAtStart[0];

      await api.delete(`/api/workouts/${workoutToDelete.id}`).expect(204);

      const workoutsAtEnd = await fetchWorkoutsFromDb();
      expect(workoutsAtEnd).toHaveLength(initialWorkouts.length - 1);

      const workoutTitles = workoutsAtEnd.map((workout) => workout.title);
      expect(workoutTitles).not.toContain(workoutToDelete.title);
    });
  });
});
