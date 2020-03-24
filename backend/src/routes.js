const express = require("express");

const NGOController = require("./controllers/NGOController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post("/sessions/", SessionController.create);

routes.get("/ongs/", NGOController.index);
routes.post("/ongs/", NGOController.create);

routes.get("/profile/", ProfileController.index);
routes.get("/incidents/", IncidentController.index);
routes.post("/incidents/", IncidentController.create);
routes.delete("/incidents/:id/", IncidentController.delete);

module.exports = routes;
