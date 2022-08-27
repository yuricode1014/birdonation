const path = require("path");
const express = require("express");
const knex = require("./knex");

const PORT = process.env.PORT || 4000;

const setupServer = () => {
  const app = express();
  app.use(express.json());
  app.use(express.static(path.resolve(__dirname, "/build")));

  app.get("/goodlists", (req, res) => {
    return knex
      .select()
      .from("goods")
      .orderBy("created_at", "desc")
      .limit(15)
      .then((data) => {
        res.status(200).send(data);
      });
  });

  app.post("/goodlists", (req, res) => {
    return knex("goods")
      .insert({ good_things: req.body })
      .then(() => {
        res.status(201).send(req.body);
      });
  });

  // app.delete("/goodlists/:id", (req, res) => {
  //   const id = Number(req.params.id);
  //   return knex("goods")
  //     .where("id", id)
  //     .del()
  //     .then(() => res.status(204).send());
  // });

  return app;
};

const server = setupServer();

server.listen(PORT, () => {
  console.log("Server listening on port" + PORT);
});

module.exports = { setupServer };
