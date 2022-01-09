import { Sequelize } from "sequelize";
import productSchema from "./schema/product";
import { testConnection } from "./tests";

require("dotenv").config();

const db = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASSWORD!,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // due to pg module 8+ (https://github.com/sequelize/sequelize/issues/12083)
      },
    },
  }
);

testConnection(db);

//Modeling
const Product = db.define("product", productSchema);

db.sync({ force: true }).then(() => {
  Product.bulkCreate([
    {
      name: "Apple, Gala",
      description: "Sold in singles",
      unitPrice: "cents",
      price: 0.79,
      imageURL:
        "https://firebasestorage.googleapis.com/v0/b/shopping-cart-apollo-graphql.appspot.com/o/apple.jpg?alt=media&token=f7e80737-76dc-4a53-9f10-162f322126d7",
    },
    {
      name: "Avocado",
      description: "Pack of 5",
      unitPrice: "dollar",
      price: 2.89,
      imageURL:
        "https://firebasestorage.googleapis.com/v0/b/shopping-cart-apollo-graphql.appspot.com/o/avocado.jpg?alt=media&token=01405952-4629-4491-9429-5274457d9a98",
    },
  ]);
});
