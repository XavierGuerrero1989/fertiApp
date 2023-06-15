import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("medicamentos.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS medicamentos (id INTEGER PRIMARY KEY NOT NULL, medicamento TEXT NOT NULL, dosis NUMBER NOT NULL, date TEXT NOT NULL, time TEXT NOT NULL)",
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};

export const insertMedicamento = (medicamento, dosis, date, time) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO medicamentos (medicamento, dosis, date, time) VALUES (?,?,?,?)",
        [medicamento, dosis, date, time],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};

export const selectMedicamentos = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM medicamentos",
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};