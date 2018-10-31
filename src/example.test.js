const axios = require("axios");

jest.mock("axios");

test("mocking", () => {
  console.log("in test", Object.keys(axios));
});
