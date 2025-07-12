import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { useLogout } from "./useLogout";
export default function LogOut() {
  const { logout, isLoading } = useLogout();
  return (
    <button onClick={logout} disabled={isLoading}>
      <LogoutIcon />
    </button>
  );
}
