import styled from "styled-components";
import { Nationality } from "../Interfaces/Nationality";

const NationalityDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 60%;
    margin: 20px auto;
    padding: 20px;
    background-color: #27cfff;
    border: 3px solid navy;
    border-radius: 10px;
    font-family: Arial, sans-serif;
    text-align: center;
`;

const CountryList = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const CountryItem = styled.li`
    background: #000065;
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
`;

export default function NationalityResult({ nationality }: { nationality: Nationality }) {
    return (
        <NationalityDiv>
            <h2>Predicted Nationalities for {nationality.name}</h2>
            <CountryList>
                {nationality.country.map((c) => (
                    <CountryItem key={c.country_id}>
                        <strong>Country:</strong> {c.country_id} <br />
                        <strong>Probability:</strong> {(c.probability * 100).toFixed(2)}%
                    </CountryItem>
                ))}
            </CountryList>
        </NationalityDiv>
    );
}