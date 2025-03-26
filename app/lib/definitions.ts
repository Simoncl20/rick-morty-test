// Characters EndPoint

export interface CharacterQuery {
    name?: string
    status?: string
    species?: string
    gender?: string
}

export interface CharactersResponse {
    info: Info
    results: CharacterInfo[]
}

export interface ErrorResponse {
    error: boolean
    status: number
    message: string
}
  
export interface Info {
    count: number
    pages: number
    next: string
    prev: string
  }
  
export interface CharacterInfo {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: Origin
    location: Location
    image: string
    episode: string[]
    url: string
    created: string
  }
  
export interface Origin {
    name: string
    url: string
  }
  
export interface Location {
    name: string
    url: string
  }

export const speciesOptions = [
  'None',
  'Alien',
  'Animal',
  'Cronenberg',
  'Disease',
  'Human',
  'Humanoid',
  'Mythological Creature',
  'Poopybutthole',
  'Robot',
  'unknown'
]

export const statusOptions = [
  "None",
  "Alive", 
  "Dead",
  "Unknown"
]

export const genderOptions = [
  "None",
  "Female",
  "Male",
  "Genderless",
  "Unknow"
]