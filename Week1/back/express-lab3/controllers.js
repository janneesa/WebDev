const getEndpoint1 = (req, res) => {
  res.send("Hello from endpoint 1");
};

const getEndpoint2 = (req, res) => {
  res.send("Hello from endpoint 2");
};

const getEndpoint3 = (req, res) => {
  res.send("Hello from endpoint 3");
};

const getRoot = (req, res) => {
  res.send("Hello from root");
};

module.exports = {
  getEndpoint1,
  getEndpoint2,
  getEndpoint3,
  getRoot,
};
