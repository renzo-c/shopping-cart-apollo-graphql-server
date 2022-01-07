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
    imageName: String
}
`;

export default typeDefs;
