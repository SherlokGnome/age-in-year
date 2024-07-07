
const howOld = (age, year) => {
    let currentYear = new Date().getFullYear(); //2024
    let birthYear = currentYear - age; // 2000
    let newAge = year - birthYear; // your new age
  
    if (year >= currentYear) {
      return `You will be ${newAge} in the year ${year}`;
    } else if (year > birthYear && year < currentYear) {
      return `You were ${newAge} in the year ${year}`;
    } else {
      return `The year ${year} was ${Math.abs(
        newAge
      )} years before you were born`;
    }
  };
  console.log(howOld(30, 2068));
  