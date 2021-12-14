/**********************************************
 * Notetaking Application Challenge
 * ==================================
 ***********************************************/
// requires
const fs = require("fs");
const path = require("path");
const express = require("express");
const { engine } = require("express-handlebars");
const basicAuth = require("express-basic-auth");
const AuthChallenger = require('./AuthChallenger');
const NoteService = require("./Services/NoteService");
const NoteRouter = require("./Routers/NoteRouter");
const knexConfig = require("./knexfile").development;
const knex = require("knex")(knexConfig);

// Set up Express
const app = express();
const port = 8000;
app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

// Set up classes
const noteService = new NoteService(knex);
const noteRouter = new NoteRouter(noteService);

// AuthChallenger
app.use(basicAuth({
  authorizer: AuthChallenger(knex),
  challenge: true, //Auth is toggled OFF!
  authorizeAsync: true,
  realm: 'My Application'
}));

// Main workings of app
app.get("/", (req, res) => {
  res.render("index");
});

app.use(express.static('public'));
app.use("/api/notes", noteRouter.router());

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
