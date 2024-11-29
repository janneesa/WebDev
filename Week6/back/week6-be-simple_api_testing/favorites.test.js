import { request, expect } from "./config.js";

describe("Favorites API", function () {
  describe("POST /favorites", function () {
    it("should require authentication", async function () {
      const response = await request.post("/favorites").send({
        airport_id: "YBR",
        note: "Going to Canada",
      });

      expect(response.status).to.eql(401);
    });

    describe("when authenticated", function () {
      const authToken = "Bearer token=5XwHCKAW5TNWHPzGXyLBeHCf";

      it("should allow a user to get their favorite airports", async function () {
        const response = await request
          .get("/favorites")
          .set("Authorization", authToken);

        expect(response.status).to.eql(200);
      });

      it("should allow a user to save a favorite airport", async function () {
        const response = await request
          .post("/favorites")
          .set("Authorization", authToken)
          .send({
            airport_id: "YBR",
            note: "Going to Canada",
          });

        expect(response.status).to.eql(201);
        expect(response.body).to.have.property("id");
        expect(response.body.airport_id).to.eql("YBR");
        expect(response.body.note).to.eql("Going to Canada");
      });

      it("should allow a user to delete a favorite airport", async function () {
        // First, save a favorite airport
        const postResponse = await request
          .post("/favorites")
          .set("Authorization", authToken)
          .send({
            airport_id: "YBR",
            note: "Going to Canada",
          });

        expect(postResponse.status).to.eql(201);
        const favoriteId = postResponse.body.id;

        // Then, delete the favorite airport
        const deleteResponse = await request
          .delete(`/favorites/${favoriteId}`)
          .set("Authorization", authToken);

        expect(deleteResponse.status).to.eql(204);
      });
    });
  });
});
