const users = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Priya" },
    { id: 1, name: "Rahul" },
    { id: 3, name: "Amit" },
    { id: 2, name: "Priya" }
];
const uniqueUsers = users.filter((user, index) => {
    return users.findIndex(u => u.id === user.id) === index;
});

console.log(uniqueUsers);