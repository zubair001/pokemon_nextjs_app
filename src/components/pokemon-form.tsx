"use client";

import React, { Fragment, useEffect, useState } from "react";
import Modal from "./modal";
import { Form, FormDetails, formDetailsSchema, getFormDetails } from "@/lib";

interface PokemonFormProps {
  forms: Form[];
}

const PokemonForm = ({ forms }: PokemonFormProps) => {
  const [selectedModal, setSelectedModal] = useState<string | undefined>(
    undefined
  );

  const [formDetails, setFormDetails] = useState<FormDetails | undefined>(
    undefined
  );

  useEffect(() => {
    async function fetchData() {
      if (selectedModal) {
        const details = await fetch(`/api/form/bulbasaur`);
        const result = await details.json();
        formDetailsSchema.parse(result);
        console.log(result);
        if (details) setFormDetails(result);
      }
    }

    if (selectedModal) fetchData();
  }, [selectedModal]);

  return (
    <>
      {forms.map((form) => (
        <Fragment key={form.name}>
          <Modal
            show={form.name === selectedModal || false}
            onClose={() => {
              setSelectedModal(undefined);
              console.log("closing");
            }}
            title={form.name}
          >
            {formDetails && (
              <table className="min-w-full bg-white">
                <tbody>
                 
                  <tr className="w-full border-b border-gray-200">
                    <td className="px-4 py-2 font-semibold">Form Order</td>
                    <td className="px-4 py-2">{formDetails.form_order}</td>
                  </tr>
                 
                  <tr className="w-full border-b border-gray-200">
                    <td className="px-4 py-2 font-semibold">Order</td>
                    <td className="px-4 py-2">{formDetails.order}</td>
                  </tr>
                 
                  <tr className="w-full border-b border-gray-200">
                    <td className="px-4 py-2 font-semibold">Pokemon Name</td>
                    <td className="px-4 py-2">{formDetails.pokemon?.name}</td>
                  </tr>
                </tbody>
              </table>
            )}
          </Modal>

          <button
            className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg mt-4 text-center"
            onClick={() => setSelectedModal(form.name)}
          >
            Show Details
          </button>
        </Fragment>
      ))}
    </>
  );
};

export default PokemonForm;
