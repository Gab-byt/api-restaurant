import type { Knex } from "knex";

const config: Knex.Config = {
  client: "sqlite3",
  connection: {
    filename: "./src/database/database.db",
  },
  pool: {
    afterCreate: (connection: any, done: any) => {
      connection.run("PRAGMA foreign_keys = ON");
      done();
    },
  },
  useNullAsDefault: true,
  migrations: {
    extension: "ts", // <-- AQUI É O PULO DO GATO
    directory: "./src/database/migrations",
  },
  seeds: {
    extension: "ts", // <-- MESMO PROBLEMA AQUI
    directory: "./src/database/seeds",
  },
};

export default config;
