import PokemonTable from "@/components/table";
import { listPokemons } from "@/lib/pokemon";
import Link from "next/link";


export const PokemonPage = async ({
  searchParams,
}: {
  searchParams: {
    offset?: string;
    limit?: string;
  };
}) => {
  const pokemonList = await listPokemons({
    limit: searchParams.limit ? parseInt(searchParams.limit) : undefined,
    offset: searchParams.offset ? parseInt(searchParams.offset) : undefined,
  });

  const newOffset = searchParams?.offset
    ? parseInt(searchParams?.offset) + 1
    : 1;
  const newLimit = searchParams?.limit
    ? parseInt(searchParams?.limit) + 4
    : 6;

  return (
    <>
       <div className="relative min-h-screen bg-gray-100 p-4">
      <PokemonTable data={pokemonList.results} />
      <div className="absolute bottom-4 right-4 space-x-4">
        <Link href={`/pokemons?offset=${newOffset}`}>
          <button className="btn bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Next
          </button>
        </Link>
        <Link href={`/pokemons?limit=${newLimit}`}>
          <button className="btn bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Extend
          </button>
        </Link>
      </div>
    </div>
    </>
  );
};

export default PokemonPage;
