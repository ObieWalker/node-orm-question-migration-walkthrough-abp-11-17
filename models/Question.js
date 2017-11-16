'use strict';

const db = require("../config/db")

class Question{

  static CreateTable(){
    return new Promise(function(){
      const sql =
      `CREATE TABLE questions (
        id INTEGER PRIMARY KEY,
        content TEXT
      )`

      db.run(sql, function(){
        console.log('Question table created!!')
        resolve('success')

    })

    })
 }
}


module.exports = Question;
