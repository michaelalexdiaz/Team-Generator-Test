
const Intern = require("../lib/Intern");

it("Can get school via getSchool()", () => {
  const obj = 'UTA';
  const e = new Intern('Michael', 404, 'fake@email.com', obj);
  expect(e.getSchool()).toBe(obj);
});

it('Returns (Intern) from getRole()', () => {
  const obj = 'Intern';
  const e = new Intern('Michael', 404, 'fake@email.com', 'UTA');
  expect(e.getRole()).toBe(obj);
});
