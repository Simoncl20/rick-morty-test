import Image from "next/image";
import CharacterGrid from "./(components)/Characters/CharacterGrid";
import FilterContainer from "./(components)/FilterContainer";
import { getCharacters } from "./lib/data";
import { CharacterQuery, CharactersResponse, ErrorResponse } from "./lib/definitions";
import LoadMore from "./(components)/Characters/LoadMore";

 
export default async function Home(props : {
  searchParams?: Promise<{name?: string, species?: string, status?: string, gender?: string, page?: string}>
}) {

  const searchParams = await props.searchParams
  const name = searchParams?.name || ''
  const species = searchParams?.species || ''
  const status = searchParams?.status || ''
  const gender = searchParams?.gender || ''
  const currentPage = (searchParams?.page) || "1"

  const query : CharacterQuery = {name: name, species: species, status: status, gender: gender}


  const charactersData : CharactersResponse | ErrorResponse = await getCharacters(query, currentPage)
  // Log safely - only log specific properties or use JSON.stringify for safe parts
  console.log('Characters count:', 'info' in charactersData ? charactersData.info?.count : 'Error');
  console.log('First character:', 'results' in charactersData ? charactersData.results?.[0]?.name : 'Error');

  return (
    <main className="flex flex-col gap-y-10 items-center mx-50 mt-10">
      <Image src="/logotype.svg" width={600} height={300} alt="Rick &Morty Logo"/>
      <FilterContainer />
      {'results' in charactersData ? (
        <CharacterGrid characters={charactersData.results} isHome={true} />
      ) : (
        <p className="text-2xl">No characters found</p>
      )}
      <LoadMore onLoadMore={() => }/>
    </main>
  );
}