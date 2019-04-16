const faker = require('faker');

const create = (id) => ({
  student_id: id,
  target: faker.random.number({
    'min': 1,
    'max': 250
}),
});

exports.seed = async function(knex, Promise) {
  const target = [];

  for (let i = 1; i < 10; i++) {
    target.push(create(i));
  }

  await knex.raw('TRUNCATE TABLE target RESTART IDENTITY CASCADE');
  await knex('target').insert(target);
};