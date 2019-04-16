exports.up = function(knex, Promise) {
    return knex.schema.createTable('student_settings', (tbl) => {
        tbl.integer('student_id').unsigned().references('id').inTable('student_info');
        tbl.integer('level').notNullable();
        tbl.boolean('spanish_type').notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('student_settings');
  };
  