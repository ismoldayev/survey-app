import { useState } from "react";
import Head from "next/head";
import Matchup from "../components/Matchup";
import RankingResults from "../components/RankingResults";
import { getMatchup, submitVote, getResults } from "../utils/api";
import { Person } from "../utils/types";

export default function Home() {
  const [characteristic, setCharacteristic] = useState<
  "seksapil" | "cuteness" | "wifematerial" | null
  >(null);
  const [personA, setPersonA] = useState<Person | null>(null);
  const [personB, setPersonB] = useState<Person | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<Person[]>([]);

  async function handleCharacteristicSelect(
    selectedCharacteristic: "seksapil" | "cuteness" | "wifematerial"
  ) {
    setCharacteristic(selectedCharacteristic);
    const { personA, personB } = await getMatchup();
    setPersonA(personA);
    setPersonB(personB);
  }

  async function handlePersonSelect(selectedPersonId: string) {
    const { personA, personB } = await getMatchup();
    setPersonA(personA);
    setPersonB(personB);
    const otherPersonId =
      personA?._id === selectedPersonId ? personB?._id : personA?._id;
    await submitVote(
      characteristic as "seksapil" | "cuteness" | "wifematerial",
      selectedPersonId,
      otherPersonId
    );
  }

  async function handleShowResults() {
    const password = prompt("Please enter the password to view the results:");
    if (password) {
      try {
        const people = await getResults(password);
        setResults(people);
        setShowResults(true);
      } catch (error) {
        alert("Invalid password");
      }
    }
  }

  return (
    <div className="container">
      <Head>
        <title>Survey App</title>
        <meta name="description" content="Survey App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!characteristic && (
        <div>
          <h2>Please select a characteristic to rank:</h2>
          <div className="btn-container">
            <button
              className="btn"
              onClick={() => handleCharacteristicSelect("seksapil")}
            >
              Sex appeal
            </button>
            <button
              className="btn"
              onClick={() => handleCharacteristicSelect("cuteness")}
            >
              Cuteness
            </button>
            <button
              className="btn"
              onClick={() => handleCharacteristicSelect("wifematerial")}
            >
              Wife material
            </button>
          </div>
          <div className="btn-container">
            <button className="btn" onClick={handleShowResults}>
              Show Results
            </button>
          </div>
        </div>
      )}
      {characteristic && !showResults && (
        <h3 className="warning">Бъдете честни!</h3>
      )}
      {characteristic && !showResults && (
        <h2>
          Ranking:{" "}
          {characteristic.charAt(0).toUpperCase() + characteristic.slice(1)}
        </h2>
      )}

      {characteristic && !showResults && (
        <Matchup
          personA={personA}
          personB={personB}
          onPersonSelect={handlePersonSelect}
        />
      )}

      {characteristic && !showResults && (
        <div className="btn-container">
          <button className="btn" onClick={() => setCharacteristic(null)}>
            Switch Characteristic
          </button>
          <button className="btn" onClick={handleShowResults}>
            Show Results
          </button>
        </div>
      )}

      {showResults && (
        <>
          <div className="btn-container">
            <button className="btn" onClick={() => setShowResults(false)}>
              Choose New Characteristic
            </button>
          </div>
          <RankingResults people={results} />
        </>
      )}
    </div>
  );
}
