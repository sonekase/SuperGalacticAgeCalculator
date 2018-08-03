# Super Galactic Age Calculator

##### A calculator that determines user age based on planet's solar years.

#### By Anousone Kaseumsouk, 08/03/2018.

## Description

 Super Galactic Age Calculator is an application that determines a user’s age based on a planet’s solar years. User enters data such as age or a time span to calculate age on different planets along with their age in seconds on earth.

## Setup

Install SuperGalacticAgeCalculator by cloning this repository.
Install all the webpacks in package.json.
Initialize Jasmine and Karma.

## Technologies Used

Application: JavaScript, Node.js, Webpack, Jasmine, Karma

## Support and Contact

For any questions or support details, please email:
anousonekaseumsouk@icloud.com

## Spec

* Take a person’s age in years and convert it into seconds.

|Input  | Output                 |
|--------|-----------------------|
|21 years|662,695,992  seconds   |

* Take two dates and determine the difference, in seconds, between the two.

|Input  | Output                 |
|--------|-----------------------|
|December 24, 2018-December 25, 2018|86400 seconds |

* Return the age of a human in Mercury years

|Input  | Output                 |
|--------|-----------------------|
|21 years|87.0 years            |

* Return the age of a human in Venus years

|Input  | Output                 |
|--------|-----------------------|
|21 years|34.0 years             |

* Return the age of a human in Mars years

|Input  | Output                 |
|--------|-----------------------|
|21 years|11.0 years             |

* Return the age of a human in Jupiter years

|Input  | Output                 |
|--------|-----------------------|
|21 years|1.7 years              |

* Determine how many years a user has left to live on each planet. Example: 21 years old/Max life 100 years old.

|Planet    | Max Life      | Years Left   |
|--------- |---------------|--------------|
|Earth     |100.0 years    | 79.0         |
|Mercury   |414.0 years    | 327.0        |
|Venus     |162.0 years    | 128.0        |
|Mars      |53.0 years     | 42.0         |
|Jupiter   |8.0 years      | 6.0          |


* If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy.

|Planet    | Max Life      | Years Old Current| Years Lived Past |
|--------- |---------------|------------------|------------------|
|Earth     |100.0 years    | 101.0            | 1.0              |


### Legal

Copyright (c) 2018 **Anousone Kaseumsouk**

This software is licensed under the MIT license.
