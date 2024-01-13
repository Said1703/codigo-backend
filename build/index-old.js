"use strict";
const user = {
    name: "Linder",
    lastname: "Hassinger",
    email: "linder@gmail.com",
    password: "112332",
    address: "av mi casa",
};
const user2 = {
    name: "Linder",
    lastname: "Hassinger",
    email: "linder@gmail.com",
    password: "112332",
};
const users = [];
function insertUser(user) {
    users.push(user);
}
function getNameFromUser(user) {
    return `${user.name} ${user.lastname}`;
}
const task = {
    title: "Pagar cuentas",
    date: new Date(),
    status: "in-progress",
};
