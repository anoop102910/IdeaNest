import Sequelize from "sequelize";
import pg from "pg";

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
  host: PGHOST,
  dialect: "postgres",
  port: 5432,
  dialectModule: pg,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
    project: ENDPOINT_ID,
  },
  logging: false,
});

if (process.env.NODE_ENV === "development") {
  sequelize
    .sync({ alter: true })
    .then(() => {
      console.log("All models were synchronized successfully.");
    })
    .catch(err => {
      console.error("Error synchronizing models:", err);
    });
}
async function authenticateConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

authenticateConnection();
export default sequelize;
