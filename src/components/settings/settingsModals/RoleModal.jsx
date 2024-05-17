import React, { useState, useRef, useEffect } from "react";
import { Modal } from "antd";
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";

const people = ["Job Seeker", "Employer"];

const RoleModal = ({ closeModal }) => {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const [query, setQuery] = useState("");
  const comboboxRef = useRef(null);

  useEffect(() => {
    // Focus the ComboboxInput when the modal opens
    comboboxRef.current && comboboxRef.current.focus();
  }, []);

  return (
    <Modal visible={true} onCancel={closeModal} footer={null}>
      <div className="w-full h-auto py-5 px-10 flex flex-col space-y-4">
        <h1 className="text-lg text-gray-700 font-bold ">Role</h1>
        <Combobox
          value={selectedPerson}
          onChange={setSelectedPerson}
          onClose={() => setQuery("")}
        >
          <ComboboxInput
            aria-label="Assignee"
            value={selectedPerson}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Type to search..."
            className="border-gray-500 rounded-2xl px-3 py-2 border-2"
            ref={comboboxRef} // Set the ref here
          />
          <ComboboxOptions className="border-gray-300  border-2 rounded-2xl">
            {people.map((people, index) => (
              <ComboboxOption
                key={index}
                value={people}
                className="text-gray-900 px-4 py-2 cursor-pointer hover:bg-gray-200 "
              >
                {people}
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

export default RoleModal;
