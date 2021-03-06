import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import graphqlHTTP from "express-graphql";
import keys from "./config/keys";
import schema from './graphql/';
// import { checkAuth } from "./utils/middleware";

export const app = express();

// Config
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan(`dev`));
app.use(require(`cors`)());

require(`./auth/passport`);
require(`./auth/routes`)(app);

app.get(`/`, (req, res) => {
  res.redirect(`https://chingu-voyage4.github.io/Bears-Team-16`);
});

app.use(
  `/graphql`,
  // checkAuth,
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === `development`,
  }),
);

app.listen(keys.PORT, () =>
  console.log(`There will be ${process.env.NODE_ENV} recipes on port ${keys.PORT}.`));
