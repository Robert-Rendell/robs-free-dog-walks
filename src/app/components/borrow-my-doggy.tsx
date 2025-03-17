import Image from "next/image";
export function BorrowMyDoggy() {
  return (
    <>
      <h1>BorrowMyDoggy</h1>
      <Image
        className="dark:invert center"
        src="/borrowmydoggy.png"
        alt="Borrow my doggy"
        width={1000}
        height={1000}
        priority
      />
    </>
  );
}
