export function Testimony({
  person,
  message,
  dog,
}: {
  person: string;
  message: string;
  dog: string;
}) {
  return (
    <>
      <div className="testimony">
        <h2>
          <b>{person}</b>{" "}
          <span style={{ fontSize: "medium" }}>
            (<b>Pet:</b> {dog})
          </span>
        </h2>
        <p>
          <i>&quot;{message}&quot;</i>
        </p>
      </div>
    </>
  );
}
