import { GalleryPicture } from "./gallery-picture";

export function Gallery() {
  return (
    <>
      <h1>Gallery</h1>
      <h2>Here are some of the dogs I regularly walk:</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <GalleryPicture filename="lilah.jpeg" caption="Lilah" />
            </td>
            <td>
              {" "}
              <GalleryPicture filename="charlie.gif" caption="Charlie" />
            </td>
            <td>
              <GalleryPicture filename="lucky.jpg" caption="Lucky" />
            </td>
            <td>
              <GalleryPicture filename="oryn.jpg" caption="Oryn" />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
