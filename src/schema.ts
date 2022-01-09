import { gql } from "apollo-server";

const typeDefs = gql`
type Query {
    getProducts: [Product]!
}

type Product {
    name: String!
    description: String
    unitPrice: String!
    price: Float!,
    imageUrl: String
}
`;

export default typeDefs;
