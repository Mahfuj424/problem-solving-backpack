type Car = {
  make: string;
  model: string;
  year: number;
};

const cars: Car[] = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Civic", year: 2015 },
  { make: "banggari🛻😂", model: "Mustang", year: 2005 },
];

function sortCarsByYear(carsArray: Car[]): Car[] {
  return carsArray.sort((a, b) => a.year - b.year);
}

console.log(sortCarsByYear(cars));
