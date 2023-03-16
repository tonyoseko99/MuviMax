module.exports = (sequelize, DataTypes) => {
  // define the fields for a Wishlist model
  const Wishlist = sequelize.define("Wishlist", {});

  //   associations
  Wishlist.associate = (models) => {
    // belongs to a user and a movie or tv show
    Wishlist.belongsTo(models.User, { foreignKey: "userId" });
    Wishlist.belongsTo(models.Movie, { foreignKey: "movieId" });
    Wishlist.belongsTo(models.TvShow, { foreignKey: "tvShowId" });
  };

  return Wishlist;
};
