import React, { useState } from "react";
import OrganizationService from "../../service/OrganizationService";

const CreateOrganization = () => {
  const [organization, setOrganization] = useState({
    orgId: "",
    name: "",
    shortName: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setOrganization({ ...organization, [e.target.name]: value });
  };

  const saveOrganization = (e) => {
    e.preventDefault();
    OrganizationService.saveOrganization(organization)
      .then((Response) => {
        console.log(Response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const clearOrganization = (e) => {};

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b bg-white my-10">
      <div className="px-8 py-8">
        <div className="font-semibold text-2xl tracking-wider">
          <h1>Create Organization</h1>
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-700 text-sm font-normal">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={organization.name}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border border-gray-300 mt-2 px-2 py-2"
          ></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-700 text-sm font-normal">
            Short Name
          </label>
          <input
            type="text"
            name="shortName"
            value={organization.shortName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border border-gray-300 mt-2 px-2 py-2"
          ></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={saveOrganization}
            className="rounded text-white font-semibold bg-green-500 hover:bg-green-700 px-6 py-2"
          >
            Save
          </button>
          <button
            onClick={clearOrganization}
            className="rounded text-white font-semibold bg-red-500 hover:bg-red-700 px-6 py-2"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateOrganization;
