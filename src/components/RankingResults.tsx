import React from "react";
import { Person } from "../utils/types";

interface RankingResultsProps {
  people: Person[];
}

type Characteristic = "attractiveness" | "intelligence" | "charisma";

const RankingResults: React.FC<RankingResultsProps> = ({ people }) => {
  function calculatePercentage(wins: number, matchups: number): string {
    return ((wins / matchups) * 100).toFixed(1);
  }

  const characteristics: Characteristic[] = [
    "attractiveness",
    "intelligence",
    "charisma",
  ];

  return (
    <div className="ranking-results">
      <h2>Results:</h2>
      <ol>
        {people
          .sort((a, b) => {
            const aTotalWins =
              a.wins.attractiveness + a.wins.intelligence + a.wins.charisma;
            const aTotalMatchups =
              a.matchups.attractiveness +
              a.matchups.intelligence +
              a.matchups.charisma;
            const aPercentage = aTotalWins / aTotalMatchups;

            const bTotalWins =
              b.wins.attractiveness + b.wins.intelligence + b.wins.charisma;
            const bTotalMatchups =
              b.matchups.attractiveness +
              b.matchups.intelligence +
              b.matchups.charisma;
            const bPercentage = bTotalWins / bTotalMatchups;

            return bPercentage - aPercentage;
          })
          .map((person) => (
            <li key={person._id}>
              <div className="img-container">
                <img src={person.photoUrl} alt={person.name} />
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
                {person.wins.attractiveness +
                  person.wins.intelligence +
                  person.wins.charisma}
                <br />
                Total matchups:{" "}
                {person.matchups.attractiveness +
                  person.matchups.intelligence +
                  person.matchups.charisma}
                <br />
                Overall win percentage:{" "}
                {calculatePercentage(
                  person.wins.attractiveness +
                    person.wins.intelligence +
                    person.wins.charisma,
                  person.matchups.attractiveness +
                    person.matchups.intelligence +
                    person.matchups.charisma
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
