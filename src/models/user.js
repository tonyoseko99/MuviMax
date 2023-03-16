module.exports = (sequelize, DataTypes) => {
  // define the User module
  const User = sequelize.define(
    "User",
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {}
  );

  //   create associations
  User.associate = (models) => {
    // has many ratings and many wishlist items
    User.hasMany(models.Rating, { as: "ratings" });
    User.hasMany(models.Wishlist, { as: "wishlistItems" });
  };

  return User;
};
