"use client";
import Image from "next/image";
import { RequestFreeDogWalkForm } from "./components/request-free-walks-form/request-free-dog-walk-form";
import { ToDoList } from "./components/to-do-list";
import { Testimonies } from "./components/testimonies";
import { Gallery } from "./components/gallery";
import { Disclaimer } from "./components/disclaimer";
import { DogAdvice } from "./components/dog-advice";

export default function Home() {
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
            <table>
              <tbody>
                <tr>
                  <td>
                    <Image
                      className="dark:invert center"
                      src="/kerala-doggie.jpg"
                      alt="Kerala Doggie"
                      width={300}
                      height={300}
                      priority
                    />
                    <Image
                      className="dark:invert center"
                      src="/dog-paw-prints-lg.png"
                      alt="Kerala Doggie"
                      width={300}
                      height={300}
                      priority
                    />
                  </td>
                  <td>
                    <RequestFreeDogWalkForm />
                  </td>
                  <td>
                    <ToDoList />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr />
          <Testimonies />
          <hr />
          <Gallery />
          <hr />
          <DogAdvice />
          <hr />
          <Disclaimer />
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          <hr />
        </footer>
      </div>
    </>
  );
}
