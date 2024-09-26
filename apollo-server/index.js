import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql

type Book {
  title: String
  author: String
}

type Query {
  books: [Book]
}
`;

const resolvers = {
  Query: {
    books: () => books,
  },
};

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(url);
};

startServer();
