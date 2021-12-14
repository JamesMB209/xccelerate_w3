const NoteService = require("../Services/NoteService");
const NoteRouter = require("../Routers/NoteRouter");

const noteService = new NoteService('../Stores/notesTest.json');
const noteRouter = new NoteRouter(noteService);

describe("NoteService Testing", () => {
    beforeEach(() => {
        
    });

    test("testing the list function", () => {

    });

});

