import { Dispatch, SetStateAction, useEffect } from "react";

import { ROBRENDELLWEBSITE_URL } from "@/app/const";

import { BookDogWalkingPayload } from "../types/payloads/book-dog-walking.payload";

export type PageView = {
  ipAddress: string;
  dateTime: string;
};

export type PageViewResponse = {
  total: number;
  views: PageView[];
  pageUrl: string;
};

export const DISABLE_CUSTOM_ANALYTICS_KEY = "DISABLE_CUSTOM_ANALYTICS";

export type BookingError = { message: string } | null;

export function useBookFreeDogWalk({
  bookingDataState,
  bookingLoadingState,
  bookingErrorState,
}: {
  bookingDataState: [
    BookDogWalkingPayload | null,
    Dispatch<SetStateAction<BookDogWalkingPayload | null>>,
  ];
  bookingLoadingState: [boolean, Dispatch<SetStateAction<boolean>>];
  bookingErrorState: [BookingError, Dispatch<SetStateAction<BookingError>>];
}) {
  const [, setData] = bookingDataState;
  const [loading, setLoading] = bookingLoadingState;
  const [, setError] = bookingErrorState;

  useEffect(() => {
    if (loading) {
      const fetchData = async () => {
        setError(null);
        try {
          const response = await fetch(
            ROBRENDELLWEBSITE_URL + "/robs-free-dog-walks/book-free-dog-walk",
            { method: "GET" },
          );
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const result = await response.json();
          setData(result);
        } catch (err) {
          setError(err as BookingError);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [loading, setData, setError, setLoading]);
}

export default useBookFreeDogWalk;
