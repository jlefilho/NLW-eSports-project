import express from 'express'

const app = express()

//Criando rotas
app.get('/ads', (request, response) => { //.get('URL', fn )  localhost:3333/ads | request = busca informações provenientes da requisição | response = devolve a resposta

    return response.json([
        { id: 1, name: 'Anúncio 1'},
        { id: 2, name: 'Anúncio 2'},
        { id: 3, name: 'Anúncio 3'},
        { id: 4, name: 'Anúncio 4'}
    ])

}) 

app.listen(3333)    //porta