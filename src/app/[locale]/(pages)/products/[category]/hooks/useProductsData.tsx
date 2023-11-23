import { Data } from "@/libs/types";
import { useQuery } from "@tanstack/react-query";

const useProductsData = () => {
  const { data, isLoading, error, isPaused } = useQuery<Data>(
    ["allProducts"],
    async () => {
      const response = await fetch("/assets/trailers/list/trailer.json");
      const data = await response.json();
      return data;
    },
    {
      staleTime: 600000,
      retry: 1,
    }
  );

  return { data, isLoading, error, isPaused };
};

export default useProductsData;
