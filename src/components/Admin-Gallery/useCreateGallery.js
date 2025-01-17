import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { addGalleryItem } from "../../services/apiGallery";

export function useCreateGallery() {
  const queryClient = useQueryClient();
  const { isLoading: isAdding, mutate: addImage } = useMutation({
    mutationFn: addGalleryItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["gallery"] }); // Refresh 'menu' query after deletion
      toast.success("added an item from gallery");
    },
    onError: (error) => toast.error(error.message), // Handle errors
  });

  return { isAdding, addImage };
}
