import { ReactNode, useState } from "react";

export function RequestFreeDogWalkForm() {
    const [ownerEmail, setOwnerEmail] = useState<string>();
    const [ownerName, setOwnerName] = useState<string>();
    const [borrowDateTime, setBorrowDateTime] = useState<string>();
    const [dogBreed, setDogBreed] = useState<string>();

    function populateDogBreeds(): ReactNode {
        const options = [
            "Border Collie",
            "Cocker Spaniel",
            "Cockapoo",
            "Village dog"
        ]
        return <>
            {options.map((option) => <option>{option}</option>)}
        </>
    }

    function requestWalkFormSubmitted(e: any) {
        alert("form submitted")
    }
    return <>
        <div className="request-walk-form">
            <h1>Request a free dog walk</h1>

            <form id="request-walk-form">
                <p>Your name</p>
                <input type="text" onChange={(e) => setOwnerName(e.target.value)} />
                <p>Your email</p>
                <input type="email" onChange={(e) => setOwnerEmail(e.target.value)} />

                <p>Dog Breed</p>
                <select onChange={(e) => setDogBreed(e.target.value)}>
                    {populateDogBreeds()}
                </select>
                <p>Date for walkies</p>
                <input type="datetime-local" onChange={(e) => setBorrowDateTime(e.target.value)} />
                <input name="submit" type="button" value="Submit" onClick={(e) => requestWalkFormSubmitted(e)} />
            </form>
        </div></>
}