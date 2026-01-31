const mysql = require("mysql2");
const { faker } = require("@faker-js/faker");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

const generateTask = () => ({
  title: faker.hacker.phrase(),
  description: faker.lorem.sentence(),
  status: faker.helpers.arrayElement(["Pending", "Completed"]),
  priority: faker.helpers.arrayElement(["High", "Medium", "Low"]),
});

connection.connect();

for (let i = 0; i < 5; i++) {
  const task = generateTask();
  connection.query(
    "INSERT INTO tasks (title, description, status, priority) VALUES (?, ?, ?, ?)",
    [task.title, task.description, task.status, task.priority]
  );
}

console.log("✅ Fake tasks inserted");
connection.end();
