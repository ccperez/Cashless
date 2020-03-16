exports.up = (knex) => {
  return knex.schema.createTable('users_load_wallet', (table) => {
    table.increments();
    table.string('phone').notNullable();
    table.decimal('amount', 10, 2).defaultTo(0);
    table.string('type').notNullable();
    table.timestamps();
  });
};

exports.down = (knex) => knex.schema.dropTable('users_load_wallet');
