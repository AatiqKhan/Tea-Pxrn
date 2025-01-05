import React from "react";
import "./index.css";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AdminGallery from "./components/Admin-Gallery/AdminGallery";
import AdminMenu from "./components/Admin-Menu/AdminMenu";
import AdminOrders from "./components/Admin-Orders/AdminOrders";
import Admin from "./pages/admin";
import Home from "./pages/home";
import { Toaster } from "react-hot-toast";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 3000,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="admin" element={<Admin />}>
            <Route index element={<Navigate to="orders" replace />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="menu" element={<AdminMenu />} />
            <Route path="gallery" element={<AdminGallery />} />
          </Route>
        </Routes>

        {/* <Route element={<AdminLayout />}>
        <Route index element={<Navigate replace to="admin/orders" />} />
        <Route path="admin" element={<Admin />} />
        <Route path="orders" element={<AdminOrders />} />
        <Route path="menu" element={<AdminMenu />} />
        <Route path="gallery" element={<AdminGallery />} />
      </Route> */}
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ maaargin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            padding: "16px 24px",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
