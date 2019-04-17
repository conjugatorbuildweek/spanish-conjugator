exports.up = function(knex, Promise) {
    return knex.schema.createTable('target', (tbl) => {
        tbl.integer('student_id').unsigned().references('id').inTable('student_info');
        tbl.integer('target').notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('target');
  };
  