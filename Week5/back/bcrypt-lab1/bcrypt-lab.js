const bcrypt = require("bcrypt");

async function hashPassword() {
  const password = "mySecurePassword";

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    console.log("password: ", password);
    console.log("salt: ", salt);
    console.log("hashed password", hashedPassword);
  } catch (error) {
    log.error("Error: ", error);
  }
}

//hashPassword();

// Compare password
async function comparePassword() {
  const inputPassword = "mySecurePassword";
  const hashedPassword = "yourStoredHashedPassword";

  try {
    const isMatch = await bcrypt.compare(inputPassword, hashedPassword);

    if (isMatch) {
      console.log("Password matched");
    } else {
      console.log("Password not matched");
    }
  } catch (error) {
    console.error("Error: ", error);
  }
}

//comparePassword();

// Synchronous way
function hashPasswordSync() {
  const password = "mySecurePassword";

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  console.log("password: ", password);
  console.log("salt: ", salt);
  console.log("hashed password", hashedPassword);
}

hashPasswordSync();
