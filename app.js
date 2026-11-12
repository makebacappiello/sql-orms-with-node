const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "movies.db",
  logging: false, // disable logging
});
// Movie model
class Movie extends Sequelize.Model {}
Movie.init(
  {
    title: Sequelize.STRING,
  },
  { sequelize }
);
(async () => {
  // Sync 'all' table
  await sequelize.sync({ force: true });

  try {
    // Instance of the Movie class represents a database row
    const movie = await Movie.create({
      title: "Toy Story",
    });
    console.log(movie.toJSON());

    //new enrty
    const movie2 = await Movie.create({
      title: "The Incredibles",
    });
    console.log(movie2.toJSON());

    //newer entry
    const movie3 = await Movie.create({
      title: "The Simpsons",
    });
    console.log(movie3.toJSON());

    //newest entry
    await Movie.create({
      title: "The Patriot",
    });
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
})();
