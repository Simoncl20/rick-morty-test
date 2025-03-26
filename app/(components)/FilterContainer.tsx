'use client'

import { useState } from 'react'
import Search from './Search'
import Filter from './Filter'
import { genderOptions, speciesOptions, statusOptions } from '../lib/definitions'

export default function FilterContainer() {
  // Estado para controlar qué filtro está abierto
  const [openFilter, setOpenFilter] = useState<string | null>(null)
  
  // Función para manejar clics en los filtros
  const handleFilterClick = (filterName: string) => {
    if (openFilter === filterName) {
      // Si hacemos clic en el mismo filtro, lo cerramos
      setOpenFilter(null)
    } else {
      // Si hacemos clic en un filtro diferente, abrimos ese y cerramos el anterior
      setOpenFilter(filterName)
    }
  }
  
  return (
    <div className="flex justify-center gap-x-6 w-full">
      <Search placeholder="Filter by name..." />
      <Filter 
        options={speciesOptions} 
        typeParam="species" 
        placeholder="Species"
        isOpen={openFilter === 'species'}
        onToggle={() => handleFilterClick('species')}
      />
      <Filter 
        options={statusOptions} 
        typeParam="status" 
        placeholder="Status"
        isOpen={openFilter === 'status'}
        onToggle={() => handleFilterClick('status')}
      />
      <Filter 
        options={genderOptions} 
        typeParam="gender" 
        placeholder="Gender"
        isOpen={openFilter === 'gender'}
        onToggle={() => handleFilterClick('gender')}
      />
    </div>
  )
}