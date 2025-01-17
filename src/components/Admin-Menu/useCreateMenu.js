import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { addEditMenuItem } from "../../services/apiMenu";

export function useCreateMenu() {
  const queryClient = useQueryClient();

  // creating
  const { isLoading: isAdding, mutate: createMenu } = useMutation({
    mutationFn: addEditMenuItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["menu"] }); // Refresh 'menu' query after deletion
      toast.success("added an item from menu");
    },
    onError: (error) => {
      toast.error(error.message);
    }, // Handle errors
  });

  return { isAdding, createMenu };
}
