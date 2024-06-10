const { makeExecutableSchema } = require('@graphql-tools/schema');
const express  =require('express');
const { graphqlHTTP } = require('express-graphql');
const{loadFilesSync}=require('@graphql-tools/load-files');

const path = require('path');
const app=express();
const port =4000;

// 모든 GraphQL 스키마 파일들을 로드
const loadedFiles=loadFilesSync("**/*",{
    extensions:['graphql']
})

// 모든 resolver 파일들을 로드
const loadedResolvers=loadFilesSync(path.join(__dirname, "**/*.resolvers.js"))

// 스키마를 생성
const schema=makeExecutableSchema({
    typeDefs:loadedFiles,
    resolvers:loadedResolvers
})

// GraphQL HTTP 서버 미들웨어를 설정
app.use('/graphql', graphqlHTTP({
    schema:schema,
    graphiql:true,
}))

app.listen(port,()=>{
    console.log(`Running a GraphQL API serer at http://localhost:${port}/graphql`);
})