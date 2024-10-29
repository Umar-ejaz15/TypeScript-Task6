// Task 2: Type Aliases and Union Types
// Create a Type Alias for User Roles:

// Define a type alias UserRole that can be either Admin, Editor, or Viewer.
// Define a User Interface:

// Create a User interface with properties like username, email, and role (of type UserRole).
// Write a function getUserRole that takes a User as an argument and returns a message based on their role.

type UserRole = "Admin" | "Editor" | "Viewer";

interface User {
  username: string;
  email: string;
  role: UserRole;
}
const user: User[] = [
  {
    username: "umar",
    email: "john.doe@example.com",
    role: "Admin",
  },
  {
    username: "ALI",
    email: "jane.smith@example.com",
    role: "Editor",
  },
  {
    username: "Usaid",
    email: "bob.johnson@example.com",
    role: "Viewer",
  },
];

function getUserRole(username: string): void {
  const foundUser = user.find((u) => u.username === username);
  if (foundUser) {
    console.log(`${foundUser.username} is an ${foundUser.role}`);
  } else {
    console.log(`User ${username} not found`);
  }
}

getUserRole("umar");
