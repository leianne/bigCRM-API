
exports.up = function(knex, Promise) {
    return knex.schema.createTable('usersInfo', (tbl) => {
        tbl.increments('userInfoID');
        tbl.string('firstname').notNullable();
        tbl.string('lastname').notNullable();
        tbl.string('locationID').notNullable();
        tbl.integer('userID').unsigned().notNullable();
        tbl.foreign('userID').references('userID').inTable('users')
        tbl.timestamps(true, true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('usersInfo');
};
