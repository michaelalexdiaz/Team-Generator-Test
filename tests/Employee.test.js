const Employee = require('../lib/Employee.js');

  it('Receives a name from getName()', () => {
    const obj = 'Michael';
    const e = new Employee(obj);
    expect(e.getName()).toBe(obj);
  });
  
  it('Receives an ID from getId()', () => {
    const obj = 404;
    const e = new Employee('Michael', obj);
    expect(e.getId()).toBe(obj);
  });
  
  it('Receives an Email from getEmail()', () => {
    const obj = 'fake@email.com';
    const e = new Employee('Michael', 404, obj);
    expect(e.getEmail()).toBe(obj);
  });
  
  it('Returns (Employee) from getRole()', () => {
    const obj = "Employee";
    const e = new Employee('Michael', 404, 'fake@email.com');
    expect(e.getRole()).toBe(obj);
  });