const { appendFile } = require("fs");
const { GraphQLNonNull, GraphQLList, GraphQLObjectType } = require("graphql")

peopleByID: {
    type: PersonType,
    args: {
        id: { type: GraphQLNonNull(GraphQLID) }
    },
    resolve: (root, args, context, info) => {
        return PersonModel.findById(args.id).exec();
    }
},

peopleByName: {
    type: GraphQLList(PersonType),
    args: {firstName: { type: GraphQLString } },
    resolve: (root, args, context, info) => {
        return PersonModel.find({'firstName':args.firstName}).exec();
    }
}

//add new record in the DB //
mutattion: new GraphQLObjectType({
    name: "Create",
    fields: {
        people: {
            type: PersonType,
            args: {
                firstName: { type:GraphQLString },
                lastName: { type: GraphQLString }
            },
            resolve: (root, args, context, info) => {
                var people = new PersonModel(args);
                return people.save();
            }
        }
    }
})

// Port Details //
appendFile.use("/person", ExpressgraphQL({
    schema,
    graphql: true
    })
);

appendFile.listen(3001, () => {
    console.log("server running at 3001");
});