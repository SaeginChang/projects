import NationalityResult from "./components/NationalityResult";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Nationality } from "./interfaces/Nationality";

const ParentDiv = styled.div`
    width: 80vw;
    margin: auto;
    border: 5px darkgoldenrod solid;
    padding: 20px;
    text-align: center;
    background-color: #503a2a;
`;

const InputField = styled.input`
  padding: 10px;
  margin: 10px;
  font-size: 16px;
  border: 2px solid darkgoldenrod;
  border-radius: 5px;
`;

export default function App() {
    const [name, setName] = useState<string>("");
    const [nationality, setNationality] = useState<Nationality | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchNationality(): Promise<void> {
            if (!name) {
                setError("Please enter a name.");
                return;
            }

            // find name in api to search up nationality
            try {
                const response = await fetch(`https://api.nationalize.io?name=${name}`);
                const data = await response.json();

                if (!data || !data.country.length) {
                    throw new Error("No nationality data found.");
                }

                setNationality(data);
                setError(null);
            } catch (e: unknown) {
                setError(e instanceof Error ? e.message : "Unknown error");
                setNationality(null);
            }
        }

        fetchNationality()
    }, [name]);

    return (
        // enter name button area
        <ParentDiv>
            <h1>Nationality Predictor</h1>
            <InputField
                type="text"
                placeholder="Enter a name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            {nationality && <NationalityResult nationality={nationality} />}
        </ParentDiv>
    );
}
