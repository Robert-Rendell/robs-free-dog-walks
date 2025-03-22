import { Dispatch, SetStateAction, useEffect } from "react";

import { ROBRENDELLWEBSITE_URL, ROBS_FREE_DOG_WALKS } from "@/app/const";

import { BookDogWalkingPayload } from "../types/payloads/book-dog-walking.payload";

export type BookingError = { message: string } | null;

export function useBookFreeDogWalk({
  bookingPayload,
  bookingDataState,
  bookingLoadingState,
  bookingErrorState,
}: {
  bookingPayload: BookDogWalkingPayload;
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
            `${ROBRENDELLWEBSITE_URL}/${ROBS_FREE_DOG_WALKS}/book-free-dog-walk`,
            {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(bookingPayload),
            },
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
  }, [loading, setData, setError, setLoading, bookingPayload]);
}

export default useBookFreeDogWalk;
