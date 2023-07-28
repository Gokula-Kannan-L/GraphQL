const {UserData, MovieData} = require('./data')
const _ = require("lodash");

const resolvers ={
    Query:{

        // USER RESOLVER
        users: (parent, args, context, info) => {
            console.log(context);
            if(UserData){
                return {users: UserData};
            }

            return {message : "There was an Error..."};
        },
        user: (parent, args) => {
            const userId = args.id;
            const user = _.find( UserData, { id : Number(userId) });
            return user;
        },

        // MOVIE RESOLVER
        movies : () => {
            return MovieData;
        },
        movie : (parent, args) => {
            const movieName = args.name;
            const movie = _.find( MovieData, { name : movieName });
            return movie;
        }
    },
    
    User:{
        favoriteMovies: () => {
            return _.filter( MovieData, (movie) =>  movie.releaseYear >2022);
        }
    },

    Mutation:{
        createUser : (parent, args) => {
            const user = args.input;
            const id = (UserData[UserData.length-1].id +1);
            user.id = id;
            UserData.push(user);
            return user;
        },  

        updateUserName : (parent, args) => {
            const {id, newUserName} = args.input;
            let updatedUser;
            
            UserData.forEach ( (user) => {
                if(user.id === Number(id)){
                    user.username = newUserName;
                    updatedUser = user;
                } 
            })

            return updatedUser;
        },

        deleteUser : (parent, args) => {
            const name = args.name;

            _.remove( UserData, (user) => user.name === name);

            return null;
        }
    },

    UserResult:{
        __resolveType(obj){
            if(obj.users){
                return "UsersSuccessfulResult";
            }
            if(obj.message){
                return "UsersErrorResult";
            }

            return null;
        }
    }

};

module.exports = {resolvers};