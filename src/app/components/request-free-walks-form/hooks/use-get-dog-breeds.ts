import { useEffect, useState } from "react";

import { ROBRENDELLWEBSITE_URL } from "@/app/const";

import { DogBreedsJson } from "../types/json/dog-breeds-json";

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

type DogBreedsError = { message: string } | null;

export function useGetDogBreeds() {
  const [data, setData] = useState<DogBreedsJson | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<DogBreedsError>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          ROBRENDELLWEBSITE_URL + "/robs-free-dog-walks/get-dog-breeds",
          { method: "GET" },
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err as DogBreedsError);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}

export default useGetDogBreeds;
