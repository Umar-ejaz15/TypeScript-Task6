"use strict";
// Task 2: Type Aliases and Union Types
// Create a Type Alias for User Roles:
const user = [
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
function getUserRole(username) {
    const foundUser = user.find((u) => u.username === username);
    if (foundUser) {
        console.log(`${foundUser.username} is an ${foundUser.role}`);
    }
    else {
        console.log(`User ${username} not found`);
    }
}
getUserRole("umar");
