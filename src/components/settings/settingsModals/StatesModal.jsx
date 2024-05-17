import React, { useState, useRef, useEffect } from "react";
import { Modal } from "antd";
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const StatesModal = ({ closeModal }) => {
  const [selectedCity, setSelectedCity] = useState(states[0]);
  console.log(selectedCity, "selectedCity");
  const [query, setQuery] = useState("");
  const comboboxRef = useRef(null);

  useEffect(() => {
    // Focus the ComboboxInput when the modal opens
    comboboxRef.current && comboboxRef.current.focus();
  }, []);

  return (
    <Modal visible={true} onCancel={closeModal} footer={null}>
      <div className="w-full h-auto py-5 px-10 flex flex-col space-y-4">
        <h1 className="text-lg text-gray-700 font-bold ">State</h1>

        <Combobox
          value={selectedCity}
          onChange={setSelectedCity}
          onClose={() => setQuery("")}
          //   placeholder={selectedCity}
        >
          <ComboboxInput
            aria-label="City"
            value={selectedCity}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Type to search..."
            className="border-gray-500 rounded-2xl px-3 py-2 border-2"
            ref={comboboxRef} // Set the ref here
          />
          <ComboboxOptions className="border-gray-300  border-2 rounded-2xl h-96 overflow-y-auto">
            {states.map((state, index) => (
              <ComboboxOption
                key={index}
                value={state}
                className="text-gray-900 px-4 py-2 cursor-pointer hover:bg-gray-200 "
              >
                {state}
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        </Combobox>

        <button className="w-full p-3 text-white font-bold bg-[#404041] hover:scale-95 rounded-full">
          Save
        </button>
      </div>
    </Modal>
  );
};

export default StatesModal;
