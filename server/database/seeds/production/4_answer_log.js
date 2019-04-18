exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('answer_log').del()
  .then(function () {
    // Inserts seed entries
    return knex('answer_log').insert([
      {
        student_id: 1,
        verb_infinitive: 'hablar',
        answer: false,
      },
      {
        student_id: 1,
        verb_infinitive: 'decir',
        answer: true,
      },
      {
        student_id: 1,
        verb_infinitive: 'ser',
        answer: true,
      },
    ]);
  });
};