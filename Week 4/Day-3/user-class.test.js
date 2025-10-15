// user-class.test.js

const { User, Admin } = require("./user-class");

test("User login/logout works", () => {
  const user = new User("Alice", "alice@example.com");
  expect(user.login()).toBe("Alice logged in.");
  expect(user.loggedIn).toBe(true);
  expect(user.logout()).toBe("Alice logged out.");
  expect(user.loggedIn).toBe(false);
});

test("User profile update", () => {
  const user = new User("Bob", "bob@example.com");
  user.updateProfile({ name: "Bobby" });
  expect(user.name).toBe("Bobby");
});

test("Admin delete user", () => {
  const admin = new Admin("Root", "root@sys.com");
  const user = new User("Charlie", "charlie@x.com");
  expect(admin.deleteUser(user)).toBe("Root deleted Charlie");
});
