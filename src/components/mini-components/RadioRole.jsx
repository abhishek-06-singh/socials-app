import { Field, Label, Radio, RadioGroup } from "@headlessui/react";
import { useState } from "react";
const plans = ["Job Seeker", "Employer"];
const RadioRole = () => {
  let [selected, setSelected] = useState(plans[0]);
  return (
    <RadioGroup
      value={selected}
      onChange={setSelected}
      aria-label="Server size"
      className="w-full flex space-x-3"
    >
      {plans.map((plan) => (
        <Field
          key={plan}
          className="flex items-center gap-2 bg-[#F2F2F2] p-3 rounded-full mb-2 border-2 border-[#818181] outline-none mt-2 w-full "
        >
          <Radio
            value={plan}
            className="group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-orange-400"
          >
            <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
          </Radio>
          <Label>{plan}</Label>
        </Field>
      ))}
    </RadioGroup>
  );
};

export default RadioRole;
