import { SuperGalacticAgeCalculator } from './../src/SuperGalacticAgeCalculator.js';


describe('SuperGalacticAgeCalculator', function(){

  it('should calculate the age of someone into seconds', function() {
    let calculator = new Calculator();
    expect(calculator.ageInSeconds(21)).toEqual(662256000);
  });

  it('should calculate the seconds between two dates', function () {
   let calculator = new Calculator();
   let a = [2018, 0, 2];
   let b = [2018, 0, 1];
   expect(calculator.secondsBetweenTwoDates(a, b)).toEqual(86400);
 });

 it('should calculate the age of someone into Earth years', function () {
   expect(calculator.ageInYearsOnMercury(21)).toEqual(21);
 });

 it('should calculate the age of someone into Mercury years', function () {
   expect(calculator.ageInYearsOnMercury(21)).toEqual(87);
 });

 it('should calculate the age of someone into Venus years', function () {
  expect(calculator.ageInYearsOnVenus(21)).toEqual(34);
});

it('should calculate the age of someone into Mars years', function () {
  expect(calculator.ageInYearsOnMars(21)).toEqual(11);
});

it('should calculate the age of someone into Jupiter years', function () {
  expect(calculator.ageInYearsOnJupiter(21)).toEqual(1);
});








});
