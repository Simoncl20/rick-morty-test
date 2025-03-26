import React from 'react'
import { CharacterInfo } from '../../lib/definitions'
import Image from 'next/image'

const CharacterCard = ({ characterInfo }: { characterInfo: CharacterInfo }) => {
  const {name, image, species} = characterInfo

  return (
    <article className='flex flex-col items-center shadow-lg rounded-lg overflow-hidden w-70 hover:scale-105 transition-transform group'>
      <div className='w-full relative h-50'>
        <Image 
          src={image} 
          alt={`Image of ${name}`} 
          fill
          style={{ objectFit: 'cover' }}
          className='w-full'
        />
      </div>
      <header className='w-full p-4'>
        <h3 className='text-xl font-semibold transition-colors duration-300 group-hover:text-green-500'>{name}</h3>
        <p className='text-lg'>{species}</p>
      </header>
    </article>
  )
}

export default CharacterCard