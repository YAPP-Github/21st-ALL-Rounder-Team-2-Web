import { useQuery } from "@tanstack/react-query";
import { getExhibitsByDate } from "@/apis/calendar";
import { parseDate } from "@/utils/datetime";

export const useGetExhibitsByDate = (date: Date) => {
  const { year, month, day } = parseDate(date);

  return useQuery({
    queryKey: ["exhibitsByDate", { year, month, day }],
    queryFn: () => getExhibitsByDate({ year, month, day }),
    enabled: !!date,
  });
};
