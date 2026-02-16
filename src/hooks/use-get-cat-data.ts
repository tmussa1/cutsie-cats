import { useQuery } from "@tanstack/react-query";
import { getCatData } from "../utils/get-cat-data";

export const useGetCatData = ({baseUrl, queryParam = ''}: {baseUrl: string, queryParam?: string  }) => {
const {data, isLoading, isError } = useQuery({queryKey: [baseUrl], queryFn: ()  => getCatData({url: `${baseUrl}?${queryParam}` })});

return {data, isLoading, isError }
}
