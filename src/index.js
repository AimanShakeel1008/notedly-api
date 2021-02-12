const express=require("express");
const {ApolloServer,gql}=require("apollo-server-express");

const port=process.env.PORT || 4000;


let notes=[{id:'1',content:'This is a note.',author:'Aiman'},
            {id:'2',content:'This is also a note.',author:'Aman'},
            {id:'3',content:'This is a note too.',author:'Amaan'}]


const typeDefs=gql `
    type Note{
        id:ID!
        content:String!
        author:String!
    }
    type Query{
        hello:String!
        notes:[Note]!
        note(id:ID!):Note!
    }
`;

const resolvers={
    Query:{
        hello:()=> `Hello World!!!!!!`,
        notes:()=>notes,
        note:(parent,args)=>{
            return notes.find(note=>note.id===args.id);
        }
    }
}

const app=express();

const server=new ApolloServer({typeDefs,resolvers});

server.applyMiddleware({app,path:'/api'});

app.get('/',(req,res)=>res.send("Hello World!!!!!!!!!!!!!!"));

app.listen(port,()=>{
    console.log(`server running at https://localhost:${port}${server.graphqlPath}`);
});
