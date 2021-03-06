export const up = (knex, Promise) =>
  Promise.all([
    knex.schema.createTable(`recipe_categories`, table => {
      table
        .integer(`recipe_id`)
        .references(`recipes.id`)
        .notNullable();
      table
        .integer(`category_id`)
        .references(`categories.id`)
        .notNullable();
    }),
  ]);

export const down = (knex, Promise) =>
  Promise.all([ knex.schema.dropTable(`recipe_categories`) ]);
