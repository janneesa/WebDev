const jwt = require("jsonwebtoken");

let token = "";

function createJWT() {
  const payload = {
    userID: 123,
    username: "exampleUser",
  };
  const secretKey = "yourSecretKey";

  token = jwt.sign(payload, secretKey);

  console.log("Token: ", token);
}

createJWT();

function verifyJWT(token) {
  const secretKey = "yourSecretKey";

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.log("Error: ", err);
      return;
    } else {
      console.log("Decoded: ", decoded);
    }
  });
}

verifyJWT(token);

function decodeJWT(token) {
  const decoded = jwt.decode(token);

  console.log("Decoded: ", decoded);
}

decodeJWT(token);
