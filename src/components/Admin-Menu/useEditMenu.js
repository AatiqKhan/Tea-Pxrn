import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { addEditMenuItem } from "../../services/apiMenu";

export function useEditMenu() {
  const queryClient = useQueryClient();

  //editing
  const { isLoading: isEditing, mutate: editMenu } = useMutation({
    mutationFn: ({ newMenuData, id }) => addEditMenuItem(newMenuData, id),
    //mutationFn: addEditMenuItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["menu"] }); // Refresh 'menu' query after deletion
      toast.success("added an item from menu");
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    }, // Handle errors
  });

  return { isEditing, editMenu };
}
