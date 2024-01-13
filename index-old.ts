// interface
interface User {
  name: string;
  lastname: string;
  email: string;
  password: string;
  address?: string;
}

const user: User = {
  name: "Linder",
  lastname: "Hassinger",
  email: "linder@gmail.com",
  password: "112332",
  address: "av mi casa",
};

const user2: User = {
  name: "Linder",
  lastname: "Hassinger",
  email: "linder@gmail.com",
  password: "112332",
};

const users : User[] = [];

function insertUser (user:User) {
    users.push(user);
}

function getNameFromUser(user:User): string {
    return `${user.name} ${user.lastname}`;
}

type Status = "created"| "on-hold"|"in-progress"|"done";

interface Task {
    title: String;
    date: Date;
    status: Status;
}

const task:Task = {
    title: "Pagar cuentas",
    date: new Date(),
    status: "in-progress",
}