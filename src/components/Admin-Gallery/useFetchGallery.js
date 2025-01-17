import { useQuery } from "@tanstack/react-query";
import { fetchGalleryItems } from "../../services/apiGallery";

export function useFetchGallery() {
  const {
    isLoading,
    data: item,
    error,
  } = useQuery({
    queryKey: ["gallery"],
    queryFn: fetchGalleryItems,
  });

  return { isLoading, item, error };
}
