
const Engineer = require("../lib/Engineer");

it('Receives a Github username', () => {
  const obj = "michaelalexdiaz";
  const e = new Engineer('Michael', 404, 'fake@email.com', obj);
  expect(e.getGithub()).toBe(obj);
});

it('Returns (Engineer) from getRole()', () => {
  const obj = 'Engineer';
  const e = new Engineer("Foo", 1, 'fake@email.com', 'michaelalexdiaz');
  expect(e.getRole()).toBe(obj);
});
