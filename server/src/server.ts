import express from 'express'
import cors from 'cors'

import { PrismaClient } from '@prisma/client'
import { convertTimeStringToMinutes, convertMinutesToTimeString } from './utils/convert-time';

const app = express()

app.use(express.json())
app.use(cors())

const prisma = new PrismaClient({
    log: ['query']
})

//Criando rotas
app.get('/games', async (request, response) => {  //.get('URL', fn )  localhost:3333/games | request = busca informações provenientes da requisição | response = devolve a resposta

    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    ads: true
                }
            }
        }
    })

    return response.json(games)
    

})

app.post('/games/:id/ads', async (request, response) => {
    const gameId = request.params.id
    const body = request.body

    const ad = await prisma.ad.create({
        data: {
            gameId,
            name: body.name,
            yearsPlaying: body.yearsPlaying,
            discord: body.discord,
            weekDays: body.weekDays.join(','),
            hourStart: convertTimeStringToMinutes(body.hourStart),
            hourEnd: convertTimeStringToMinutes(body.hourEnd),
            useVoiceChannel: body.useVoiceChannel,
        }
    })

    return response.json(ad).status(201)
})

app.get('/games/:id/ads', async (request, response) => { //:id = parâmentro dinâmico (:1, :2, etc)

    const gameId = request.params.id

    const ads = await prisma.ad.findMany({
        select: {
            id: true,
            name: true,
            weekDays: true,
            useVoiceChannel: true,
            yearsPlaying: true,
            hourEnd: true,
            hourStart: true
        },
        where: {
            gameId,     //gameId: gameId
        },
        orderBy: {
            createdAt: 'desc'
        }
    })

    return response.json(ads.map(ad => {
        return {
            ...ad,
            weekDays: ad.weekDays.split(','),    //quebrando o array weekDays em números
            hourStart: convertMinutesToTimeString(ad.hourStart),
            hourEnd: convertMinutesToTimeString(ad.hourEnd)
        }
    }))

})

app.get('/ads/:id/discord', async (request, response) => {

    const adId = request.params.id

    const ad = await prisma.ad.findUniqueOrThrow({
        select: {
            discord: true,
        },
        where: {
            id: adId,
        }
    })

    return response.json({
        discord: ad.discord,
    })

})

app.listen(3333)    //porta