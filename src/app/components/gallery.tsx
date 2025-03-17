import Image from "next/image";
export function Gallery() {
  return (
    <>
      <h1>Gallery</h1>
      <p>Here it is</p>
      <table>
        <tbody>
          <tr>
            <td>
              <Image
                className="dark:invert center"
                src="/lilah.jpeg"
                alt="Lilah"
                width={300}
                height={300}
                priority
              />
            </td>
            <td>
              <Image
                className="dark:invert center"
                src="/oryn.jpeg"
                alt="Oryn"
                width={300}
                height={300}
                priority
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
