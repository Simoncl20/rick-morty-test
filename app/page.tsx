import Image from "next/image";
import Search from "./(components)/Search";
import { getCharacters } from "./lib/data";
import { CharacterQuery } from "./lib/definitions";
import Filter from "./(components)/Filter";

 
export default async function Home(props : {
  searchParams?: Promise<{query?: string, page?: string}>
}) {

  const searchParams = await props.searchParams
  const name = searchParams?.query || ''
  const currentPage = (searchParams?.page) || "1"

  const query : CharacterQuery = {name: name}

  const charactersData = await getCharacters(query, currentPage)
  // Log safely - only log specific properties or use JSON.stringify for safe parts
  console.log('Characters count:', charactersData?.info?.count);
  console.log('First character:', charactersData?.results?.[0]?.name);

  return (
    <main className="flex flex-col items-center mx-24 mt-10">
      <Image src="/logotype.svg" width={600} height={300} alt="Rick &Morty Logo"/>
      <Search placeholder="Search Character"/>
      <Filter />
    </main>
  );
}