import React from 'react'
import { CharacterInfo } from '../../lib/definitions'
import Image from 'next/image'

const CharacterCard = (characterInfo: CharacterInfo) => {

  const {name, image, species} = characterInfo

  return (

    <article className='flex flex-col items-center'>
      <Image src={image} alt={`Image of ${name}`} width={200} height={200} />
      <h3 className='text-xl font-bold'>{name}</h3>
      <p className='text-lg'>{species}</p>
    </article>

  )
}

export default CharacterCard