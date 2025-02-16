const Movie = require('./models/Movie');

const resolvers = {
  Query: {
    getAllMovies: async () => {
      try {
        return await Movie.find();
      } catch (error) {
        throw new Error("Failed to fetch movies.");
      }
    },

    getMovieById: async (parent, args) => {
      try {
        return await Movie.findOne({ id: args.id }); 
      } catch (error) {
        throw new Error("Failed to fetch movie by ID.");
      }
    }
  },

  Mutation: {
    addMovie: async (parent, args) => {
      try {
        const newMovie = new Movie({
          name: args.name,
          director_name: args.director_name,
          production_house: args.production_house,
          release_date: args.release_date,
          rating: args.rating
        });
        await newMovie.save(); 
        return newMovie;
      } catch (error) {
        throw new Error("Failed to add movie.");
      }
    },

    updateMovie: async (parent, args) => {
      try {
        const updatedMovie = await Movie.findOneAndUpdate(
          { id: args.id }, 
          {
            name: args.name || undefined,
            director_name: args.director_name || undefined,
            production_house: args.production_house || undefined,
            release_date: args.release_date || undefined,
            rating: args.rating || undefined
          },
          { new: true }
        );
        return updatedMovie;
      } catch (error) {
        throw new Error("Failed to update movie.");
      }
    },

    deleteMovie: async (parent, args) => {
      try {
        const deletedMovie = await Movie.findOneAndDelete({ id: args.id }); 
        return deletedMovie;
      } catch (error) {
        throw new Error("Failed to delete movie.");
      }
    }
  }
};

module.exports = resolvers;
