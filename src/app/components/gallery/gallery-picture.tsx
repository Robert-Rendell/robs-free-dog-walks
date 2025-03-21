import Image from "next/image";
export function GalleryPicture({
  caption,
  filename,
  alt,
}: {
  caption?: string;
  filename: string;
  alt?: string;
}) {
  return (
    <>
      <div style={{ position: "relative", margin: "5px" }}>
        <Image
          unoptimized={filename.includes(".gif")}
          className="center rounded-picture"
          src={`/${filename}`}
          alt={alt ?? "gallery picture missing"}
          width={300}
          height={300}
          priority
        />
        {caption && (
          <span
            className="gallery-picture-caption"
            style={{
              position: "absolute",
              fontSize: "x-large",
              top: "50px",
              right: "50px",
              color: "indigo",
              background: "white",
              borderRadius: "15%",
              padding: "10px",
            }}
          >
            &quot;{caption}&quot;
          </span>
        )}
      </div>
    </>
  );
}
