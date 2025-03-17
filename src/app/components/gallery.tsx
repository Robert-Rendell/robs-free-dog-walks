import Image from "next/image";
export function Gallery() {
  return (
    <>
      <h1>Gallery</h1>
      <table>
        <tbody>
          <tr>
            <td>
              <Image
                className="dark:invert center rounded-picture"
                src="/lilah.jpeg"
                alt="Lilah"
                width={300}
                height={300}
                priority
              />
              <span>Lucky</span>
              <span>Charlie</span>
              <span>Oryn</span>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
