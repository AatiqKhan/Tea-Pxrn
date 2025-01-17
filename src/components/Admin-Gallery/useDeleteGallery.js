import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteGalleryItem } from "../../services/apiGallery";

export function useDeleteGallery() {
  const queryClient = useQueryClient();

  // deleting from supaBase
  const { isLoading: isDeleting, mutate: deleteImage } = useMutation({
    mutationFn: deleteGalleryItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["gallery"] }); // Refresh 'gallery' query after deletion
      toast.success("deleted an image from Gallery");
    },
    onError: (error) => toast.error(error.message), // Handle errors
  });

  return { isDeleting, deleteImage };
}
