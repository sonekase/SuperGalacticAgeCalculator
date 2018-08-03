import { SuperGalacticAgeCalculator } from './../src/SuperGalacticAgeCalculator.js';


describe('SuperGalacticAgeCalculator', function(){

  it('should calculate the age of someone into seconds', function() {
  let calculator = new SuperGalacticAgeCalculator();
  expect(calculator.ageInSeconds(21)).toEqual(662256000);
  });

  it('should calculate the seconds between two dates', function () {
  let calculator = new SuperGalacticAgeCalculator();
  let dateOne = [2018, 0, 2];
  let dateTwo = [2018, 0, 1];
  expect(calculator.secondsBetweenDates(dateOne, dateTwo)).toEqual(86400);
  });

  it('should calculate the age of someone into Earth years', function () {
  let calculator = new SuperGalacticAgeCalculator();
  expect(calculator.ageInYearsOnEarth(21)).toEqual(21);
  });

  it('should calculate the age of someone into Mercury years', function () {
  let calculator = new SuperGalacticAgeCalculator();
  expect(calculator.ageInYearsOnMercury(21)).toEqual(87);
  });

  it('should calculate the age of someone into Venus years', function () {
  let calculator = new SuperGalacticAgeCalculator();
  expect(calculator.ageInYearsOnVenus(21)).toEqual(33);
  });

  it('should calculate the age of someone into Mars years', function () {
  let calculator = new SuperGalacticAgeCalculator();
  expect(calculator.ageInYearsOnMars(21)).toEqual(11);
  });

  it('should calculate the age of someone into Jupiter years', function () {
  let calculator = new SuperGalacticAgeCalculator();
  expect(calculator.ageInYearsOnJupiter(21)).toEqual(1);
  });

  it('should return the max life of a male person on Mercury', function () {
  let calculator = new SuperGalacticAgeCalculator();
  expect(calculator.maxLifeOnPlanet("male", "Mercury")).toEqual(414);
  });

  it('should return the max life of a female person on Mercury', function () {
  let calculator = new SuperGalacticAgeCalculator();
  expect(calculator.maxLifeOnPlanet("female", "Mercury")).toEqual(435);
  });

  it('should return the max life of a male person on Venus', function () {
  let calculator = new SuperGalacticAgeCalculator();
  expect(calculator.maxLifeOnPlanet("male", "Venus")).toEqual(162);
  });

  it('should return the max life of a female person on Venus', function () {
  let calculator = new SuperGalacticAgeCalculator();
  expect(calculator.maxLifeOnPlanet("female", "Venus")).toEqual(170);
  });

  it('should return the max life of a male person on Mars', function () {
  let calculator = new SuperGalacticAgeCalculator();
  expect(calculator.maxLifeOnPlanet("male", "Mars")).toEqual(53);
  });

  it('should return the max life of a female person on Mars', function () {
  let calculator = new SuperGalacticAgeCalculator();
  expect(calculator.maxLifeOnPlanet("female", "Mars")).toEqual(55);
  });

  it('should return the max life of a male person on Jupiter', function () {
  let calculator = new SuperGalacticAgeCalculator();
  expect(calculator.maxLifeOnPlanet("male", "Jupiter")).toEqual(8);
  });

  it('should return the max life of a female person on Jupiter', function () {
  let calculator = new SuperGalacticAgeCalculator();
  expect(calculator.maxLifeOnPlanet("female", "Jupiter")).toEqual(8);
  });

  it('should return difference in currentAge compare to maxAge on Mercury', function () {
  let currentAge = 420;
  let maxAge = 414;
  let calculator = new SuperGalacticAgeCalculator();
  expect(calculator.pastMaxLifeOnPlanet("Mercury", currentAge, maxAge)).toEqual(6);
  });

  it('should return difference in currentAge compare to maxAge on Venus', function () {
  let currentAge = 168;
  let maxAge = 162;
  let calculator = new SuperGalacticAgeCalculator();
  expect(calculator.pastMaxLifeOnPlanet("Venus", currentAge, maxAge)).toEqual(6);
  });

  it('should return difference in currentAge compare to maxAge on Mars', function () {
  let currentAge = 59;
  let maxAge = 53;
  let calculator = new SuperGalacticAgeCalculator();
  expect(calculator.pastMaxLifeOnPlanet("Mars", currentAge, maxAge)).toEqual(6);
  });

  it('should return difference in currentAge compare to maxAge on Jupiter', function () {
  let currentAge = 14;
  let maxAge = 8;
  let calculator = new SuperGalacticAgeCalculator();
  expect(calculator.pastMaxLifeOnPlanet("Jupiter", currentAge, maxAge)).toEqual(6);
  });

});
