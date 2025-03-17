export function Testimony({
  person,
  message,
}: {
  person: string;
  message: string;
}) {
  return (
    <>
      <div className="testimony">
        <h2>
          <b>{person}</b>
        </h2>
        <p>
          <i>&quot;{message}&quot;</i>
        </p>
      </div>
    </>
  );
}
