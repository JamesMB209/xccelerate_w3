
exports.up = function(knex) {
    return knex.schema.createTable("notes", (column) => {
        column.increments();
        column.integer("user_id");
        column.foreign("user_id").references("users.id");
        column.string("note");
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable("notes");
};
