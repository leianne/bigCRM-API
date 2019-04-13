
exports.up = function(knex, Promise) {
  return knex.schema.createTable('toDos', (tbl) => {
      tbl.increments('toDoID');
      tbl.string('toDo').notNullable();
      tbl.string('notes');
      tbl.integer('userID').unsigned().notNullable();
      tbl.foreign('userID').references('users.userID');
      tbl.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIFExists('toDos');
};
