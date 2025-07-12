import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { signup as signupApi } from "../../services/apiAuth";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success("User created successfully!!");
    },
    onError: (err) => {
      toast.error("Something went wrong");
    },
  });
  return { signup, isLoading };
}
