/**********************************************
 * Service for the NoteApplication
 * ==================================
 * 
 * This is writen by changing the week 2 github assigment, I have not modified the front end so have extra code 
 * to extract the real database id of the "note" from the order "ID" returned by the front end. * 
 * 
 ***********************************************/

class NoteService {
  constructor(knex) {
    this.knex = knex;
  }

  list(user) {
    return this.knex("notes")
      .select("notes.id", "notes.note")
      .innerJoin("users", "notes.user_id", "users.id")
      .where("users.username", user)
      .orderBy("id", "asc")
      .then((rows) => {
        return rows.map((row) => (row.note));
      })
  }

  add(note, user) {
    return this.knex("users")
      .select("id")
      .where("users.username", user)
      .then((rows) => {
        if (rows.length === 1) {
          return this.knex("notes")
            .insert({
              user_id: rows[0].id,
              note: note
            })
        }
      });
  }

  //written with async/await for fun, it's then reverts to returning a promise so it can still work with the NoteRouter.js promise chain.
  async update(index, note, user) {
    try {
      let noteId = await this.knex("notes")
        .innerJoin("users", "notes.user_id", "users.id")
        .select("notes.id")
        .where("users.username", user)
        .orderBy("notes.id", "asc")
        .offset(index)
        .limit("1");
    } catch (err) {
      console.log(`theres some error but carry on all the same: ${err}`);
    }

    return this.knex("notes")
      .update({ note: note })
      .where("notes.id", noteId[0].id)
  }

  remove(index, user) {
    return this.knex("notes") //could abstract this code
      .innerJoin("users", "notes.user_id", "users.id")
      .select("notes.id")
      .where("users.username", user)
      .orderBy("notes.id", "asc")
      .offset(index)
      .limit("1")
      .then((noteId) => {
        return this.knex("notes")
          .where("notes.id", noteId[0].id)
          .del();
      });
  }
}

module.exports = NoteService;
