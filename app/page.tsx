import Image from "next/image";


export default function Home() {

  return (
    <main className="flex justify-center mx-24 mt-10">
      <Image src="/logotype.svg" width={600} height={300} alt="Rick &Morty Logo"/>
    </main>
  );
}
