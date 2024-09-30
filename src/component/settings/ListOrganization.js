import React from "react";

const ListOrganization = () => {
  return (
    <div className="container mx-auto my-8">
      <div className="h-12">
        <button className="rounded bg-violet-700 hover:bg-violet-900 text-white px-6 py-2 font-semibold">
          Create Organization
        </button>
      </div>

      <div className="flex shadow border-b">
        <table>
          <thead>
            <tr>
              <th></th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default ListOrganization;
