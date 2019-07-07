
exports.up = function(knex, Promise) {
    return knex.schema.createTable("customers", (tbl) => {
        tbl.increments('customerID');
        tbl.string("first").notNullable();
        tbl.string("last").notNullable();
        tbl.string("address").notNullable();
        tbl.string("birthday").notNullable();
        tbl.string("sex").notNullable();
        tbl.string("email");
        tbl.string("phone");
        tbl.boolean("updates").notNullable();
        tbl.integer('locationID').unsigned().notNullable();
        tbl.foreign('locationID').references('locationID').inTable('users');
        tbl.timestamps(true, true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('customers')
};
