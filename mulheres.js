const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Simara Conceição',
        imagem: 'https://avatars.githubusercontent.com/u/50921892?v=4',
        minibio: 'Desenvolvedora e instrutora'
    },
    {
        nome: 'Iana Chan',
        imagem: 'https://pbs.twimg.com/profile_images/1420905428452524037/DURvAmKN_400x400.jpg',
        minibio: 'Fundadora da PrograMaria'
    },
    {
        nome: 'Nina da Hora',
        imagem: 'https://conteudo.imguol.com.br/c/noticias/47/2020/07/12/ana-carolina-da-hora-hackear-o-racismo-1594591816588_v2_1x1.jpg',
        minibio: 'Hacker antirracista'
    }
]

function mostraMulheres(request,response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulheres',mostraMulheres))
app.listen(porta, mostraPorta)