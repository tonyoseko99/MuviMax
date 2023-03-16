module.exports = (sequelize, DataTypes) => {
  // define the fields for Movie
  const Movie = sequelize.define(
    "Movie",
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      releaseDate: DataTypes.DATE,
      imageUrl: DataTypes.STRING,
    },
    {}
  );
  
};
