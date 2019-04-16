const faker = require('faker');

const create = (id) => ({
  student_id: id,
  level: faker.random.number({
    'min': 1,
    'max': 7
}),
latin_spanish: faker.random.number({
    'min': 0,
    'max': 1
  })
});

exports.seed = async function(knex, Promise) {
  const student_settings = [];

  for (let i = 1; i < 10; i++) {
    student_settings.push(create(i));
  }

  await knex.raw('TRUNCATE TABLE student_settings RESTART IDENTITY CASCADE');
  await knex('student_settings').insert(student_settings);
};
