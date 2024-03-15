const filterList = require("../3.10.24/index");

test("filterList is filtering strings?", () => {
    expect(filterList(["a", 1])).toBe([1])
});
