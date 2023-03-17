import { Person } from "./types";

const API_BASE_URL = "/api";

export async function getMatchup(): Promise<{
  personA: Person;
  personB: Person;
}> {
  const response = await fetch(`${API_BASE_URL}/matchup`);
  return await response.json();
}

export async function submitVote(
  characteristic: string,
  selectedPersonId: string,
  otherPersonId: string
): Promise<void> {
  await fetch(`${API_BASE_URL}/vote`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      characteristic,
      selectedPersonId,
      otherPersonId,
    }),
  });
}

export async function getResults(password: string): Promise<Person[]> {
  const response = await fetch(`${API_BASE_URL}/results`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password,
    }),
  });

  if (!response.ok) {
    throw new Error("Invalid password");
  }

  return await response.json();
}
