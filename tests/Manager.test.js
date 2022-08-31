
const Manager = require("../lib/Manager");

it("Can get office number via getOffice()", () => {
  const obj = 42;
  const e = new Manager('Michael', 404, 'fake@email.com', obj);
  expect(e.getOfficeNumber()).toBe(obj);
});

it('Returns (Manager) from getRole()', () => {
  const testValue = "Manager";
  const e = new Manager('Michael', 404, 'fake@email.com', 42);
  expect(e.getRole()).toBe(testValue);
});
