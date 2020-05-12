const express = require('express');

const server = express();

server.use(express.json());

const Leitura = [
    {livro:'Gênesis',capitulo: 3, versiculo: 16 ,lido:'sim'},
    {livro:'Êxodo', capitulo:11, versiculo: 18, lido:'sim'}
]

server.get('/livro', function(request, response) {
    response.json(Leitura);
})

server.post('/livro', function(request, response){

const livro= request.body.livro;
const capitulo=request.body.capitulo;
const versiculo=request.body.versiculo;
const lido=request.body.lido;

Leitura.push({livro: livro, capitulo:capitulo, versiculo:versiculo, lido:lido});
response.status(204).send();
})

server.put('/livro/:id', function(request,response){
const {id}=request.params;
const {livro,capitulo,versiculo,lido}=request.body;

for(let i= 0;i<Leitura.lenght; i++) {
  if(leitura[i].livro==id){
      leitura[i].livro=livro;
      leitura[i].capitulo=capitulo;
      leitura[i].versiculo=versiculo;
      leitura[i].lido=lido;
      break;

  }
}
 
return response.status(204).send();

})

server.delete('/livro/:id',function(request, response){
    const id=request.params.id;

    for(let i= 0;i<Leitura.lenght; i++) {
  if(leitura[i].livro==id){
     leitura.splice(i,1);
     break;
    }
  }

 return response.status(204).send();
})
server.listen(process.env.PORT || 3000);