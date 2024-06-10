const { makeExecutableSchema } = require('@graphql-tools/schema');
const express  =require('express');
const { graphqlHTTP } = require('express-graphql');
const{loadFilesSync}=require('@graphql-tools/load-files');

const path = require('path');
const app=express();
const port =4000;

const loadedFiles=loadFilesSync("**/*",{
    extensions:['graphql']
})


const loadedResolvers=loadFilesSync(path.join(__dirname, "**/*.resolvers.js"))

const schema=makeExecutableSchema({
    typeDefs:loadedFiles,
    resolvers:loadedResolvers
})

app.use('/graphql', graphqlHTTP({
    schema:schema,
    graphiql:true,
}))

app.listen(port,()=>{
    console.log(`Running a GraphQL API serer at http://localhost:${port}/graphql`);
})