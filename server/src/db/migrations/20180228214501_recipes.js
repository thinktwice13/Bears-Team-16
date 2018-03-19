export const up = (knex, Promise) => Promise.all([
  knex.schema.createTable(`recipes`, table => {
    table.increments(`id`).primary();
    table
      .integer(`author_id`)
      .references(`users.id`)
      .notNullable();
    table.string(`title`).notNullable();
    table.text(`description`).notNullable();
    table.text(`instructions`).notNullable();
    table.integer(`portions`).notNullable();
    table.integer(`prep_time`);
    table.timestamps();
  }),
]);

export const down = (knex, Promise) => Promise.all([ knex.schema.dropTable(`recipes`) ]);
