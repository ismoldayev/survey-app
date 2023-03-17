import React from "react";
import { Person } from "../utils/types";

interface RankingResultsProps {
  people: Person[];
}

type Characteristic = "seksapil" | "cuteness" | "wifematerial";

const RankingResults: React.FC<RankingResultsProps> = ({ people }) => {
  function calculatePercentage(wins: number, matchups: number): string {
    return ((wins / matchups) * 100).toFixed(1);
  }

  const characteristics: Characteristic[] = [
    "seksapil",
    "cuteness",
    "wifematerial",
  ];

  const sortedPeople = people.sort(
    (a, b) =>
      b.wins.seksapil +
      b.wins.cuteness +
      b.wins.wifematerial -
      (a.wins.seksapil + a.wins.cuteness + a.wins.wifematerial)
  );

  return (
    <div className="ranking-results">
      <h2>Results:</h2>
      <ol>
        {sortedPeople.map((person, index) => (
          <li key={person._id}>
            <div className="img-container">
              <img src={person.photoUrl} alt={person.name} />
              {index === 0 && (
                <img
                  src="/crown.png"
                  alt="crown"
                  className="crown"
                  width="70"
                  height="70"
                />
              )}
            </div>
            <h3>{person.name}</h3>
            {characteristics.map((characteristic) => (
              <p key={characteristic}>
                {characteristic} wins: {person.wins[characteristic]} /{" "}
                {person.matchups[characteristic]} (
                {calculatePercentage(
                  person.wins[characteristic],
                  person.matchups[characteristic]
                )}
                %)
              </p>
            ))}
            <p>
              Total wins:{" "}
              {person.wins.seksapil +
                person.wins.cuteness +
                person.wins.wifematerial}
              <br />
              Total matchups:{" "}
              {person.matchups.seksapil +
                person.matchups.cuteness +
                person.matchups.wifematerial}
              <br />
              Overall win percentage:{" "}
              {calculatePercentage(
                person.wins.seksapil +
                  person.wins.cuteness +
                  person.wins.wifematerial,
                person.matchups.seksapil +
                  person.matchups.cuteness +
                  person.matchups.wifematerial
              )}
              %
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default RankingResults;
