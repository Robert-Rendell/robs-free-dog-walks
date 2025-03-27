"use client";
import { useCallback, useState } from "react";

import { AboutMe } from "./components/about-me";
import { BorrowMyDoggy } from "./components/borrow-my-doggy";
import { DogTrainingAdvice } from "./components/dog-training-advice";
import { Gallery } from "./components/gallery/gallery";
import { DogWalksTable } from "./components/request-free-walks-form/dog-walks-table";
import { Testimonies } from "./components/testimonies/testimonies";
import {
  DISABLE_CUSTOM_ANALYTICS_KEY,
  usePageView,
} from "./hooks/use-page-views";

export default function Home() {
  usePageView("/robs-free-dog-walks");
  const [analyticsToggled, toggleAnalytics] = useState<boolean>(false);
  const disableAnalytics = useCallback(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(DISABLE_CUSTOM_ANALYTICS_KEY, "true");
      toggleAnalytics(true);
    }
  }, []);
  const enableAnalytics = useCallback(() => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(DISABLE_CUSTOM_ANALYTICS_KEY);
      toggleAnalytics(false);
    }
  }, []);
  const isAnalyticsDisabled = useCallback(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(DISABLE_CUSTOM_ANALYTICS_KEY);
    }
  }, [analyticsToggled]);
  return (
    <>
      <div className="title-header">
        <h1>Rob{"'"}s Free Dog Walks</h1>
        <h2>~ Based in Glasgow ~</h2>
        <hr />
      </div>

      <div className="title-header">
        <main>
          <div className="inner-main">
            <DogWalksTable />
            <hr />
            <AboutMe />
          </div>
          <hr />
          <Testimonies />
          <hr />
          <Gallery />
          <hr />
          <DogTrainingAdvice />
          <hr />
          <BorrowMyDoggy />
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          <span style={{ justifyContent: "left" }}>
            Copyright &copy;{" "}
            <span onClick={disableAnalytics}>Rob Rendell 2025 </span>
            {isAnalyticsDisabled() && (
              <button
                onClick={enableAnalytics}
                style={{ background: "red", color: "white" }}
              >
                analytics disabled
              </button>
            )}
          </span>
        </footer>
      </div>
    </>
  );
}
