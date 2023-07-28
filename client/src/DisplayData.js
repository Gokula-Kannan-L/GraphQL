import React, { useState } from "react";
import {useQuery, gql, useLazyQuery, useMutation} from '@apollo/client';

const GET_ALL_USERS = gql`
    query GetAllUsers{
        users{
            name
            username
            age
            nationality
        }
    }
`;

const GET_ALL_MOVIES = gql`
    query GetAllMovies{
        movies{
            name
        }
    }
`;

const GET_MOVIE_BY_NAME = gql`
    query GetMovie($name : String!){
        movie(name : $name){
            name
            releaseYear
        }
    }
`;

const GET_USER_BY_ID = gql`
    query GetUser($id : ID!){
        user(id : $id){
            name
            age
        }
    }
`;

const CREATE_USER = gql`
    mutation CreateUser( $input : createUserInput!){
        createUser( input : $input){
            name
            id
        }
    }
`;

const DELETE_USER = gql`
    mutation DeleteUser( $name : String!){
        deleteUser( name : $name){
            name
        }
    }
`;


export default function DisplayData(){

    const [searchMovie, setSearchMovie] = useState("");
    const [searchId, setSearchId] = useState(0);

    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [age, setAge] = useState(0);
    const [nationality, setNationality] = useState("");

    const [deleteName, setDeleteName] = useState("");

    const {data, loading, refetch} = useQuery(GET_ALL_USERS);
    const { data: movieData} = useQuery(GET_ALL_MOVIES);

    const [ fetchMovie, {data: searchedMovie, error }] = useLazyQuery(GET_MOVIE_BY_NAME);
    const [ fetchUser, {data: searchedUser} ] = useLazyQuery(GET_USER_BY_ID);

    const [createUser] = useMutation(CREATE_USER);
    const [deleteUser] = useMutation(DELETE_USER);

    if(error){
        console.log(error);
    }
    if(loading){
        return(
            <h2>Loading....</h2>
        )
    }

    return(
        <div className="display">
                
                <h1>Create User</h1>
                <div className="createUser">
                    <input type="text" placeholder="Enter Name..." onChange={ e => setName(e.target.value)}/>
                    <input type="text" placeholder="Enter Username..." onChange={ e => setUserName(e.target.value)}/>
                    <input type="number" placeholder="Enter Age..." onChange={ e => setAge(e.target.value)}/>
                    <input type="text" placeholder="Enter Nationality..." onChange={ e => setNationality(e.target.value.toUpperCase())}/>
                    <button onClick={ () => { 
                        createUser({
                            variables:{ 
                                input:{ name, username:userName, age:Number(age), nationality}
                            }
                        }); 
                        refetch();
                    }}>
                        Create User
                    </button>
                </div>

                <h1>Delete User</h1>
                <div>
                    <input type="text" placeholder="Enter a name..." onChange={ e => setDeleteName(e.target.value)}/>
                    <button onClick={ () => {
                        deleteUser({
                            variables:{
                                name:deleteName
                            }
                        });
                        refetch();
                    }}>
                        Delete User
                    </button>
                </div>
                <h1>Users List</h1>
                {
                    data && data.users.map( (user) => { 
                        return (
                            <div className="user" >
                                <h3>{user.name}</h3>
                                <p>{user.username}</p>
                                <p>{user.age}</p>
                                <p>{user.nationality}</p>
                            </div>
                    )})
                }

                <h1>Movie List</h1>
                {
                    movieData && movieData.movies.map( (movie) => { 
                        return (
                            <div className="user">
                                <h3>{movie.name}</h3>
                            </div>
                    )})
                }

                <h1>Search Movies</h1>
                <input type="text" placeholder="Enter a Moviename..." onChange={ e => setSearchMovie(e.target.value)}/>
                <button 
                    onClick={ () => {
                        fetchMovie({
                            variables:{
                                name:searchMovie,
                            },
                        }); 
                    }}
                >
                    Get Movie Details
                </button>
                {
                    searchedMovie && (
                        <div>
                            <p>Movie Name : {searchedMovie.movie.name}</p>
                            <p>Relaese Year : {searchedMovie.movie.releaseYear}</p>
                        </div>
                    )
                }

                <h1>Search User</h1>
                <input type="text" placeholder="Enter a UserId..." onChange={ e => setSearchId(e.target.value)}/>
                <button 
                    onClick={ () => {
                        fetchUser({
                            variables:{
                                id:searchId,
                            },
                        }); 
                    }}
                >
                    Get User Details
                </button>
                {
                    searchedUser && (
                        <div>
                            <p>Name : {searchedUser.user.name}</p>
                            <p>Age : {searchedUser.user.age}</p>
                        </div>
                    )
                }
        </div>
    );
}