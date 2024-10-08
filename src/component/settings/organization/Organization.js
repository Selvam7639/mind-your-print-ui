import React from "react";
import { useNavigate } from "react-router-dom";

const Organization = ({ organization, deleteOrganization }) => {
  const navigate = useNavigate();

  const editOrganization = (e, orgId) => {
    e.preventDefault();
    navigate(`/editOrganization/${orgId}`);
  };

  return (
    <tr key={organization.orgId}>
      <td className="text-center px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-800 ">{organization.name}</div>
      </td>
      <td className="text-center px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-800 ">{organization.shortName}</div>
      </td>
      <td className="text-right font-medium text-sm px-6 py-4 whitespace-nowrap">
        <a href="#" className="text-blue-600 hover:text-blue-800 px-4">
          View
        </a>
        <a
          onClick={(e, orgId) => editOrganization(e, organization.orgId)}
          href="#"
          className="text-orange-600 hover:text-orange-800 px-4"
        >
          Edit
        </a>
        <a
          onClick={(e, orgId) => deleteOrganization(e, organization.orgId)}
          href="#"
          className="text-red-600 hover:text-red-800 px-4"
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

export default Organization;
