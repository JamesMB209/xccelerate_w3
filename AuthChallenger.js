const AuthChallenger = (knex) => {
  return function (username, password, cb) {
    let query = knex
      .select("id")
      .from("users")
      .where("username", username)
      .where("password", password);
     
      query.then((rows) => {
        if (rows.length === 1) {
          cb(null, true);
        } else {
          cb(null, false);
        }
      })
      .catch((err) => console.log(err));
  }
}

module.exports = AuthChallenger;
