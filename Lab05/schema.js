const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Movie {
    id: String
    name: String
    director_name: String
    production_house: String
    release_date: String
    rating: Float
  }

  type Query {
    getAllMovies: [Movie]
    getMovieById(id: String!): Movie
  }

  type Mutation {
    addMovie(
      name: String!
      director_name: String!
      production_house: String!
      release_date: String!
      rating: Float!
    ): Movie

    updateMovie(
      id: String!
      name: String
      director_name: String
      production_house: String
      release_date: String
      rating: Float
    ): Movie

    deleteMovie(id: String!): Movie
  }
`;

module.exports = typeDefs;
