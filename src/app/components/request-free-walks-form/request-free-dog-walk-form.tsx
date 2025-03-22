import { ReactNode, useEffect, useState } from "react";

import useBookFreeDogWalk, {
  BookingError,
} from "./hooks/use-book-free-dog-walk";
import { useGetDogBreeds } from "./hooks/use-get-dog-breeds";
import { BookDogWalkingPayload } from "./types/payloads/book-dog-walking.payload";

type FormState = "submitted" | "submitting" | "draft" | "error";

const formStateLabels: Record<FormState, string> = {
  submitted: "Submitted!",
  submitting: "Submitting...",
  draft: "Submit",
  error: "Error!",
};

const defaultBreedOption = "Choose a breed ...";

export function RequestFreeDogWalkForm() {
  const [ownerName, setOwnerName] = useState<string>("");
  const [ownerEmail, setOwnerEmail] = useState<string>("");
  const [ownerMessage, setOwnerMessage] = useState<string>("");
  const [borrowDateTime, setBorrowDateTime] = useState<string>("");
  const [dogName, setDogName] = useState<string>("");
  const [dogBreed, setDogBreed] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [formState, setFormState] = useState<FormState>("draft");

  const bookingDataState = useState<BookDogWalkingPayload | null>(null);
  const [bookingData] = bookingDataState;

  const bookingLoadingState = useState(true);
  const [, setIsBookingLoadingState] = bookingLoadingState;

  const bookingErrorState = useState<BookingError>(null);
  const [bookingError, setBookingError] = bookingErrorState;

  useBookFreeDogWalk({
    bookingDataState,
    bookingLoadingState,
    bookingErrorState,
    bookingPayload: {
      owner: ownerName,
      email: ownerEmail,
      dog: "",
      dogBreed: "",
      message: "",
      dogWalkDatetime: "",
      location: "",
      phoneNumber: "",
    },
  });

  const {
    data: dogBreeds,
    loading: isLoadingDogBreeds,
    error: dogBreedsError,
  } = useGetDogBreeds();

  function formOnChange() {
    if (!ownerEmail) {
      setFormState("draft");
    }
  }
  function populateDogBreeds(): ReactNode {
    const isDogBreedsLoaded = dogBreeds && dogBreeds.dogs.length > 0;
    return (
      <>
        {isDogBreedsLoaded && (
          <option key="default">{defaultBreedOption}</option>
        )}
        {isDogBreedsLoaded &&
          dogBreeds.dogs.map((option, i) => <option key={i}>{option}</option>)}
        {!dogBreeds ||
          (isLoadingDogBreeds && <option>Loading dog breeds ...</option>)}
        {dogBreedsError && <option>Error grabbing dog breeds</option>}
      </>
    );
  }

  function isRequestWalkFormValid() {
    if (dogBreed === defaultBreedOption || !dogBreed) {
      alert("Dog breed is a required field.");
      return false;
    }
    return true;
  }

  function requestWalkFormSubmitted() {
    if (isRequestWalkFormValid()) {
      setFormState("submitting");
      setIsBookingLoadingState(true);
    }
  }

  useEffect(() => {
    if (bookingData) {
      setOwnerEmail("");
      setOwnerName("");
      setOwnerMessage("");
      setBorrowDateTime("");
      setDogBreed("");
      setDogName("");
      setLocation("");
      setFormState("submitted");
      setBookingError(null);
      setIsBookingLoadingState(false);
    }
  }, [bookingData, setOwnerEmail, setIsBookingLoadingState, setBookingError]);

  useEffect(() => {
    if (bookingError) {
      setFormState("error");
    }
  }, [bookingError]);
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
          <p>Your dog{"'"}s name</p>
          <input
            type="text"
            onChange={(e) => setDogName(e.target.value)}
            value={dogName}
          />
          <p>Your dog{"'"}s name</p>
          <input
            type="text"
            onChange={(e) => setDogName(e.target.value)}
            value={dogName}
          />
          <p>Where are you?</p>
          <input
            type="text"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
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
