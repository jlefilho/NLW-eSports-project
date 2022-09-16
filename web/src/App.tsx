import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'
import { CreateAdModal } from './components/CreateAdModal'
import { Header } from './components/Header'

import logoImg from './assets/logo.svg'

import './styles/main.css'

interface Game {
    id: string,
    title: string,
    banner: string,
    _count: {
        ads: number
    }
}

function App() {
    const [games, setGames] = useState<Game[]>([]) //games = [{Game},{Game},{Game}]

    useEffect(() => {
        fetch('http://localhost:3333/games')
        .then(response => response.json())
        .then(data => {            
            setGames(data)
        })
    }, [])    

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
        <img src={logoImg} />

        <Header />        

        <div className='grid grid-cols-6 gap-6 mt-16'>

            {games.map(game => {                
                return (
                    
                    <GameBanner 
                        key={game.id}
                        banner={game.banner}
                        title={game.title}
                        adsCount={game._count.ads}
                    />
                )
            })}
                    
        </div>

        <Dialog.Root>        
            <CreateAdBanner />
            
            <CreateAdModal />      
        </Dialog.Root>
    </div>
  )
}

export default App
