import { login as LoginApi } from "../../services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    mutate: login,
    isLoading,
    user,
  } = useMutation({
    mutationFn: ({ email, password }) => LoginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user); // manually setting some data in react query cache
      navigate("/admin");
    },
    onError: (err) => {
      console.log("usee errr", err);
      toast.error("Emaiil or Password is wrong");
    },
  });

  return { login, isLoading };
}
