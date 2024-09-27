import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const files = [
  { name: "wall_street_report.txt", size: 200, type: "text/plain" },
  { name: "todo.jpeg", size: 150, type: "image/jpeg" },
  { name: "wu_tang.mp3", size: 1500, type: "audio/mpeg" },
];

const typeDefs = `#graphql

type File {  
  name: String!
  size: Int!
  type: String!
}

type Query {
  files: [File]!
}
`;

const resolvers = {
  Query: {
    files: () => files,
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
