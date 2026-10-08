const users = [
    { id: 101, name: "Rahul" },
    { id: 102, name: "Priya" },
    { id: 103, name: "Amit" }
];

function findUserById(users, id) {
    return users.find(user => user.id === id);
}

console.log(findUserById(users, 102));
console.log(findUserById(users, 105));