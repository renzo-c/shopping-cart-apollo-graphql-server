import { ApolloServer } from "apollo-server";
import typeDefs from "./schema";

const PORT = process.env.PORT || 4000;

const myMocks = {
  Product: () => ({
      name: () => "Apple, Gala",
      description: () => "Sold in singles",
      unitPrice: () => "cents",
      price: () => 0.79,
      imageUrl: () => "https://firebasestorage.googleapis.com/v0/b/shopping-cart-apollo-graphql.appspot.com/o/apple.jpg?alt=media&token=f7e80737-76dc-4a53-9f10-162f322126d7",
  })
};

const server = new ApolloServer({ typeDefs, mocks: myMocks });

server.listen().then(() => {
  console.log(`Server is running at https://localhost:${PORT}`);
});
