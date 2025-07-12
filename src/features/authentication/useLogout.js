import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logOut as LogOutApi } from "../../services/apiAuth";

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    mutate: logout,
    isLoading,
    user,
  } = useMutation({
    mutationFn: LogOutApi,
    onSuccess: () => {
      queryClient.removeQueries(["user"], user);
      navigate("/login", { replace: true });
    },
  });

  return { logout, isLoading };
}
