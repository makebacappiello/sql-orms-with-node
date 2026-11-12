const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "movies.db",
});
// Movie model
class Movie extends Sequelize.Model {}
Movie.init({
  title: Sequelize.STRING,
}); //defines a new table in the database where sequelize will look for information in the Movies table.

// async IIFE--- immediately invoked function expression--in JavaScript is a function that is called right after it is created. We wrap the function in parentheses to make sure it's treated as an expression. After the function, we add another set of parentheses `()` to run it immediately.
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to the database successful!");
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
})();
