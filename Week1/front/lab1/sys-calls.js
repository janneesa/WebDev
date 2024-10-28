const fs = require("fs");
const os = require("os");

fs.readFile("sample.html", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
  } else {
    console.log("File contents:", data);
  }
});

fs.writeFile(
  "output.txt",
  `Platform: ${os.platform()}, Hostname: ${os.hostname()}, Architecture: " + ${os.arch()}`,
  (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log("Data written to output.txt");
    }
  }
);

console.log("Platform: " + os.platform());
console.log("Hostname: " + os.hostname());
console.log("Architecture: " + os.arch());
