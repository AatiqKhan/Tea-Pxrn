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
import Gallery from "./pages/gallery";
import Menu from "./pages/menu";
import LoginForm from "./features/authentication/loginForm";
// import ProtectedRoute from "./ui/ProtectedRoute";
import UserSignup from "./components/User-SignUp/userSignup";
import Cart from "./pages/cart";
import { CartProvider } from "./context/cart_context";

function App() {
  const arr = [1, 2, 3, 4];
  const result = arr.map((i) => i < 2);
  console.log(result);

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
        <CartProvider></CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="menu" element={<Menu />} />
          <Route path="cart" element={<Cart />} />

          {/* admin route */}
          <Route
            path="admin"
            element={
              // <ProtectedRoute>
              //   <Admin />
              // </ProtectedRoute>
              <Admin />
            }
          >
            <Route index element={<Navigate to="orders" replace />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="menu" element={<AdminMenu />} />
            <Route path="gallery" element={<AdminGallery />} />
            <Route path="users" element={<UserSignup />} />
          </Route>
          <Route path="login" element={<LoginForm />} />
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
