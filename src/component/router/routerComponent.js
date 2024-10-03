import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainComponent from "../main/MainComponent";
import Settings from "../settings/Settings";
import Dashboard from "../dashboard/Dashboard";
import Orders from "../orders/Orders";
import Production from "../production/Production";
import Inventory from "../inventory/Inventory";
import Purchase from "../purchase/Purchase";
import Help from "../help/Help";
import ListOrganization from "../settings/organization/ListOrganization";

const routerComponent = () => {
  return (
    <BrowserRouter>
      <MainComponent />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/production" element={<Production />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/settings" element={<Settings />}>
          <Route path="listOrganization" element={<ListOrganization />} />
        </Route>
        <Route path="/help" element={<Help />} />
      </Routes>
    </BrowserRouter>
  );
};

export default routerComponent;
