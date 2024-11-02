type PersonInfo = {
  name: string;
  age: number;
};

const peopleArray: PersonInfo[] = [
  { name: "Mahfuj", age: 25 },
  { name: "Abdullah", age: 30 },
  { name: "shakil", age: 28 },
];

function updatePersonAge(
  peopleArray: PersonInfo[],
  personName: string,
  newAge: number
): PersonInfo[] {
  const person = peopleArray.find((p) => p.name === personName);
  if (person) {
    person.age = newAge;
  }
  return peopleArray;
}

console.log(updatePersonAge(peopleArray, "Bob", 35));
