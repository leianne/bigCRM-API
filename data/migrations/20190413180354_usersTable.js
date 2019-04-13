
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (tbl) => {
    tbl.increments('userID');
    tbl.string('email').notNullable();
    tbl.string('password').notNullable();
    tbl.string('firstname').notNullable();
    tbl.string('lastname').notNullable();
    tbl.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
