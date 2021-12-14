const knexConfig = require("../knexfile.js").development;
const knex = require("knex")(knexConfig);
const NoteService = require("../Services/NoteService");
const noteService = new NoteService(knex);

// noteService.list("sam").then(data => console.log(data))

describe("NoteService Testing", () => {

    noteService.knex('notes').del()
        .then(function () {
            // Insert seed entries
            return knex('notes').insert([
                { user_id: 1, note: 'seed note' },
                { user_id: 1, note: 'second seed note for sam' },
                { user_id: 2, note: 'more information and a slightly longer note' },
            ]);
        });

    beforeEach(() => {
    });

    test("testing the list function", () => {

    });

    test("testing the list function", () => {
    });

});