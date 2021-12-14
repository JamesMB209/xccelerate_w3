
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {user_id: 1, note: 'seed note'},
        {user_id: 1, note: 'second seed note for sam'},
        {user_id: 2, note: 'more information and a slightly longer note'},
      ]);
    });
};
