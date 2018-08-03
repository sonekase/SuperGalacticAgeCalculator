var moment = require('moment');

export class SuperGalacticAgeCalculator {
constructor () {
}

  ageInSeconds(age) {
    let secondsInYear = (age * 31536000);
    return secondsInYear;
  }

//Moment.js Parse, validate, manipulate, and display dates and times in JavaScript.
  secondsBetweenDates(date1, date2) {
    let a = moment(date1);
    let b = moment(date2);
    let result = a.diff(b, 'seconds');
    return result;
  }

  ageInYearsOnEarth(age) {
  let ageOnEarth = Math.floor(age / 1);
  return ageOnEarth;
}

  ageInYearsOnMercury(age) {
    let ageOnMercury = Math.floor(age / 0.24);
    return ageOnMercury;
  }

  ageInYearsOnVenus(age) {
    let ageOnVenus = Math.floor(age / 0.62);
    return ageOnVenus;
  }

  ageInYearsOnMars(age) {
   let ageOnMars = Math.floor(age / 1.88);
   return ageOnMars;
 }

 ageInYearsOnJupiter(age) {
   let ageOnJupiter = Math.floor(age / 11.86);
   return ageOnJupiter;
 }




}
