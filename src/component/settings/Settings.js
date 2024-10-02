import React from "react";
import CreateOrganization from "./organization/CreateOrganization";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListOrganization from "./organization/ListOrganization";

const Settings = () => {
  return (
    <BrowserRouter>
      <div>
        <div className="bg-gray-800">
          <div className="h-16 flex items-center">
            <p className="text-white font-bold px-6">Settings</p>
          </div>
        </div>
      </div>
      <Routes>
        <Route index element={<ListOrganization />} />
        <Route path="/" element={<ListOrganization />} />
        <Route path="/settings" element={<ListOrganization />} />
        <Route path="/listOrganization" element={<ListOrganization />} />
        <Route path="/createOrganization" element={<CreateOrganization />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Settings;
