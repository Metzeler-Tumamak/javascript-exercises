const findTheOldest = function (people) {
  const newArr = people.map((person) =>
    person.yearOfDeath
      ? { ...person }
      : { ...person, yearOfDeath: new Date().getFullYear() }
  );

  newArr.sort(
    (a, b) => a.yearOfDeath - a.yearOfBirth - (b.yearOfDeath - b.yearOfBirth)
  );

  return newArr.at(-1);
};

// Do not edit below this line
module.exports = findTheOldest;
