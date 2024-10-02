import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OrganizationService from "../../../service/OrganizationService";
import Organization from "./Organization";

const ListOrganization = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [organizations, setOrganizations] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await OrganizationService.getAllOrganizations();
        setOrganizations(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteOrganization = (e, orgId) => {
    e.preventDefault();
    OrganizationService.deleteOrganization(orgId).then((response) => {
      if (organizations) {
        setOrganizations((prevElemet) => {
          return prevElemet.filter(
            (organization) => organization.orgId !== orgId
          );
        });
      }
    });
  };

  return (
    <div className="container mx-auto my-8">
      <div className="h-12">
        <button
          onClick={() => navigate("/createOrganization")}
          className="rounded bg-violet-700 hover:bg-violet-900 text-white px-6 py-2 font-semibold"
        >
          Create Organization
        </button>
      </div>

      <div className="flex shadow border-b mt-5 bg-white">
        <table className="min-w-full">
          <thead className="">
            <tr>
              <th className="text-center font-semibold text-gray-600 uppercase tracking-wider py-3 px-6">
                Name
              </th>
              <th className="text-center font-semibold text-gray-600 uppercase tracking-wider py-3 px-6">
                Short Name
              </th>
              <th className="text-right font-semibold text-gray-600 uppercase tracking-wider py-3 px-24">
                Actions
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody className="bg-white">
              {organizations.map((organization) => (
                <Organization
                  organization={organization}
                  deleteOrganization={deleteOrganization}
                  key={organization.orgId}
                ></Organization>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default ListOrganization;
