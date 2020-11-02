const generateUniqueId = require("../../controllers/utils/generateUniqueId");

describe("Generate Unique ID", () => {
  it("should generate a unique id", () => {
    const id = generateUniqueId();
    expect(id).toHaveLength(8);
  });
});
