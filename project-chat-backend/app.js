// Ian //

//creating variables and specifying paths//
const Express = require("express");
const ExpressGraphQL = require("express-graphql");
const mongoose = require("mongoose");
const {
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLType,
    GraphQLSchema,
    GraphQLNonNull,GraphQLObjectType
} = require("graphql");

var app = Express();
var cors = require("cors");

app.use(cors());

// connection to MongoDB //
mongoose
    .connect("...enter mongo connection link...", {
        auth: {
            user:"...enter username...",
            password: "...enter password..."
        }
    })

    .then(() => console.log("connected to database..."))
    .catch(err => console.error(err));

    // Creating Person Model with name fields //
    const PersonModel = mongoose.model("person",{
        firstName: String,
        lastName: String
    });

    // defining model property types //
    const PersonType = new GraphQLObjectType({
        name:"Person",
        fields: {
            id:{type:GraphQLID },
            firstName: { type:GraphQLID },
            lastName: { type: GraphQLString }
        }
    });

