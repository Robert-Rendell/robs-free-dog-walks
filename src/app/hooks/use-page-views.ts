import { useEffect } from "react";

export type PageView = {
  ipAddress: string;
  dateTime: string;
};

export type PageViewResponse = {
  total: number;
  views: PageView[];
  pageUrl: string;
};

export function usePageView(
  pageUrl: string,
  pageViewsSetFn?: (val: PageViewResponse) => void,
) {
  useEffect(() => {
    fetch("https://robrendellwebsite.onrender.com/view-page", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pageUrl }),
    })
      .then((res) => {
        if (pageViewsSetFn) {
          res.json().then((json) => {
            pageViewsSetFn(json);
          });
        }
      })
      .catch((e) => {
        console.log("Cannot record page view: ", e);
      });
  }, [pageUrl]);
}
