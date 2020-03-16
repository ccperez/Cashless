exports.up = (knex) => {
  return knex.schema.createTable('users_load_detail', (table) => {
    table.increments();
    table.string('phone').notNullable();
    table.decimal('amount', 10, 2).defaultTo(0);
    table.string('type').notNullable();
    table.string('source').notNullable();
    table.string('description');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = (knex) => knex.schema.dropTable('users_load_detail');
