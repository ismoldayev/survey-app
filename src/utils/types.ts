export interface Person {
    _id: string;
    name: string;
    photoUrl: string;
    wins: {
      attractiveness: number;
      intelligence: number;
      charisma: number;
    };
  }
  