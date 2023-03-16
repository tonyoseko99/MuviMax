module.exports = (sequelize, DataTypes) => {
  // define the Rating model
  const Rating = sequelize.define(
    "Rating",
    {
      rating: DataTypes.INTEGER,
      review: DataTypes.TEXT,
    },
    {}
  );

  //   create associations
  Rating.associate = (models) => {
    // belongs to a user and a movie or tv show
    Rating.belongsTo(models.User, { foreignKey: "userId" });
    Rating.belongsTo(models.Movie, { foreignKey: "movieId" });
    Rating.belongsTo(models.TvShow, { foreignKey: "tvShowId" });
  };

  return Rating;
};
