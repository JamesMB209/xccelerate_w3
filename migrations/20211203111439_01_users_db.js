
exports.up = function(knex) {
  return knex.schema.createTable("users", (column) => {
      column.increments().unique();
      column.string("username");
      column.string("password");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("users");
};
