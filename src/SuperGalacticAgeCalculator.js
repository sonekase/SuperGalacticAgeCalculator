import moment from "moment"

export class SuperGalacticAgeCalculator {
  constructor () {
  }

  ageInSeconds(age) {
    let secondsInYear = (age * 31536000);
    return secondsInYear;
  }

//Moment.js Parse, validate, manipulate, and display dates and times in JavaScript.
  secondsBetweenDates(date1, date2) {
    let dateOne = moment(date1);
    let dateTwo = moment(date2);
    let result = dateOne.diff(dateTwo, 'seconds');
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

  maxLifeOnPlanet(sex, planet) {
   if(sex === "male" && planet === "Mercury") {
     return 414;
    } else if(sex === "female" && planet === "Mercury") {
     return 435;
    } else if(sex === "male" && planet === "Venus") {
     return 162;
    } else if(sex === "female" && planet === "Venus") {
     return 170;
    } else if(sex === "male" && planet === "Mars") {
    return 53;
    } else if(sex === "female" && planet === "Mars") {
    return 55;
    } else if(sex === "male" && planet === "Jupiter") {
    return 8;
    } else if(sex === "female" && planet === "Jupiter") {
    return 8;
   }
 }

 pastMaxLifeOnPlanet(planet, currentAge, maxAge) {
   if (planet === "Mercury" && currentAge > maxAge) {
     return currentAge - maxAge;
   } else if (planet === "Venus" && currentAge > maxAge) {
     return currentAge - maxAge;
   } else if (planet === "Mars" && currentAge > maxAge) {
     return currentAge - maxAge;
   } else if (planet === "Jupiter" && currentAge > maxAge) {
     return currentAge - maxAge;
   }
 }

}
