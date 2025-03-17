import { GalleryPicture } from "./gallery-picture";

export function Gallery() {
  return (
    <>
      <h1>Gallery</h1>
      <table>
        <tbody>
          <tr>
            <td>
              <GalleryPicture filename="lilah.jpeg" caption="Lilah" />

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
