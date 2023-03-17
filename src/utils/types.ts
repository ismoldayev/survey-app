export interface Person {
  _id: string;
  name: string;
  photoUrl: string;
  wins: {
    seksapil: number;
    cuteness: number;
    wifematerial: number;
  };
  matchups: {
    seksapil: number;
    cuteness: number;
    wifematerial: number;
  };
}