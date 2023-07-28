const {gql} = require('apollo-server');

const typeDefs = gql`

    type User{
        id :ID!
        name : String!
        username : String!
        age : Int!
        nationality : Nationality!
        friends:[User]
        favoriteMovies : [Movie]
    }

    type Movie{
        id : ID!
        name : String!
        releaseYear : Int!
    }

    type Query{
        users:UserResult!
        user(id : ID!): User!
        movies:[Movie!]!
        movie(name: String!) : Movie!
    }

    input createUserInput{
        name : String!
        username : String!
        age : Int!
        nationality : Nationality = INDIA
    }

    input updateUserName{
        id : ID!
        newUserName : String!
    }

    type Mutation{
        createUser( input : createUserInput!) : User
        updateUserName(input : updateUserName!) : User
        deleteUser( name : String ! ) : User
    }

    type UsersSuccessfulResult{
        users: [User!]!
    }

    type UsersErrorResult{
        message: String!
    }

    union UserResult = UsersSuccessfulResult | UsersErrorResult

    enum Nationality{
        INDIA
        AUSTRALIA
        SOUTHAFRICA
        PORTUGAL
    }

`

module.exports = {typeDefs};