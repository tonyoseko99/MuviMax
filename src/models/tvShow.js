module.exports = (sequelize, DataTypes) => {
  // define the fields for a TvShow
  const TvShow = sequelize.define(
    "TvShow",
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      releaseDate: DataTypes.DATE,
      imageUrl: DataTypes.STRING,
    },
    {}
  );

  //   associations
  TvShow.associate = (models) => {
    // has many ratings
    TvShow.hasMany(models.Rating, { as: "ratings" });
  };

  return TvShow;
};
