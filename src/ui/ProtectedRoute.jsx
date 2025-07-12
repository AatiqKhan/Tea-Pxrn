import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import LoadingScreen from "./LoadingScreen";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. load authenticated user

  const { user, isLoading, isAuthenticated } = useUser();

  // 3. if no authenticated user redirect to login page
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  // 2. load spinner
  if (isLoading)
    return (
      <div className="al flex h-screen items-center justify-center bg-black">
        <LoadingScreen />
      </div>
    );

  // 4. if there is User render the app

  if (isAuthenticated) return children;
}
