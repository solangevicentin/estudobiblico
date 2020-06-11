// yarn add pg

const Pool = require('pg').Pool;

//1 - Abrir a conexão
//2 - Executar o comando SQL (query, insert)
//3 - Fechar a conexão

const pool = new Pool ({
    user: 'anyrymemwulqkv',
    password: '0908adce7b246e9d8a0567ec05292b53fdc5ff7024479ef3f9c29ae0967d93b3',
    host: 'ec2-54-86-170-8.compute-1.amazonaws.com',
    database:'d9ldnpgnfiet0g',
    port: 5432,
    ssl: {rejectUnauthorized: false }
})

//const sql = `
 // CREATE TABLE IF NOT EXISTS livro
 //  (
 //       id serial primary key,
 //     livros varchar (200),
 //      capitulo int ,
 //       versiculo int,
  //      lido boolean
 //   )

 //`;


 //pool.query(sql, function(error, result) {
//    if(error)
 //        throw error
   //     
   // console.log ('Tabela criada com sucesso!');    

 //});

//INSERT
//const sql_insert = `
       // INSERT INTO livro (livros,capitulo,versiculo,lido) VALUES ('Exodo','16','32', false)
//`;

 //pool.query(sql_insert, function(error, result) {
  // if(error)
   //    throw error;

   //console.log(result.rowCount);
//})

//SELECT
 //const sql_select = `SELECT * FROM livro`;

//pool.query(sql_select, function(error, result) {
   // if(error)
       // throw error;

    //console.log(result.rows);
// })