const express = require('express');
const Pool = require('pg').Pool;
const cors = require('cors');


const pool = new Pool ({
    user: 'anyrymemwulqkv',
    password: '0908adce7b246e9d8a0567ec05292b53fdc5ff7024479ef3f9c29ae0967d93b3',
    host: 'ec2-54-86-170-8.compute-1.amazonaws.com',
    database:'d9ldnpgnfiet0g',
    port: 5432,
    ssl: {rejectUnauthorized: false }
})


const server = express();

server.use(cors());

server.use(express.json());


//GET
 
server.get('/livro', async function(request, response) {
   result = await pool.query('SELECT * FROM livro');

   return response.json(result.rows);
})

server.get('/livro/search', async function(request, response) {
    const livros = request.query.livros;
    const sql = `SELECT * FROM livro WHERE livros ILIKE $1`;
    const result = await pool.query(sql, ["%" +  livro + "%"]);
    return response.json(result.rows);
})

server.get('/livro/:id', async function(request, response) {
    const id = request.params.id;
    const sql = `SELECT * FROM livro WHERE id = $1`
    const result = await pool.query(sql, [id]);
    return response.json(result.rows);
})

//POST
server.post('/livro', async function(request, response) {
    const livros = request.body.livros;
    const capitulo = request.body.capitulo;
    const versiculo = request.body.versiculo;

    const sql= `INSERT INTO livro (livros,capitulo,versiculo,lido) VALUES ($1, $2, $3, $4)`;
    await pool.query(sql, [livros, capitulo,versiculo, false]);
    return response.status(204).send();
})
 
//DELETE
server.delete('/livro/:id', async function(request, response) {
    const id = request.params.id;
    const sql = `DELETE FROM livro WHERE id = $1`;
    await pool.query(sql, [id]);
    return response.status(204).send();
})
//UPDATE
server.put('/livro/:id', async function(request, response) {
    const id = request.params.id;
    const { livros, capitulo, versiculo, lido } = request.body;
    const sql = `UPDATE livro SET livros = $1, capitulo = $2, versiculo = $3, lido = $4 WHERE id = $5`;
    await pool.query(sql, [livros, capitulo, versiculo, lido, id]);
    return response.status(204).send();
})

//UPDATE DO lido
server.patch('/livro/:id/lido', async function(request, response) {
    const id = request.params.id;
    const sql = `UPDATE livro SET lido = true WHERE id = $1`;
    await pool.query(sql, [id]);
    return response.status(204).send();
})

server.patch('/livro/:id/naolido', async function(request, response) {
    const id = request.params.id;
    const sql = `UPDATE livro SET lido = false WHERE id = $1`;
    await pool.query(sql, [id]);
    return response.status(204).send();
})

server.listen(process.env.PORT || 3000);