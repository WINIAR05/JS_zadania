const express = require("express");
const mysql = require('mysql2');
const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test'
});

function dodaj(obj, tab) {
  let query = 'INSERT INTO ' + tab;
  query += "(imie,nazwisko,plec,data,cokolwiek)";
  query += "VALUES(";
  query += `'${obj.imie}', '${obj.nazwisko}', '${obj.plec}', '${obj.data}', '${obj.cokolwiek}'`;
  query += ")";
  connection.query(query);
}

function aktualizuj(id, obj, tab, warunek) {
  let query = 'UPDATE ' + tab;
  if (warunek) {
    query += ' WHERE id=' + id;
  }
  query += " SET imie='" + obj.imie + "', nazwisko='" + obj.nazwisko + "', plec='" + obj.plec + "', data='" + obj.data + "', cokolwiek='" + obj.cokolwiek + "'";
  connection.query(query);
}

function usun(id, tab) {
  let query = "DELETE FROM " + tab + " WHERE id=" + id;
  connection.query(query);
}

function pobierz(parametr, tab) {
  let query = 'SELECT * FROM ' + tab;
  if (parametr) {
    query += ' ' + parametr;
  }
  connection.query(query, function(err, results, fields) {
    console.log(results);
    console.log(fields);
    return fields;
  });
}

app.get("/", (req, res) => {
  res.send(data());
});

app.listen(8080);
