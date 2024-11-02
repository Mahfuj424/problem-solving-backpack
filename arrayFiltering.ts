type Person = {
  name: string;
  age: number;
  gender: string;
};

const member: Person[] = [
  { name: "Oishi", age: 25, gender: "female" },
  { name: "Mahfuj😎", age: 30, gender: "male" },
  { name: "Abdullah", age: 28, gender: "male" },
  { name: "Mahfuja😂", age: 22, gender: "female" },
];

function getMaleNames(peopleArray: Person[]): string[] {
  return peopleArray
    .filter((person) => person.gender === "male")
    .map((person) => person.name);
}

console.log(getMaleNames(member));
