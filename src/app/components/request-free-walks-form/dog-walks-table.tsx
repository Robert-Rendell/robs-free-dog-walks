import Image from "next/image";
import { RequestFreeDogWalkForm } from "./request-free-dog-walk-form";

export function DogWalksTable() {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>
              <Image
                className="center rounded-picture"
                src="/kerala-doggie.jpg"
                alt="Kerala Doggie"
                width={300}
                height={300}
                priority
              />
              <Image
                className="center"
                src="/dog-paw-prints-lg.png"
                alt="Paws"
                width={300}
                height={300}
                priority
              />
            </td>
            <td>
              <RequestFreeDogWalkForm />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
