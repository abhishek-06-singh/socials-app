import React, { useState } from "react";
import { Checkbox } from "@headlessui/react";

import { FaCheck } from "react-icons/fa";

const RememberMeCheckbox = () => {
  const [enabled, setEnabled] = useState(true);
  return (
    <div className="flex space-x-3 justify-start items-center p-2">
      <Checkbox
        checked={enabled}
        onChange={setEnabled}
        className="group size-6 rounded-md bg-black/10 p-1 ring-1 ring-white/15 ring-inset data-[checked]:bg-orange-500"
      >
        <FaCheck className="hidden size-4 fill-white group-data-[checked]:block " />
      </Checkbox>
      <span>Remember me </span>
    </div>
  );
};

export default RememberMeCheckbox;
