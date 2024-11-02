const member = [
  {
    name: "male-1",
    age: "20",
    gender: "male",
  },
  {
    name: "female-1",
    age: "20",
    gender: "female",
  },
  {
    name: "male-2",
    age: "20",
    gender: "male",
  },
  {
    name: "female-2",
    age: "20",
    gender: "female",
  },
  {
    name: "male-3",
    age: "20",
    gender: "male",
  },
];

const findOutPerson = () => {
  const femalePerson = member.map((person) => person?.gender === "female");
  console.log(femalePerson);
};

console.log(findOutPerson());
