import { ReactNode, useState } from "react";

type FormState = "submitted" | "submitting" | "draft";

const formStateLabels: Record<FormState, string> = {
  submitted: "Submitted!",
  submitting: "Submitting...",
  draft: "Submit",
};

export function RequestFreeDogWalkForm() {
  const [ownerEmail, setOwnerEmail] = useState<string>();
  const [ownerName, setOwnerName] = useState<string>();
  const [ownerMessage, setOwnerMessage] = useState<string>();
  const [borrowDateTime, setBorrowDateTime] = useState<string>();
  const [dogBreed, setDogBreed] = useState<string>();
  const [formState, setFormState] = useState<FormState>("draft");

  function formOnChange() {
    if (!ownerEmail) {
      setFormState("draft");
    }
  }
  function populateDogBreeds(): ReactNode {
    const options = [
      "Border Collie",
      "Cocker Spaniel",
      "Cockapoo",
      "Village dog",
    ];
    return (
      <>
        {options.map((option, i) => (
          <option key={i}>{option}</option>
        ))}
      </>
    );
  }

  function requestWalkFormSubmitted() {
    setOwnerEmail("");
    setOwnerName("");
    setOwnerMessage("");
    setBorrowDateTime("");
    setDogBreed("");
    setFormState("submitted");
  }
  return (
    <>
      <div className="request-walk-form">
        <h1>Request a free dog walk</h1>

        <form onChange={formOnChange}>
          <p>Your name</p>
          <input
            type="text"
            onChange={(e) => setOwnerName(e.target.value)}
            value={ownerName}
          />
          <p>Your email</p>
          <input
            type="email"
            onChange={(e) => setOwnerEmail(e.target.value)}
            value={ownerEmail}
          />
          <p>Your message</p>
          <textarea
            onChange={(e) => setOwnerMessage(e.target.value)}
            value={ownerMessage}
          />

          <p>Dog Breed</p>
          <select
            onChange={(e) => setDogBreed(e.target.value)}
            value={dogBreed}
          >
            {populateDogBreeds()}
          </select>
          <p>Date / Time slot for walkies</p>
          <input
            type="datetime-local"
            onChange={(e) => setBorrowDateTime(e.target.value)}
            value={borrowDateTime}
          />
          <input
            className="submit-button"
            name="submit"
            type="button"
            value={formStateLabels[formState]}
            onClick={requestWalkFormSubmitted}
          />
        </form>
      </div>
    </>
  );
}
