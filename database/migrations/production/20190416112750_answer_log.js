exports.up = function(knex, Promise) {
    return knex.schema.createTable('answer_log', tbl => {
        tbl.increments('id').primary()
        tbl.integer('student_id').unsigned().references('id').inTable('student_info');
        tbl.timestamp('created_at', { useTz: true });
        tbl.string('verb_infinitive', 128).notNullable();
        tbl.boolean('answer').notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('answer_log');
  };
  