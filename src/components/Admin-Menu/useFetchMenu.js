import { useQuery } from "@tanstack/react-query";
import { fetchMenuItems } from "../../services/apiMenu";

export function useFetchMenu() {
  const {
    //isPending,
    isLoading,
    data: menu,
    error,
  } = useQuery({
    staleTime: 0,

    queryKey: ["menu"],
    queryFn: fetchMenuItems,
  });

  return { isLoading, menu, error };
}
