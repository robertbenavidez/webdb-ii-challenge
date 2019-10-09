
exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
      tbl.increments();
      tbl.string('make', 28)
        .unique()
        .notNullable();
      tbl.string('model', 28)
        .notNullable();
      tbl.integer('year')
        .notNullable()
      tbl.integer('mileage')
        .notNullable()
  })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('cars')
};
