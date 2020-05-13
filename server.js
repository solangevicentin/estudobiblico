const express = require('express');
 
const server = express();
 
server.use(express.json());
 
const livros = [
     {livro:'Gênesis',capitulo: 3, versiculo: 16 ,lido:'sim'},
    {livro:'Êxodo', capitulo:11, versiculo: 18, lido:'sim'}
]
 
server.get('/livro', function(request, response) {
    response.json(livros);
})
 
server.post('/livro', function(request, response) {
 
    const {livro, capitulo, versiculo, lido} = request.body;
 
    livros.push({livro, capitulo, versiculo, lido});
    response.status(204).send();
})
 
server.put('/livro/:id', function(request, response){
    const id = request.params.id;
    const {livro, capitulo, versiculo, lido} = request.body;
 
    for(let i = 0; i < livros.length; i++){
        if(livros[i].livro == id) {
            livros[i].livro = livro;
            livros[i].capitulo = capitulo;
            livros[i].versiculo = versiculo;
            livros[i].lido = lido;
            break;
        }
    }
 
    return response.status(204).send();
})
 
server.delete('/livro/:id', function(request, response) {
 
    const id = request.params.id;
 
    for(let i = 0; i < livros.length; i++) {
        if(livros[i].livro == id) {
            livros.splice(i, 1);
            break;
        }
    }
 
    return response.status(204).send();
})
 
server.listen(process.env.PORT || 3000);