export class Age {
  constructor(userAge, mercury, venus, mars, jupiter) {
  this.userAge = userAge,
  this.mercury = mercury, 
  this.venus = venus, 
  this.mars = mars
  this.jupiter = jupiter
  }
  checkUserAge(age) {
    if (age === 1 || age <= 120)
    return age
  } 

  mercuryAge(age) {
    let mercuryAge = age / .24;
    let convertAge = parseFloat(mercuryAge.toFixed(2));
    return convertAge;
  }
  venusAge(age) {
    let venusAge = age / .62;
    let convertAge = parseFloat(venusAge.toFixed(2));
    return convertAge;
  }
  marsAge(age) {
    let marsAge = age / 1.88;
    let convertAge = parseFloat(marsAge.toFixed(2));
    return convertAge;
  }
 
  jupiterAge(age) {
    let jupiterAge = age / 11.86;
    let convertAge = parseFloat(jupiterAge.toFixed(2));
    return convertAge;
  }
  earthLife(age) {
    let earthLife = 78 - age;
    return earthLife;
  }
};