"use client";

import { PokemonCharachter } from "@/lib/schemas";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Link from "next/link";

import Image from "next/image";

interface TableProps {
  data: PokemonCharachter[];
}
const PokemonTable = ({ data }: TableProps) => {
  const columnHelper = createColumnHelper<PokemonCharachter>();

  // TODO: move this out of the component to make the component more generic
  const pokemonTableComlumns = [
    columnHelper.accessor("name", {
      cell: (info) => {
        const name = info.getValue();
        const link = `/pokemons/${name}`;
        return <Link href={link}>{name}</Link>;
      },
      footer: (info) => info.column.id,
    })
  ];
  const table = useReactTable({
    columns: pokemonTableComlumns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {table.getRowModel().rows.map((row) =>
            row.getVisibleCells().map((cell) => (
              <div
                key={cell.id}
                className="card bg-white p-4 shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-lg transition duration-300"
              >
                <div className="text-center">
                  <h2 className="text-lg font-semibold text-black">
                  {cell.column.id === "name" &&
                    flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </h2>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default PokemonTable;
