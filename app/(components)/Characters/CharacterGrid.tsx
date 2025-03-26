'use client'

import { CharacterInfo } from '@/app/lib/definitions'
import CharacterCard from './CharacterCard'

const CharacterGrid = ({
    characters, 

} : { 
    characters : CharacterInfo[], 

}) => {
    

    
    return (
        <div className='mb-20'>
            <section className='grid grid-cols-4 grid-rows-none gap-x-10 gap-y-5'>
                {
                    characters.map((character : CharacterInfo) => {
                        return (
                            <CharacterCard key={character.id} characterInfo={character}/>
                        )
                    })
                }
            </section>
        </div>
    )
}

export default CharacterGrid