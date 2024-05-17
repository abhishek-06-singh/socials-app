import { Checkbox } from "@headlessui/react";
import { useState } from "react";

import { IoMdCheckmark } from "react-icons/io";
import Posts from "../homepage/Posts";
import postdata from "./postData";

const CheckBoxes = () => {
  const [jobPostEnabled, setJobPostEnabled] = useState(false);
  const [jobSeekerEnabled, setJobSeekerEnabled] = useState(false);
  const [employerProfilesEnabled, setEmployerProfilesEnabled] = useState(false);
  const [jobSeekerProfilesEnabled, setJobSeekerProfilesEnabled] =
    useState(false);

  return (
    <>
      <fieldset>
        <div className="space-y-5 flex flex-col md:flex-row lg:flex-row items-center justify-center text-center space-x-3 mb-3 p-3">
          <div className="relative flex  items-start mt-5">
            <Checkbox
              checked={jobPostEnabled}
              onChange={setJobPostEnabled}
              className="group size-6 rounded-md bg-orange-500/10 p-1 ring-1 ring-white/15 ring-inset data-[checked]:bg-orange-500"
            >
              <IoMdCheckmark className="hidden size-4 fill-white group-data-[checked]:block" />
            </Checkbox>
            <div className="ml-3 text-sm leading-6">
              <label htmlFor="Jobpost" className="font-medium text-gray-900">
                Job Posts
              </label>
            </div>
          </div>

          <div className="relative flex items-start mt-4">
            <Checkbox
              checked={jobSeekerEnabled}
              onChange={setJobSeekerEnabled}
              className="group size-6 rounded-md bg-orange-500/10 p-1 ring-1 ring-white/15 ring-inset data-[checked]:bg-orange-500"
            >
              <IoMdCheckmark className="hidden size-4 fill-white group-data-[checked]:block" />
            </Checkbox>
            <div className="ml-3 text-sm leading-6">
              <label htmlFor="JobSeeker" className="font-medium text-gray-900">
                Job Seeker Posts
              </label>
            </div>
          </div>

          <div className="relative flex items-start mt-4">
            <Checkbox
              checked={employerProfilesEnabled}
              onChange={setEmployerProfilesEnabled}
              className="group size-6 rounded-md bg-orange-500/10 p-1 ring-1 ring-white/15 ring-inset data-[checked]:bg-orange-500"
            >
              <IoMdCheckmark className="hidden size-4 fill-white group-data-[checked]:block" />
            </Checkbox>
            <div className="ml-3 text-sm leading-6">
              <label
                htmlFor="EmployerProfiles"
                className="font-medium text-gray-900"
              >
                Employer Profiles
              </label>
            </div>
          </div>

          <div className="relative flex items-start mt-4">
            <Checkbox
              checked={jobSeekerProfilesEnabled}
              onChange={setJobSeekerProfilesEnabled}
              className="group size-6 rounded-md bg-orange-500/10 p-1 ring-1 ring-white/15 ring-inset data-[checked]:bg-orange-500"
            >
              <IoMdCheckmark className="hidden size-4 fill-white group-data-[checked]:block" />
            </Checkbox>
            <div className="ml-3 text-sm leading-6">
              <label
                htmlFor="JobSeekerProfiles"
                className="font-medium text-gray-900"
              >
                Job Seeker Profiles
              </label>
            </div>
          </div>
        </div>
      </fieldset>
      <hr />
      <h2 className="text-lg font-bold mb-2  mt-2">Latest Post</h2>
      <Posts postdata={postdata} />
    </>
  );
};

export default CheckBoxes;
