const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const app = express()



const mongoose = require("mongoose");
const uri = "mongodb+srv://alainpogi:alainpogi@graphqlbooks-dmdzt.mongodb.net/test?retryWrites=true&w=majority";

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

mongoose
 .connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true })
 .then(() => console.log("Connected to MongoDB Atlas"))
 .catch(err => console.log("Error: ", err.message));

 

app.listen(4000, () => {
    console.log('Listening for port 3000')
})