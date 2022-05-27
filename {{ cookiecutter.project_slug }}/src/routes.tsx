import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
// layouts
import LogoOnlyLayout from "apps/layouts/LogoOnlyLayout";
import DashboardLayout from "apps/layouts/dashboard";
//
import Page404 from "apps/common/features/Page404";
import { ItemsList } from "apps/{{ cookiecutter.app_name }}/features/ItemList";
import { ItemsAdd } from "apps/{{ cookiecutter.app_name }}/features/ItemsAdd";
import { ItemDetails } from "apps/{{ cookiecutter.app_name }}/features/ItemDetails";

// ----------------------------------------------------------------------

export default function Routes() {
  return useRoutes([
    {
      path: "/items",
      element: <DashboardLayout />,
      children: [
        { path: "all", element: <ItemsList /> },
        { path: "add", element: <ItemsAdd /> },
        { path: ":id", element: <ItemDetails /> },
      ],
    },
    {
      path: "/",
      element: <LogoOnlyLayout />,
      children: [
        { path: "404", element: <Page404 /> },
        { path: "/", element: <Navigate to="/items/all" /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
  ]);
}
