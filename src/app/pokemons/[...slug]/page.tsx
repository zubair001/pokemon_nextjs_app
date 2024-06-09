import { PokemonForm } from "@/components";
import { getPokemonDetails } from "@/lib/pokemon";
import Image from "next/image";


export const PokemonPage = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const { slug } = params;

  const data = await getPokemonDetails(slug);

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4 text-center">
          {data.name} Forms
        </h1>
        {data.sprites && (
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="grid grid-cols-2 gap-4">
              {/* Front Default */}
              {data.sprites.front_default && (
                <div className="flex items-center border border-gray-300 shadow-lg rounded-lg">
                  <Image
                    src={data.sprites.front_default}
                    alt="Front Default"
                    width={300}
                    height={300}
                    className="object-contain rounded-lg"
                  />
                </div>
              )}
              {/* Front Shiny */}
              {data.sprites.front_shiny && (
                <div className="flex items-center border border-gray-300 shadow-lg rounded-lg">
                  <Image
                    src={data.sprites.front_shiny}
                    alt="Front Shiny"
                    width={300}
                    height={300}
                    className="object-contain rounded-lg"
                  />
                </div>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/* Back Default */}
              {data.sprites.back_default && (
                <div className="flex items-center border border-gray-300 shadow-lg rounded-lg">
                  <Image
                    src={data.sprites.back_default}
                    alt="Back Default"
                    width={300}
                    height={300}
                    className="object-contain rounded-lg"
                  />
                </div>
              )}
              {/* Back Shiny */}
              {data.sprites.back_shiny && (
                <div className="flex items-center border border-gray-300 shadow-lg rounded-lg">
                  <Image
                    src={data.sprites.back_shiny}
                    alt="Back Shiny"
                    width={300}
                    height={300}
                    className="object-contain rounded-lg"
                  />
                </div>
              )}
            </div>
          </div>
        )}

        <div className="flex justify-end space-x-4 mt-4">
          <a
            href="/pokemons"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg mt-4 text-center">
            Back
          </a>
          <PokemonForm forms={data.forms} />
        </div>
      </div>
    </>
  );
};

export default PokemonPage;
