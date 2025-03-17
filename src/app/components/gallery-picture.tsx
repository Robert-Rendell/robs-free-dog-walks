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
      <div style={{ position: "relative" }}>
        <Image
          className="dark:invert center rounded-picture"
          src={`/${filename}`}
          alt={alt ?? "gallery picture missing"}
          width={300}
          height={300}
          priority
        />
        {caption && (
          <span
            style={{
              position: "absolute",
              top: "50px",
              right: "50px",
              fontSize: "x-large",
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
