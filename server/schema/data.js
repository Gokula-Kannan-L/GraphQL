const UserData = [
    {
        id:1,
        name:"MS Dhoni",
        username:"captaincool",
        age:40,
        nationality:"INDIA",
        friends:[{
                id:4,
                name:"Virat Kohli",
                username:"The King",
                age:34,
                nationality:"INDIA"
            },
            {
                id:3,
                name:"Faf Duplessis",
                username:"faf",
                age:39,
                nationality:"SOUTHAFRICA"
            }
        ]
    },
    {
        id:2,
        name:"Steve Smith",
        username:"thesmudge",
        age:34,
        nationality:"AUSTRALIA",
        friends:[{
            id:3,
            name:"Faf Duplessis",
            username:"faf",
            age:39,
            nationality:"SOUTHAFRICA",
        }]
    },
    {
        id:3,
        name:"Faf Duplessis",
        username:"faf",
        age:39,
        nationality:"SOUTHAFRICA",
        friends:[{
            id:1,
            name:"MS Dhoni",
            username:"captaincool",
            age:40,
            nationality:"INDIA"
        },
        {
            id:4,
            name:"Virat Kohli",
            username:"The King",
            age:34,
            nationality:"INDIA"
        }]
    },
    {
        id:4,
        name:"Virat Kohli",
        username:"The King",
        age:34,
        nationality:"INDIA"
    },
    {
        id:5,
        name:"Cristiano Ronaldo",
        username:"CR7",
        age:42,
        nationality:"PORTUGAL",
        friends:[{
            id:4,
            name:"Virat Kohli",
            username:"The King",
            age:34,
            nationality:"INDIA"
        },]
    },
];

const MovieData = [
    {
        id:143,
        name:"Leo",
        releaseYear:2023
    },
    {
        id:144,
        name:"Mangatha",
        releaseYear:2011
    },
    {
        id:145,
        name:"Sivaji",
        releaseYear:2007
    },
    {
        id:146,
        name:"Dhruva Natchathiram",
        releaseYear:2500
    },
    {
        id:147,
        name:"Kanguva",
        releaseYear:2027
    },

]

module.exports ={ UserData, MovieData};