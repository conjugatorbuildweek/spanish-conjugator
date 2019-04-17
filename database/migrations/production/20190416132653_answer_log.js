exports.up = function(knex, Promise) {
    return knex.schema.createTable('answer_log', (tbl) => {
        tbl.increments();
        tbl.integer('student_id').references('id').inTable('student_info');
        tbl.timestamp('created_at').defaultTo(knex.fn.now())
        tbl.timestamp('updated_at').defaultTo(knex.fn.now())
        tbl.string('verb_infinitive', 128).notNullable();
        tbl.boolean('answer').notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('answer_log');
  };