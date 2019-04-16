const faker = require('faker');

const create = () => ({
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  email: faker.internet.email()
});

exports.seed = async function(knex, Promise) {
  const students = [];

  for (let i = 1; i < 10; i++) {
    students.push(create(i));
  }

  await knex.raw('TRUNCATE TABLE student_info RESTART IDENTITY CASCADE');
  await knex('student_info').insert(students);
};
