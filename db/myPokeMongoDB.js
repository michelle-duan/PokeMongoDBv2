const { MongoClient } = require("mongodb");

function MyDB() {
  const myDB = {};

  const uri = "mongodb://localhost:27017";

  myDB.getPokemon = async () => {
    const client = new MongoClient(uri);

    await client.connect();

    const db = client.db("pokedb"); // access pokemon db
    const pokemon = db.collection("pokemon"); // access pokemon collection
    const query = { };
    return pokemon.find(query).toArray();
  };

  myDB.getPlayer = async (player) => {
    console.log("getting player");
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db("pokedb"); // access pokemon db
    const players = db.collection("players"); // access players collection
    const query = { name: player };
    const result = await players.find(query).toArray(); // wait for query result
    if (result == undefined || result.length == 0){ // if no entry for user
      var newEntry = { name: player };
      players.insertOne(newEntry); // create new entry in db
    }
    return players.find(query).toArray(); // return the players file
  };

  return myDB;
}

module.exports = MyDB();
