const { power } = require("../power.js");

test("[1,2,3,4] multiplied by itself is [1,4,9,12]", () => {
	expect(power([1, 2, 3, 4])).toStrictEqual([1, 4, 9, 16]);
});
test("[] multiplied by itself is []", () => {
	expect(power([])).toStrictEqual([]);
});
