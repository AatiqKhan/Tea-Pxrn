import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteMenuItem } from "../../services/apiMenu";

export function useDeleteMenu() {
  const queryClient = useQueryClient();
  const { isLoading, mutate: deleteMenu } = useMutation({
    mutationFn: deleteMenuItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["menu"] }); // Refresh 'menu' query after deletion
      toast.success("deleted an item from menu");
    },
    onError: (error) => toast.error(error.message), // Handle errors
  });

  return { isLoading, deleteMenu };
}
